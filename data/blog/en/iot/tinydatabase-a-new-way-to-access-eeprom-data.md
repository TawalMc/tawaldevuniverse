---
title: '[Library] - TinyDatabase: A new way to access EEPROM data'
date: '2021-10-18'
tags: ['iot', 'cpp', 'arduino']
draft: false
summary: "When working on embedded projects we need sometimes to persist data. We can use so the internal EEPROM of our board and access data through their index. Let's dicover a new library that encapsulate this process."
images: ['/static/images/tinydatabase-logo.png']
---

![TinyDatabase logo](/static/images/tinydatabase-logo.png)

`TinyDatabase` is an Arduino library to make easy the access to EEPROM data. It follows the SQL (ORM) queries philosophy so instead of reading/getting data by index (so remember all index and data type stored at these index), you can do something like this:

- To insert data

```cpp
MemoryManager mem;

// insert data
int   em1_ag = 25,
float em1_rt = 8.3;

mem.TO("EM")
	.INSERT("ag", &em1_ag)
	.INSERT("rt", &em1_rt)
	.DONE();

```

- To read data

```cpp
// filter and read data
int   age[6];

int   nbValue = 0;
int max_value = 28;

mem.FROM("EM")
	.WHERE("ag", FILTER::isLessThan, &max_value)
	.SELECT_ALL("ag", age, nbValue)
	.DONE();
```

We'll discuss more about features in earlier stage. And before that it is worth to remember that currently supports the internal AVR EEPROM and is available on [TinyDatabase](https://github.com/TawalMc/TinyDatabase_Arduino) with the [documentation](tinydatabase-doc.vercel.app). And it is already available on Arduino libraries manager( version 1.0.2).

# Why TinyDatabase ?

Firstly, 3 years ago at [YoupiLab](http://youpilab.com/) we've developped YoupiLab SEB, a commercial product for people, home, enterprises. SEB (Smart Electrical Box) allows user to program with manual or calendar and others mode the running (ON/OFF) of their electrical devices. They can program for example the ligth to be ON during ten minutes for the next friday and OFF after. So the system `store` the user settings, preferences and some data like log-file to used them when running. And for security and cost (not buy an SD module) reasons we decide to store these informations in the EEPROM: **`Welcome to the headaches`**.
Yes, we need to keep in documentation:

- all EEPROM index used
- data type stored at each index
- in case of String or char sequence we need also their length, and the end index to know where to store next informations, God!
  So imagine, by a bad night, you add +1 to one index when you read a data from EEPROM or update the informations in the documentation, I said, just imagine...  
  For example, we can store at index 200 the current mode which is a uint8_t so something like 2. And when we resume the system after a power outage, we go to the 201 index, what will happen ?

Secondly, for some small projects (we don't need a huge storage like SD) we want to persist some recursive informations like the name, the date, and others data of users as char sequences. What we usually do is to format informations:

- format informations then
- store each byte
- read informations
- parse the informations
- use them
  So let's say we have this situation

| name     | date     |
| -------- | -------- |
| TawalMc  | 10/10/20 |
| Universe | 15/05/21 |

We can format in this way: `#*name*date*&` and then we have `#*TawalMc*10/10/20*&#*Universe*15/05/21*&` stored in the EEPROM. So we need after to parse the whole String to get each user informations. I'm tired just by saying it, so deduce the amount of code....

# And the solution

Yes, the saint graal comes, I'm talking about TinyDatabase. In fact, TinyDatabase primary goal is to hide to user (other developer) these steps while working on EEPROM. No need more to keep index in documentations or write additional code just to parse after reading data from EEPROM. TinyDatabase does them and what you need is just remember your table name and its columns (word). Because TinyDatabase stores data in `table` with `columns` that you define when you want to create the table. So you can get row of data, store numerics values and access them just by name. Let's continue with this example:

#### You want to store the age and the rate of employees in the EEPROM

| age | rate | type  |
| --- | ---- | ----- |
| 25  | 8.3  | int   |
| 27  | 7    | float |

Just think like you are working on SQL database: you have the table employees and two columns of type int and float. TinyDatabase works like that.

## Work with tables

You need to store and retrieve these data to:

- create two columns: `ag` and `rt` (just 02 char are allowed for the name) and indicate their
  types (go to [documentation](tinydatabase-doc.vercel.app) to know more about TinyDatabase types)
- create a table named: `EM`
- define the maximal amount of data you think you can store..

```cpp
#include <TinyDatabase_Arduino.h>

MemoryManager mem; // the database manager

void setup() {
	...
	// 1- create array of columns
  	Column myCols[] = {{"ag", "INT"}, {"rt", "FLOAT"}};

	// 2- create table and provide capacity - 15, number of columns - 2 and table name - EM
	int isTbaleCreated = mem.CREATE_TABLE("EM", 15, 2, myCols);
	...
}
```

So we define the structure of our table then we can store data and we need here:

- a pointer to the data
- access to the table
- if you want you can update instead of insert

```cpp
	...
	// insert data
	int   em1_ag = 25,
		em2_ag = 27;

	float em1_rt = 8.3,
		em2_rt = 7;

	mem.TO("EM")
		.INSERT("ag", &em1_ag)
		.INSERT("rt", &em2_rt)
		.DONE();

	mem.TO("EM")
		.INSERT("ag", &em2_ag)
		.INSERT("rt"), &em2_rt)
		.DONE();
	...
```

Again no index and nothing more...

And if you want to get these data:

- may be all data so you need an array
- or a pointer if you want one data

```cpp
int em_age = 0,
	em_rt = 0.0;

meme.FROM("EM")
	.SELECT("ag", &em_age)
	.SELECT("rt", &em_rt)
	.DONE();
```

Again yes, it is all. All things you need is to remember the table and columns name and why not the data type to hold in right variable, the right data.

## DONE

You can check more about TinyDatabase on its [documentation](tinydatabase-doc.vercel.app).
So performance ?
I don't do yet any benchmark to give data about TinyDatabase performance but remember: - `TinyDatabase keeps all informations (table name, columns, data type) in the same EEPROM`. So if you have `1kb` as memory, less than 1kb are available to store data you want to persist.
You can know how many bytes are used to store these informations (meta data) by using this useful code:

```cpp
int metaDataBytes = EEPROM.length() - mem.sizeMeta();
```

- You're working on MCU so avoid repetitive delete actions
- You cannot delete a table
- char array are supported partially: INSERT, UPDATE, SELECT only
- String is not supported but you can convert it to char sequence

# Next steps

We want to make TinyDatabase available on many others electronic boards and MCU but our currently goals is to build a version of TinyDatabase to work on external storage like I2C EEPROM, independent ones or incorporated on DS1307 or DS3231 RTCs. To do it we are thinking to use uEEPROMLib of Naguissa to access data. More articles will be published soon to talk about `TinyDatabase` wrapper if you're working with char sequence, some tips and also the internal architecture of TinyDatabase.

# Conclusion

TinyDatabase is simple to use even if sometimes we need to deal with pointers. Its philosophy to make data access easy lead him to be a great solution if we work intensively with EEPROM. And it is the goal of all libraries: make developers life easy. Many features and improvement are planned but now we evaluate its uses on Arduino board. So any issues, contribution, report or comment are always welcome.
Below some useful links:

- Arduino library source code: [TinyDatabase_Arduino](https://github.com/TawalMc/TinyDatabase_Arduino)
- Documentation: [documentation](tinydatabase-doc.vercel.app)

_So can you smell what TawalMc is cooking?_
