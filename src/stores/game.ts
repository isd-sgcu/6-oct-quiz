import { acceptHMRUpdate, defineStore } from 'pinia'
import { QuestionInfo } from '~/types'

const characterName = ['สุธรรม  แสงประทุม', 'อเนก  เหล่าธรรมทัศน์', 'สุรชาติ  บําารุงสุข', 'วิชิตชัย  อมรกุล', 'วิภา  ดาวมณี', 'ภูมิธรรม  เวชยชัย', 'เกรียงกมล  เลาหไพโรจน์', 'บรรยง พงศ์พาณิชย์']

export const useGameStore = defineStore('game', () => {
  /** index of the current selected question */
  const currentIndex = ref(0)
  /** name of the player who's playing this quiz */
  const playerName = ref<string | undefined>()
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

  // Setters
  const setCurrentIndex = (index: number) => {
    currentIndex.value = index
  }

  const setPlayerName = (name: string) => {
    playerName.value = name
  }

  const updateScore = (name: string, score: number) => {
    const oldscore = scoreMap.value.get(name)
    if (oldscore)
      scoreMap.value.set(name, oldscore + score)
  }
  // Getters
  const getCurrentIndex = () => currentIndex.value

  const getPlayerName = () => playerName.value

  const getCurrentQuestion = () => questionList.value[currentIndex.value]

  const getScoreMap = () => scoreMap.value
  // Actions
  const resetScore = () => {
    scoreMap.value.clear()
    characterName.forEach((name) => {
      scoreMap.value.set(name, 0)
    })
  }

  const initNewQuiz = (name: string) => {
    // questionList.value = getRandomQuestions()
    setCurrentIndex(0)
    setPlayerName(name)
    resetScore()
  }

  /**
 *Go to next question and set state of the quiz according to user's answer
 **/
  const nextQuestion = () => {
    if (currentIndex.value < questionList.value.length)
      currentIndex.value += 1
  }

  return {
    setCurrentIndex,
    setPlayerName,
    updateScore,
    getCurrentIndex,
    getPlayerName,
    getCurrentQuestion,
    getScoreMap,
    resetScore,
    initNewQuiz,
    nextQuestion,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
