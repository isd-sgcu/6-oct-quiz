import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type GameState = 'notPlay' | 'Playing' | 'End'
export type CharacterKeyOption = 'sutham' | 'anek' | 'surachat' | 'wichitchai' | 'wipha' | 'phumtham' | 'kriangkamol' | 'banyong' | 'empty'

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
  shareImage: string // og:image, twitter:image

  image: string // image shown on /result
  credit: string // image credit
  creditLink: string // link to the owner of image
}
