import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo, CharacterKeyOption } from '~/types'
import QuestionStore from '~/logic/questionStore'
import { isPersistedState } from '~/utils'

interface GameState {
  index: number
  questions: Array<QuestionInfo>
  scores: Map<CharacterKeyOption, number>
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
    if (questionList) {
      const state = {
        index: currentIndex.value,
        questions: questionList.value,
        scores: scoreMap.value,
        finish: finish.value,
        result: resultCharacter.value,
      }
      sessionStorage.setItem('gameState', JSON.stringify(state))
    }
  }

  const getFromStorage = () => {
    if (questionList) {
      const sessionStore = isPersistedState('gameState')

      if (sessionStore) {
        const state = sessionStore as GameState
        currentIndex.value = state.index
        questionList.value = state.questions
        scoreMap.value = state.scores
        finish.value = state.finish
        resultCharacter.value = state.result
      }
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

  /* Methods */
  const updateScore = (name: CharacterKeyOption, add: number) => {
    if (scoreMap.value && scoreMap.value.has(name)) {
      const oldscore = scoreMap.value.get(name)
      scoreMap.value.set(name, oldscore! + add)
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
    if (!scoreMap.value) scoreMap.value = new Map<CharacterKeyOption, number>()
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
    if (!finish.value && questionList.value) {
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
    if (!finish.value || !scoreMap.value)
      return undefined
    if (resultCharacter.value)
      return resultCharacter.value

    /**
     * used for sorting @type [number, CharacterKeyOption]
     */
    const processArr: any = [[]]
    // set of characters that have the same score
    const candidates = new Array<CharacterKeyOption>()

    for (const kv of scoreMap.value)
      processArr.push([kv[1], kv[0]])

    processArr.sort()

    // get index of the maxScore
    let i = processArr.length - 1
    const maxScore = processArr[i][0]

    // maxScore less than or equal zero mean that player doesn't fit to any characters.
    if (maxScore <= 0) {
      resultCharacter.value = 'empty'
      saveToStorage()
      return resultCharacter.value
    }
    // find all characters that has score equal to maxScore
    while (processArr[i][0] === maxScore && i > 0) {
      candidates.push(processArr[i][1])
      i--
    }
    saveToStorage()
    return candidates[Math.floor(Math.random() * candidates.length)]
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
