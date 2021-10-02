import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo } from '~/types'
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
   * @key character's name @value score
   */
  const scoreMap = ref<Map<string, number>>(new Map<string, number>())
  // check if game is over
  const finish = ref<boolean>(false)

  const resultCharacter = ref<string>()

  /* Setters */
  const setCurrentIndex = (index: number) => {
    currentIndex.value = index
  }

  const setScore = (name: string, score: number) => {
    if (scoreMap.value.has(name))
      scoreMap.value.set(name, score)
  }

  /* Methods */
  const updateScore = (name: string, add: number) => {
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

  const determineCharacter = () => {
    if (!finish.value)
      throw new Error('Call result character before game end')
    if (resultCharacter.value)
      return resultCharacter.value

    const processArr: any = [[]]
    const candidates = new Array<string>()

    for (const kv of scoreMap.value)
      processArr.push([kv[1], kv[0]])

    processArr.sort()

    let i = processArr.length - 1
    const maxScore = processArr[i][0]

    if (maxScore <= 0) return 'ตัวคุณเอง'

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
