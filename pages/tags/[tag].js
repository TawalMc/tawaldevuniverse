import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { getAllFilesByLanguages, getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import { useAtom } from 'jotai'
import { selectedLangAtom } from '@/lib/store'

const root = process.cwd()

/*
export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}
*/

export async function getServerSideProps({ params }) {
  const tags = await getAllTags('blog')

  const allPosts = await getAllFilesFrontMatter('blog')

  const i18nPosts = await getAllFilesByLanguages()

  const i18nFilteredPosts = i18nPosts.map((i18nPost) => ({
    lang: i18nPost.lang,
    posts: i18nPost.posts.filter(
      (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
    ),
  }))

  // rss
  /*const rss = generateRss(filteredPosts, `tags/${params.tag}/index.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'index.xml'), rss)*/

  return { props: { allPosts, i18nPosts: i18nFilteredPosts, tag: params.tag } }
}

export default function Tag({ i18nPosts, tag }) {
  // console.log({posts})
  // Capitalize first letter and convert space to dash
  const [selectedLang] = useAtom(selectedLangAtom)
  const posts = i18nPosts.find((i18nPost) => i18nPost.lang === selectedLang)?.posts
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <PageSeo
        title={`${tag} - ${siteMetadata.title}`}
        description={`${tag} tags - ${siteMetadata.title}`}
        url={`${siteMetadata.siteUrl}/tags/${tag}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
