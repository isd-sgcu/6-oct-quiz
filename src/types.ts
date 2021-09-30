import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export enum QuestionChoice {
  TotallyYes = 2,
  NotKnow = 1,
  Never = 0,
}
