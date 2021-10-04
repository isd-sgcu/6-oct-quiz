import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo, CharacterKeyOption } from '~/types'
import QuestionStore from '~/logic/questionStore'
import { isPersistedState } from '~/utils'

interface GameState {
  index: number
  questions: Array<QuestionInfo>
  scores: [CharacterKeyOption, number][]
  finish: boolean
  result: CharacterKeyOption | undefined
}

export const useGameStore = defineStore('game', () => {
  const MAX_QUESTION_COUNT = 10
  // index of the current selected question
  const currentIndex = ref(0)
  /**
   * a randomized list of possible questions
   * @type {{text: string, relatedPerson: string[]}}
   */
  const questionList = ref<Array<QuestionInfo>>()
  /**
   * store the score of each of the characters
   * @key character's key @value score
   */
  const scoreMap = ref<Map<CharacterKeyOption, number>>()
  // check if game is over
  const finish = ref<boolean>(false)

  const resultCharacter = ref<CharacterKeyOption>()

  /* Storage Manipulation */
  const saveToStorage = () => {
    if (questionList.value && scoreMap.value) {
      const state = {
        index: currentIndex.value,
        questions: questionList.value,
        scores: Array.from(scoreMap.value),
        finish: finish.value,
        result: resultCharacter.value,
      }
      sessionStorage.setItem('gameState', JSON.stringify(state))
    }
  }

  const getFromStorage = () => {
    const sessionStore = isPersistedState('gameState')
    if (sessionStore) {
      const state = sessionStore as GameState
      currentIndex.value = state.index
      questionList.value = state.questions
      scoreMap.value = new Map(Array.from(state.scores))
      finish.value = state.finish
      resultCharacter.value = state.result
    }
  }

  const clearStorage = () => {
    sessionStorage.removeItem('gameState')
  }

  /* Setters */
  const setCurrentIndex = (index: number) => {
    currentIndex.value = index
  }

  const setScore = (name: CharacterKeyOption, score: number) => {
    if (scoreMap.value && scoreMap.value.has(name))
      scoreMap.value.set(name, score)
  }

  const setResultCharacter = (key: CharacterKeyOption) => {
    resultCharacter.value = key
    saveToStorage()
  }
  /* Methods */
  const updateScore = (name: CharacterKeyOption, add: number) => {
    if (scoreMap.value && scoreMap.value.has(name)) {
      const oldscore = scoreMap.value.get(name) as number
      scoreMap.value.set(name, oldscore + add)
    }
  }

  const reset = () => {
    setCurrentIndex(0)
    finish.value = false
    resultCharacter.value = undefined
  }

  const initNewQuiz = () => {
    reset()
    questionList.value = QuestionStore.getRandomQuestions(MAX_QUESTION_COUNT)
    if (!scoreMap.value)
      scoreMap.value = new Map<CharacterKeyOption, number>()

    QuestionStore.characterName.forEach((name) => {
      scoreMap.value!.set(name, 0)
    })
    saveToStorage()
  }

  /**
   * Add the index of current question
   * if @var finish is false and @var currentIndex + 1 < length then go
  **/
  const nextQuestion = () => {
    if (!questionList.value)
      throw new TypeError('question list is not initialized yet')
    if (!finish.value) {
      if (currentIndex.value + 1 === questionList.value.length) {
        console.log('game finish')
        finish.value = true
      }
      else {
        currentIndex.value += 1
      }
      saveToStorage()
    }
  }

  /**
   * Find the character that has the most score in @var scoreMap
   * give result only after game finishes
   * @returns key of the character
   */
  const determineCharacter = () => {
    if (!finish.value)
      throw new Error('Cannot determine character when game isn\'t finish')
    if (!scoreMap.value)
      throw new TypeError('ScoreMap is not initialized yet')
    if (resultCharacter.value)
      return resultCharacter.value!

    /**
     * used for sorting characters by score
     * @type [number, CharacterKeyOption]
     */
    const processArr: [number, CharacterKeyOption][] = []
    for (const [key, score] of scoreMap.value)
      processArr.push([score, key])

    processArr.sort()

    // get index of the maxScore
    const maxScore = processArr[processArr.length - 1][0]
    // set of characters that have the same score
    const candidates = processArr.filter(([score, key]) => score === maxScore)

    // maxScore less than or equal zero mean that player doesn't fit to any characters.
    if (maxScore <= 0)
      setResultCharacter('empty')
    else
      setResultCharacter(candidates[Math.floor(Math.random() * candidates.length)][1])

    return resultCharacter.value!
  }

  getFromStorage() // call every time when the website's refreshed

  return {
    currentIndex,
    questionList,
    finish,
    scoreMap,
    setCurrentIndex,
    setScore,
    updateScore,
    initNewQuiz,
    nextQuestion,
    determineCharacter,
    clearStorage,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
