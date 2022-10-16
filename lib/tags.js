import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'
import { languages } from '@/lib/constants'

const root = process.cwd()

export async function getAllTags(...types) {
  const files = await getFiles(...types)

  let tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', ...types, file), 'utf8')
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}

export async function getAllTagsByLanguages() {
  return await Promise.all(
    languages.map(async (lang) => {
      let tags = await getAllTags(`blog/${lang}`)
      return {
        lang: lang,
        tags,
      }
    })
  )
}
