import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo, CharacterKeyOption } from '~/types'
import QuestionStore from '~/logic/questionStore'

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
  const scoreMap = ref<Map<CharacterKeyOption, number>>(new Map<CharacterKeyOption, number>())
  // check if game is over
  const finish = ref<boolean>(false)

  const resultCharacter = ref<CharacterKeyOption>()

  /* Setters */
  const setCurrentIndex = (index: number) => {
    currentIndex.value = index
  }

  const setScore = (name: CharacterKeyOption, score: number) => {
    if (scoreMap.value.has(name))
      scoreMap.value.set(name, score)
  }

  /* Methods */
  const updateScore = (name: CharacterKeyOption, add: number) => {
    if (scoreMap.value.has(name)) {
      const oldscore = scoreMap.value.get(name)
      scoreMap.value.set(name, oldscore! + add)
    }
  }

  const resetScore = () => {
    scoreMap.value.clear()
    QuestionStore.characterName.forEach((name) => {
      scoreMap.value.set(name, 0)
    })
  }
  const initNewQuiz = () => {
    questionList.value = QuestionStore.getRandomQuestions(MAX_QUESTION_COUNT)
    setCurrentIndex(0)
    resetScore()
    resultCharacter.value = undefined
  }

  /**
   * Add the index of current question
   * if @var finish is false and @var currentIndex + 1 < length then go
  **/
  const nextQuestion = () => {
    if (!finish.value) {
      if (currentIndex.value + 1 === questionList.value.length) {
        console.log('game finish')
        finish.value = true
        return
      }
      currentIndex.value += 1
    }
  }

  /**
   * Find the character that has the most score in @var scoreMap
   * give result only after game finishes
   * @returns key of the character
   */
  const determineCharacter = () => {
    if (!finish.value)
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
    if (maxScore <= 0) return 'empty'

    // find all characters that has score equal to maxScore
    while (processArr[i][0] === maxScore && i > 0) {
      candidates.push(processArr[i][1])
      i--
    }
    return candidates[Math.floor(Math.random() * candidates.length)]
  }

  return {
    currentIndex,
    questionList,
    finish,
    scoreMap,
    setCurrentIndex,
    setScore,
    updateScore,
    resetScore,
    initNewQuiz,
    nextQuestion,
    determineCharacter,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
