import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo, CharacterKeyOption, GameState } from '~/types'
import QuestionStore from '~/logic/questionStore'

const MAX_QUESTION_COUNT = 10

export const useGameStore = defineStore('game', () => {
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
  const gameState = ref<GameState>('NotInPlay')

  const resultCharacter = ref<CharacterKeyOption>()

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
    resultCharacter.value = undefined
    questionList.value = []
    scoreMap.value?.clear()
  }

  const initNewQuiz = () => {
    if (gameState.value !== 'Playing') {
      questionList.value = QuestionStore.getRandomQuestions(MAX_QUESTION_COUNT)

      scoreMap.value = new Map<CharacterKeyOption, number>()
      QuestionStore.characterName.forEach((name) => {
        scoreMap.value!.set(name, 0)
      })
      gameState.value = 'Playing'
    }
  }

  /**
   * Add the index of current question
  **/
  const nextQuestion = () => {
    if (!questionList.value)
      throw new TypeError('question list is not initialized yet')
    if (gameState.value === 'Playing') {
      if (currentIndex.value + 1 === questionList.value.length) {
        console.log('game end')
        gameState.value = 'NotInPlay'
      }
      else {
        currentIndex.value += 1
      }
    }
  }

  /**
   * Find the character that has the most score in @var scoreMap
   * give result only after game gameStatees
   * @returns key of the character
   */
  const determineCharacter = () => {
    if (currentIndex.value !== MAX_QUESTION_COUNT)
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
    const candidates = processArr.filter(([score]) => score === maxScore)

    // maxScore less than or equal zero mean that player doesn't fit to any characters.
    if (maxScore <= 0)
      setResultCharacter('empty')
    else
      setResultCharacter(candidates[Math.floor(Math.random() * candidates.length)][1])

    return resultCharacter.value!
  }

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
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
