import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type CharacterKeyOption = 'ss' | 'al' | 'sb' | 'wa' | 'wd' | 'pw' | 'kl' | 'bp' | 'empty'

export enum QuestionChoice {
  TotallyYes = 2,
  NotKnow = 1,
  Never = 0,
}

export type QuestionInfo = {
  text: string
  relatedPeople: CharacterKeyOption[]
}

export type Character = {
  fullName: string
  detail: string
  url: string
  image: string
}
