import { atom } from 'jotai'
import { languages } from '@/lib/constants'
import { langFiles } from '@/lib/i18n'
import { atomWithStorage } from 'jotai/utils'

export const selectedLangAtom = atom(languages[0])
export const langFileAtom = atom(
  (get) => langFiles.find((file) => file.lang === get(selectedLangAtom))?.file
)
