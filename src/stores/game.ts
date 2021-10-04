import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo, CharacterKeyOption, GameState } from '~/types'
import QuestionStore from '~/logic/questionStore'
import { isPersistedState } from '~/utils'

interface State {
  index: number
  questions: Array<QuestionInfo>
  scores: [CharacterKeyOption, number][]
  gameState: GameState
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
  const questionList = ref<Array<QuestionInfo>>([])
  /**
   * store the score of each of the characters
   * @key character's key @value score
   */
  const scoreMap = ref<Map<CharacterKeyOption, number>>()
  const gameState = ref<GameState>('notPlay')

  const resultCharacter = ref<CharacterKeyOption>()

  /* Storage Manipulation */
  const saveToStorage = () => {
    if (gameState.value === 'Playing' || gameState.value === 'End') {
      const state = {
        index: currentIndex.value,
        questions: questionList.value,
        scores: Array.from(scoreMap.value!),
        gameState: gameState.value,
        result: resultCharacter.value,
      }
      sessionStorage.setItem('state', JSON.stringify(state))
    }
  }

  const getFromStorage = () => {
    const sessionStore = isPersistedState('state')
    if (sessionStore) {
      const state = sessionStore as State
      currentIndex.value = state.index
      questionList.value = state.questions
      scoreMap.value = new Map(Array.from(state.scores))
      gameState.value = state.gameState
      resultCharacter.value = state.result
    }
  }

  const clearStorage = () => {
    sessionStorage.removeItem('state')
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
    gameState.value = 'notPlay'
    questionList.value = []
    scoreMap.value?.clear()
    clearStorage()
  }

  const initNewQuiz = () => {
    if (gameState.value === 'notPlay') {
      setCurrentIndex(0)
      resultCharacter.value = undefined
      questionList.value = QuestionStore.getRandomQuestions(MAX_QUESTION_COUNT)

      scoreMap.value = new Map<CharacterKeyOption, number>()
      QuestionStore.characterName.forEach((name) => {
        scoreMap.value!.set(name, 0)
      })
      gameState.value = 'Playing'
      saveToStorage()
    }
  }

  /**
   * Add the index of current question
  **/
  const nextQuestion = () => {
    if (!questionList.value.length)
      throw new TypeError('question list is not initialized yet')
    if (gameState.value === 'Playing') {
      if (currentIndex.value + 1 === questionList.value.length) {
        console.log('game end')
        gameState.value = 'End'
      }
      else {
        currentIndex.value += 1
      }
      saveToStorage()
    }
  }

  /**
   * Find the character that has the most score in @var scoreMap
   * give result only after game gameStatees
   * @returns key of the character
   */
  const determineCharacter = () => {
    if (gameState.value !== 'End')
      throw new Error('Cannot determine character when game isn\'t end')
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
    gameState,
    scoreMap,
    setCurrentIndex,
    setScore,
    updateScore,
    reset,
    initNewQuiz,
    nextQuestion,
    determineCharacter,
    clearStorage,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
