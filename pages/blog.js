import { getAllFilesByLanguages, getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { useAtom } from 'jotai'
import { langFileAtom, selectedLangAtom } from '@/lib/store'

export const POSTS_PER_PAGE = 10

export async function getServerSideProps() {
  const posts = await getAllFilesFrontMatter('blog')

  const i18nPosts = await getAllFilesByLanguages()
  const i18nInitialDisplayPosts = i18nPosts.map((i18nPost) => ({
    lang: i18nPost.lang,
    posts: i18nPost.posts.slice(0, POSTS_PER_PAGE),
  }))
  const i18nPaginations = i18nPosts.map((i18nPost) => ({
    lang: i18nPost.lang,
    pagination: {
      currentPage: 1,
      totalPages: Math.ceil(i18nPost.length / POSTS_PER_PAGE),
    },
  }))

  /*const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }*/

  return { props: { posts, i18nPosts, i18nInitialDisplayPosts, i18nPaginations } }
}

export default function Blog({ i18nPosts, i18nInitialDisplayPosts, i18nPaginations }) {
  const [selectedLang] = useAtom(selectedLangAtom)
  const posts = i18nPosts.find((i18nPost) => i18nPost.lang === selectedLang)?.posts
  const initialDisplayPosts = i18nInitialDisplayPosts.find(
    (i18nPost) => i18nPost.lang === selectedLang
  )?.posts
  const pagination = i18nPaginations.find((i18nPost) => i18nPost.lang === selectedLang)?.pagination

  const [langFile] = useAtom(langFileAtom)

  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={langFile.listLayoutTitle}
      />
    </>
  )
}
