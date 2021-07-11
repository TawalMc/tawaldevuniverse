import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

import * as ga from '../lib/ga'

const Tag = ({ text }) => {
  const tagSearch = () => {
    ga.event({
      action: 'search',
      params: {
        search_term: text,
      },
    })
  }

  return (
    <Link href={`/tags/${kebabCase(text)}`} onClick={tagSearch}>
      <a className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
