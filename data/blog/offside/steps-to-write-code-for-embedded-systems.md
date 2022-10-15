---
title: '[Offside] - Steps to write code for embedded systems'
date: '2021-07-26'
tags: ['offside', 'iot', 'cpp']
draft: false
summary: "I'll present here how I manage myself to write code for embedded systems or during IoT projects."
images:
  ['https://cdn3.vectorstock.com/i/1000x1000/51/62/human-brain-thinking-process-vector-1155162.jpg']
---

_Let's say this is an offside post. It doesn't concern any serial articles about FreeRTOS that I've started._

![A human who is thinking](https://i.pinimg.com/564x/31/01/b1/3101b17c829563c2cedfaf19bd78ea77.jpg)

This article is also available on my [Hashnode](https://tawalmcblog.hashnode.dev/) account.

# So we need to write the firmware for our next embedded project

As (young 😃) IoT developer, I spend more times to write code which run on MCU (ATmega/Arduino) and get data from sensors
and control or interact with other devices. And it is something that I like. You read sensors or electronic component
documentation, you come back to write the code to control it and add other pieces of codes to execute some new actions.
So I will share here some advices or steps that I follow to `write firmware` on embedded projects.

`firmware:` source code which runs directly on device or on microcontroler not on software or an OS.

## To get started

1. You need to express concretly your goal when start this project, you can ask yoursel: `What do I want to archieve at the end?`
   It is very important to have a clear vision of what you want to do like control the house's lights, connect
   your device through the Wi-Fi module (`I'll write a next article on Wi-Fi with ESP8266 😎`).
   Then you can now:

2. Divide your goal into small tasks and it is the main part to write code (`new source code`) for your project.
   Your goal is like a house where there are some rooms with toilets, the garden,...So you need them to know how to start but also what
   is important to do firstly, what can be used accross differents pieces of your code and
   which components, kind of sensors you need.

Let's say you have this:

![steps to code firmware](/static/images/steps_code_firmware.png)

## Now you know the main parts, you can jump to the code, finally we going to the space

Here I usually proceed like the `OODA` loop model:

- I `Observe` my tools (sensors, devices) by testing some codes to understand their operation then,
- I can `Orient` my reflection based on my needs and the components' features so,
- I `Decide` to how I can write/start my code and
- I `Act` by writing the code and test it and if needed, I come back to the first step _Observe_ and start again the loop.

It is very important to have such kind of process that you follow and evolve to archieve your goal. It'is not sound like
the Holy Grail, I try just to get some habits which will help me in daily tasks.

## But actually what is contained in each Steps

1. Test each components of your system

You need to be sure that each component of your project work. To do that, open a plain file code where you test each of them if it is sensors
or other things that a code can run. So you can `approximatively` say that you're working in `stable environment`. - _[Observe]_

2. Put together each pieces of code

Based on you projects needs, you can write separetly each piece of code but in the way (order) to
archieve the goals. Each time you're sure about the running of a code you can add it to the
main code and test it. - _[Orient/Decide]_

3. Test new code or little code

Take in your mind: `YOU NEED TO TEST/RUN EACH PIECE OF CODE YOU ADD`. Don't wait to write a lot of
codes before test it or before get insurance about its working. If not you will have at the end
of your day or project a bunch of codes with many bugs may be independants or not to fix. And
you can trust me `IT IS THE MOST BAD SITUATION THAT YOU CAN ENCOUNTER`. Why? Simple: You'll start
to search the begin of the each bugs (which is not easy in this case), you will try to fix it and
the result is the rise of another bug or its creation. So test each new code and detect quickly an error.
But in many cases some bugs occurs when adding another code but in these cases you're oriented or you
need to go back the first steps above. -_[Act]_

## And?

I'll give you somes tips here that I use sometimes

- To test a code that need an electronic component which is not sensor, I write it as a function with
  parameters. And in a loop I pass it arbitrary or random data

- Read carefully about each sensors (google search, blog articles) or official documentations to have an overview of the sensor's running

- Don't forget that you write code for MCUs so space, time consuming are delicates

- Write one function per action and each component has its section of code write in functions

- Try to have functions with return type and that take parameters to avoid many sub-calls of void function in functions body

- If you're write code in C++, prefer using references over pointers to avoir leaks memory problems

- If you have collections of data, or some relatives data to share between functions or some parts of your code, think to use `C/C++ structures` (struct) to take them together

- Write simple code because simple code is more easily to maintain and understandable

- If you don't correctly know the behavior of some features, don't use it in enterprise code or short time projects

- Keep in mind you goal and

- Have fun when you're coding, not be afraid to make mistake: `EACH ERROR CAN HELP YOU TO REALIZE YOUR DREAM`.

# Voila, you get it

If you already have some basics in programming these advises will sounds familar to you.
Software engineering is like any careers paths where you need to practice to make perfects so do it but
smartly. I share some tips that I used in my daily tasks and I hope you've some others tips that you want to share
with us. I'm open to new tips and advises, my social accounts (below) are there for this purposes...

_So can you smell what TawalMc is cooking?_
