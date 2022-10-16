import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Dropdown from '@/components/Dropdown'
import { languages } from '@/lib/constants'
import { useAtom } from 'jotai'
import { selectedLangAtom } from '@/lib/store'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const [selectedLang, setSelectedLang] = useAtom(selectedLangAtom)
  const [displayLangSelection, setDisplayLangSelection] = useState(true)

  const handleLangChange = (lang) => {
    setSelectedLang(lang)
  }

  useEffect(() => {
    const listRoute = ['/', '/blog', '/tags', '/about']
    if (listRoute.includes(router.asPath)) setDisplayLangSelection(true)
    else setDisplayLangSelection(false)
  }, [router])

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {displayLangSelection && (
              <Dropdown items={languages} value={selectedLang} onChange={handleLangChange} />
            )}
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
