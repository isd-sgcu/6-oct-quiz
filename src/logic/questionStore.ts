import { QuestionInfo, CharacterKeyOption } from '~/types'

class QuestionStore {
  static questions: QuestionInfo[] = [
    {
      text: 'คุณเป็นนิสิตที่พร้อมรับกับการเปลี่ยนแปลงใหม่ ๆ อยู่เสมอ',
      relatedPeople: ['sb', 'pw', 'kl'],
    },
    {
      text: 'คุณชอบทํากิจกรรมต่าง ๆ มากกว่าการเรียน และคุณไม่ค่อยสนใจผลการเรียนตัวเองเท่าไร',
      relatedPeople: ['sb'],
    },
    {
      text: 'คุณเป็นคนเห็นอกเห็นใจผู้อื่น และมักนึกถึงผู้อื่นก่อนตัวเอง',
      relatedPeople: ['wa'],
    },
    {
      text: 'คุณเหนื่อยและหมดกําลังใจง่าย',
      relatedPeople: ['al', 'wd'],
    },
    {
      text: 'คุณเป็นคนที่เมื่อได้เห็นคนอื่นทุกข์ใจจะทําให้คุณทุกข์ใจตาม',
      relatedPeople: ['sb', 'kl', 'wa'],
    },
    {
      text: 'คุณกล้าจะยอมรับตัวตนของตัวเอง',
      relatedPeople: ['bp', 'wd'],
    },
    {
      text: 'คุณไม่ค่อยสนใจการเมืองเท่าไร',
      relatedPeople: ['bp'],
    },
    {
      text: 'คุณสับสนกับตัวเองบ่อยครั้ง ไม่แน่ใจในความคิดตัวเองอยู่เสมอ',
      relatedPeople: ['al'],
    },
    {
      text: 'คุณชื่นชอบความเสี่ยง และยินดีรับความท้าทายใหม่ ๆ',
      relatedPeople: ['sb', 'ss'],
    },
    {
      text: 'คุณคิดว่าการเป็นผู้นําเป็นอะไรที่รับมือได้ง่าย',
      relatedPeople: ['ss', 'kl'],
    },
    {
      text: 'คุณเป็นคนที่สามารถดูแลความรู้สึกตัวเองได้',
      relatedPeople: ['wd'],
    },
    {
      text: 'คุณยอมรับประเพณีเก่า ค่านิยม หรือธรรมเนียมที่ยึดถือกันมาได้ง่าย และไม่ค่อยตั้งคําถาม',
      relatedPeople: ['bp'],
    },
    {
      text: 'คุณคิดว่าปัญหาเป็นเรื่องน่าสนใจ และสนุกไปกับเรื่องยากลําบากต่าง ๆ',
      relatedPeople: ['kl', 'ss', 'sb', 'wa', 'pw'],
    },
    {
      text: 'คุณใช้ความรักนําทางชีวิต ไม่ว่าจะเป็นความรักต่ออะไรก็ตาม',
      relatedPeople: ['wa'],
    },
    {
      text: 'คุณเป็นคนเข้มแข็ง และสามารถส่งต่อความเข้มแข็งให้ผู้อื่นได้',
      relatedPeople: ['ss', 'kl', 'wd'],
    },
    {
      text: 'คุณเชื่อมั่นในตัวเอง เชื่อมั่นในความสามารถ และยินดีที่จะลองเรียนรู้อะไรใหม่ ๆ',
      relatedPeople: ['kl', 'ss'],
    },
    {
      text: 'คุณยึดถือความถูกต้องเป็นหลัก',
      relatedPeople: ['kl', 'ss', 'sb', 'wa'],
    },
    {
      text: 'คุณเป็นคนกล้าหาญ และไม่ค่อยเกรงกลัวอะไร',
      relatedPeople: ['kl', 'ss', 'sb', 'wa', 'pw'],
    },
    {
      text: 'คุณเลือกที่จะเห็นแก่ตัว ถ้ามันทําให้คุณรู้สึกดี',
      relatedPeople: ['al', 'bp'],
    },
    {
      text: 'คุณสามารถอดทนทําบางอย่างได้เป็นเวลานาน แม้ว่าจะไม่ค่อยมีคนเห็นค่าสิ่งที่คุณทํา และคุณยืนหยัดที่จะทําต่อไป',
      relatedPeople: ['wd', 'sb'],
    },
  ]

  static characterName: CharacterKeyOption[] = ['ss', 'al', 'sb', 'wa', 'wd', 'pw', 'kl', 'bp', 'empty']

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
