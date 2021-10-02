import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type CharacterKeyOption = 'ss' | 'al' | 'sb' | 'wa' | 'wd' | 'pw' | 'kl' | 'bp' | 'empty'

export type Character = {
  fullName: string
  detail: string
  url: string
}
