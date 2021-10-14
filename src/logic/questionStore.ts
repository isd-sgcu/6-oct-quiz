import { QuestionInfo, CharacterKeyOption } from '~/types'

class QuestionStore {
  static questions: QuestionInfo[] = [
    {
      text: 'คุณพร้อมรับกับการเปลี่ยนแปลงใหม่ ๆ อยู่เสมอ',
      relatedPeople: ['surachat', 'phumtham', 'kriangkamol'],
    },
    {
      text: 'คุณชอบทํากิจกรรมต่าง ๆ มากกว่าการเรียน และคุณไม่ค่อยสนใจผลการเรียนตัวเองเท่าไร',
      relatedPeople: ['surachat'],
    },
    {
      text: 'คุณเป็นคนเห็นอกเห็นใจผู้อื่น และมักนึกถึงผู้อื่นก่อนตัวเอง',
      relatedPeople: ['wichitchai', 'boonsanong'],
    },
    {
      text: 'คุณเหนื่อยและหมดกําลังใจง่าย',
      relatedPeople: ['anek', 'wipha'],
    },
    {
      text: 'คุณเป็นคนที่เมื่อได้เห็นคนอื่นทุกข์ใจจะทําให้คุณทุกข์ใจตาม',
      relatedPeople: ['surachat', 'kriangkamol', 'wichitchai', 'boonsanong'],
    },
    {
      text: 'คุณกล้าจะยอมรับตัวตนของตัวเอง',
      relatedPeople: ['banyong', 'wipha'],
    },
    {
      text: 'คุณไม่ค่อยสนใจการเมืองเท่าไร',
      relatedPeople: ['banyong'],
    },
    {
      text: 'คุณสับสนกับตัวเองบ่อยครั้ง ไม่แน่ใจในความคิดตัวเองอยู่เสมอ',
      relatedPeople: ['anek'],
    },
    {
      text: 'คุณชื่นชอบความเสี่ยง และยินดีรับความท้าทายใหม่ ๆ',
      relatedPeople: ['surachat', 'sutham'],
    },
    {
      text: 'คุณคิดว่าการเป็นผู้นําเป็นอะไรที่รับมือได้ง่าย',
      relatedPeople: ['sutham', 'kriangkamol', 'boonsanong'],
    },
    {
      text: 'คุณเป็นคนที่สามารถดูแลความรู้สึกตัวเองได้',
      relatedPeople: ['wipha'],
    },
    {
      text: 'คุณยอมรับประเพณี หรือธรรมเนียมที่ยึดถือกันมาได้ง่าย และไม่ค่อยตั้งคําถาม',
      relatedPeople: ['banyong'],
    },
    {
      text: 'คุณรู้สึกท้าทายและสนุกไปกับเรื่องยากลําบากต่าง ๆ',
      relatedPeople: ['kriangkamol', 'sutham', 'surachat', 'wichitchai', 'phumtham'],
    },
    {
      text: 'คุณใช้ความรักนําทางชีวิต ไม่ว่าจะเป็นความรักต่ออะไรก็ตาม',
      relatedPeople: ['wichitchai'],
    },
    {
      text: 'คุณเป็นคนเข้มแข็ง และสามารถส่งต่อความเข้มแข็งให้ผู้อื่นได้',
      relatedPeople: ['sutham', 'kriangkamol', 'wipha'],
    },
    {
      text: 'คุณเชื่อมั่นในตัวเอง เชื่อมั่นในความสามารถ และยินดีที่จะลองเรียนรู้อะไรใหม่ ๆ',
      relatedPeople: ['kriangkamol', 'sutham'],
    },
    {
      text: 'คุณยึดถือความถูกต้องเป็นหลัก',
      relatedPeople: ['kriangkamol', 'sutham', 'surachat', 'wichitchai', 'boonsanong'],
    },
    {
      text: 'คุณเป็นคนกล้าหาญ และไม่ค่อยเกรงกลัวอะไร',
      relatedPeople: ['kriangkamol', 'sutham', 'surachat', 'wichitchai', 'phumtham', 'boonsanong'],
    },
    {
      text: 'บางครั้งคุณก็เลือกที่จะเห็นแก่ตัวบ้าง',
      relatedPeople: ['anek', 'banyong'],
    },
    {
      text: 'แม้ว่าจะไม่ค่อยมีคนเห็นค่าสิ่งที่คุณทํา คุณก็ยังยืนหยัดที่จะทําต่อไป',
      relatedPeople: ['wipha', 'surachat'],
    },
  ]

  static characterName: CharacterKeyOption[] = ['sutham', 'anek', 'surachat', 'wichitchai', 'wipha', 'phumtham', 'kriangkamol', 'banyong', 'boonsanong', 'empty']

  /**
   * some part of the code get from https://javascript.info/task/shuffle
   * @returns ten ramdomized element of questions
   */
  static getRandomQuestions(count: number) {
    if (count <= 0) return new Array<QuestionInfo>()

    // generate a range of number of 0 - 19
    const shuffleArray = [] as number[]
    for (let i = 0; i < this.questions.length; i++)
      shuffleArray.push(i)

    for (let i = shuffleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j]
      [shuffleArray[j], shuffleArray[i]] = [shuffleArray[i], shuffleArray[j]]
    }
    const result = shuffleArray.slice(0, count).map(index => this.questions[index])
    return result
  }
}

export default QuestionStore
