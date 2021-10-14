import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type GameState = 'NotInPlay' | 'Playing' | 'End'
export type CharacterKeyOption = 'sutham' | 'anek' | 'surachat' | 'wichitchai' | 'wipha' | 'phumtham' | 'kriangkamol' | 'banyong' | 'boonsanong' | 'empty'

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

export type RGB = {
  r: number
  g: number
  b: number
}

// There are 3 rgb values in each linear-gradient,
// hence first, second, and third
export type ColorSet = {
  first: RGB
  second: RGB
  third: RGB
}

export type RGBArray = [number, number, number]

export type RGB3Set = [RGBArray, RGBArray, RGBArray]

export type Millisecond = number
