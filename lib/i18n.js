import { getAllFilesFrontMatter } from '@/lib/mdx'
import { languages } from '@/lib/constants'

export async function getAllFilesByLanguages() {
  return await Promise.all(
    languages.map(async (lang) => await getAllFilesFrontMatter(`blog/${lang}`))
  )
}
