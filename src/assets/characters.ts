import { Character, CharacterKeyOption } from '~/types'

const characters: {
  [key in CharacterKeyOption]: Character
} = {
  sutham: {
    fullName: 'สุธรรม แสงประทุม',
    detail: 'คุณเป็นคนที่เข้มแข็งคล้ายกับสุธรรม แสงประทุม นิสิตคณะนิติศาสตร์ในปี 2519 สุธรรมรับบทบาทผู้นำในฐานะเลขาธิการศูนย์กลางนิสิตแห่งประเทศไทย ต้องแบกรับภาระที่อาจหมายรวมชีวิตของเพื่อน ๆ หลายคน และต้องเผชิญปัญหามากมายที่ดูเหมือนเกินตัวนิสิตคนหนึ่งมาก \n\nแต่สุธรรมก็กล้าที่จะเข้ามารับหน้าที่ตรงนี้ เขาต้องอาศัยความกล้าหาญอย่างมาก ที่จะต่อสู้กับความอยุติธรรมในสังคมขณะนั้น \n\nคุณส่งต่อความเข้มแข็งในตัวคุณให้คนรอบข้างอยู่เสมอ พร้อมกับเชื่อมั่นในตัวเอง อยู่ไม่น้อย คุณรู้ดีว่าคุณเป็นมากกว่าแค่นิสิตคนหนึ่ง และคุณทำอะไรได้มากกว่านั้น ความเข้มแข็งของสุธรรมเป็นเสี้ยวหนึ่งที่งอกงามในตัวคุณ',
    url: '',
    image: '/characters/sutham.png',
    shareImage: '/characters/preview/sutham.png',
    credit: 'สารคดีรำลึก 45 ปี 6 ตุลา “รุ่นพี่ เดือนตุลา 2516 - 2519”',
    creditLink: 'https://www.youtube.com/watch?v=1iWOJoVKUTk',
  },
  anek: {
    fullName: 'เอนก เหล่าธรรมทัศน์',
    detail: 'คุณอาจจะไม่แน่ใจในเส้นทางที่ตัวเองเลือก สับสน ลังเล และสุดท้าย อาจเปลี่ยนความคิดจากฝั่งหนึ่งเป็นอีกฝั่งหนึ่ง ถ้าเป็นแบบนั้นคุณก็เป็นเหมือนเอนก เหล่าธรรมทัศน์ เขาเคยเป็นคนเดือนตุลา เขาเคยเป็นนายกสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัยในปี 2519 จากพรรคฝ่ายซ้ายอย่างพรรคจุฬาประชาชน\n\nแต่วันหนึ่งหลายสิ่งเปลี่ยนไป ความคิดของเขาเปลี่ยนไป เขาเคยเป็นนิสิตผู้มีอุดมการณ์แบบหนึ่ง มาวันนี้กลับไม่เป็นดังเดิม ทีนี้ขึ้นกับคุณแล้ว ว่าความยากลำบาก ในการสู้กับความไม่ถูกต้อง หรือปัจจัยอื่นรายล้อมในชีวิตของคุณ จะทำให้คุณเปลี่ยนไปไหม แล้วคุณจะเป็นเหมือนเขารึเปล่า ',
    url: '',
    image: '/characters/anek.png',
    shareImage: '/characters/preview/anek.png',
    credit: 'The101.world',
    creditLink: 'https://www.the101.world/anek-laothamatas/',
  },
  surachat: {
    fullName: 'สุรชาติ บํารุงสุข',
    detail: 'คุณเป็นคนที่กล้าหาญ และเลือกที่จะทำในสิ่งที่คุณเชื่อ คุณเป็นเหมือนสุรชาติ บำรุงสุข หนึ่งในอดีตผู้นำนิสิตนักศึกษา เขาเคยดำรงตำแหน่งอุปนายกฝ่ายกิจการภายนอก สโมสรนิสิตจุฬาฯ จากการชนะของพรรคฝ่ายซ้ายอย่างพรรคจุฬาประชาชน\n\nสุรชาติกล้าที่จะเริ่มเปลี่ยนแปลง ท้าทายกับความอยุติธรรม และนำความทุกข์ยาก ของผู้คนในสังคมมาเป็นส่วนหนึ่งของชีวิต ในขณะที่เป็นนิสิต เขาออกไปใช้ชีวิตนอกห้องเรียนร่วมกับกรรมกรและแรงงานเป็นเวลาหลายเดือน เพื่อรับรู้ปัญหาและช่วยเหลือเสมือนเป็นปัญหาของตน \n\nคุณอาจจะกลัว แต่คุณกลัวน้อยกว่าที่ตัวเองคิด คุณเติบโตมาพร้อมกับ ความเห็นอกเห็นใจผู้อื่นมากมายเหลือเกิน ขอให้ใช้ความกล้าและความเห็นอกเห็นใจนี้ทำให้สังคมดีขึ้นไป',
    url: '',
    image: '/characters/surachat.png',
    shareImage: '/characters/preview/surachat.png',
    credit: 'มติชน',
    creditLink: 'https://www.matichon.co.th/prachachuen/interview/news_1082629',
  },
  wichitchai: {
    fullName: 'วิชิตชัย อมรกุล',
    detail: 'คุณเป็นคนที่รักความยุติธรรม เสียสละรักพวกพ้อง แล้วก็ยังกล้าหาญพร้อมจะช่วยเหลือผู้อื่นที่ประสบกับความอยุติธรรมอยู่เสมอในแง่หนึ่งคุณคล้าย “เปี๊ยก” วิชิตชัย อมรกุล นิสิตคณะรัฐศาสตร์และนักกีฬารักบี้ ผู้ที่อาสาประจําหน่วยรักษาความปลอดภัยเพื่อเพื่อนร่วมอุดมการณ์ และผู้ที่เป็นดั่งหน่วยสนับสนุนการแสดงออกของนิสิตนักศึกษาในขณะนั้นทว่า จากความโหดร้ายป่าเถื่อนและความพยายามปลุกปั่นความเกลียดชังของรัฐ เขาได้สูญเสียชีวิตไปวันที่ 6 ตุลาคม\n\nขอให้คุณรักษาความกล้าหาญและความรักในความยุติธรรมนี้ไว้ และใช้มัน เพื่อให้สังคมไทยเป็นประชาธิปไตยอย่างแท้จริงที่จะไม่เกิดเหตุดังที่เกิดกับวิชิตชัยซ้ำสองอีกครั้ง',
    url: '',
    image: '/characters/wichitchai.png',
    shareImage: '/characters/preview/wichitchai.png',
    credit: 'บันทึก 6 ตุลา (Documentation of Oct 6)',
    creditLink: 'https://doct6.com/archives/8737',
  },
  wipha: {
    fullName: 'วิภา ดาวมณี',
    detail: 'วิภาเป็นนิสิตคณะวิทยาศาสตร์ จุฬาฯ ผู้ผ่านเหตุการณ์ 6 ตุลา และหนีเข้าป่าไปเข้าร่วมกับพรรคคอมมิวนิสต์ แต่เมื่อรัฐบาลประกาศนิรโทษกรรม เธอก็ออกมาจากป่าและใช้ชีวิตทำงานตามปกติด้วยการหลีกเลี่ยงการกล่าวถึงประวัติของตนหลังจากนั้น วิภาเริ่มผลักดันให้สังคมไทยจดจำเรื่องราว 6 ตุลา จนมีที่ยืนในสังคมเพิ่มขึ้นทีละน้อย\n\nในแง่หนึ่งคุณก็เหมือนวิภา ที่เรื่องราวร้าย ๆ ของสังคมมันทำลายคุณแต่คุณแข็งแกร่งมากพอที่จะสู้ต่อ อาจจะต้องใช้เวลารักษาบาดแผลบ้าง แต่คุณก็เลือกยืนหยัดอย่างมั่นคงที่จะทําาสิ่งดี ๆ ให้สังคมนี้ความแข็งแกร่งของวิภา ดาวมณีเป็นส่วนหนึ่งของตัวคุณ',
    url: '',
    image: '/characters/wipha.png',
    shareImage: '/characters/preview/wipha.png',
    credit: 'ประชาไท',
    creditLink: 'https://prachatai.com/journal/2014/10/55845',
  },
  phumtham: {
    fullName: 'ภูมิธรรม เวชยชัย',
    detail: 'คุณเป็นคนที่มีความคิดริเริ่มเหมือนเขา ภูมิธรรมเป็นผู้ร่วมก่อตั้งพรรคจุฬาประชาชน ซึ่งเป็นพรรคฝ่ายหัวก้าวหน้าในจุฬาฯ เขาเป็นเลขาธิการพรรค ในช่วงปี 2518 เขาเป็นคนหนึ่งที่กล้าจะริเริ่มความเปลี่ยนแปลงใหม่ ๆ ในสังคมที่อาจจะไม่ได้ ยอมรับมันมากนัก \n\nภูมิธรรมไม่ได้อยู่ในเหตุการณ์ของวันที่ 6 ตุลา แต่เขาเป็นจุดเริ่มต้น ของความเปลี่ยนแปลงในขบวนการนักศึกษาขณะนั้น และเป็นคนหนึ่ง ที่ทนไม่ได้กับความอยุติธรรมที่เกิดขึ้นจนต้องเข้าป่าแม้ไม่ได้ถูกออกหมายจับ นั่นเองที่คุณเหมือนกับเขา คุณเองก็ทนไม่ได้กับความอยุติธรรมในสังคมขณะนี้ เหมือนกัน และความเปลี่ยนแปลงที่จะเกิดขึ้นมันอยู่ในมือของคุณ การริเริ่มสร้างสรรค์สิ่งใหม่ ๆ เหมือนภูมิธรรมมันปรากฏในตัวคุณและคุณเข้าใจดีว่า คุณสร้างความเปลี่ยนแปลงให้สังคมนี้ได้',
    url: '',
    image: '/characters/phumtham.png',
    shareImage: '/characters/preview/phumtham.png',
    credit: 'พรรคเพื่อไทย',
    creditLink: 'https://ptp.or.th/archives/8550',
  },
  kriangkamol: {
    fullName: 'เกรียงกมล เลาหไพโรจน์',
    detail: 'เกรียงกมลเป็นนิสิตจุฬาฯ ที่ร่วมก่อตั้งพรรคจุฬาประชาชน พรรคหัวก้าวหน้าภายในจุฬาฯ และในปี 2518 เขายังได้รับเลือกให้ดำรงตำแหน่งเลขาธิการศูนย์กลางนิสิต นักศึกษาแห่งประเทศไทย เกรียงกมลเป็นคนหนึ่งในการประสานความร่วมมือระหว่างมหาวิทยาลัยต่าง ๆ ขณะนั้นจนองค์กรนิสิตนักศึกษาเริ่มแข็งแกร่งขึ้นและสร้างบทบาทใหม่ในการทำหน้าที่เพื่อประชาชนมากขึ้น\n\nคุณก็เหมือนเกรียงกมลตรงที่คุณเข้าใจภาวะผู้นำในตัวคุณเป็นอย่างดี และคุณรู้ว่าจะใช้ตำแหน่งหรืออำนาจหน้าที่ที่ได้รับมาเพื่อคนอื่นได้อย่างไร เกรียงกมลอาจนับได้ว่าเป็นคนที่เริ่มต้นในการต่อสู้เพื่อคนอื่น ต่อสู้กับความทุกข์ยากของประชาชน และเป็นแรงสำคัญของการเปลี่ยนแปลงในจุฬาฯ เราหวังว่าคุณจะลุกขึ้นมาเปลี่ยนแปลงสังคมให้ดีขึ้นอยู่เสมอ',
    url: '',
    image: '/characters/kriangkamol.png',
    shareImage: '/characters/preview/kriangkamol.png',
    credit: 'เสวนา ‘หมดจิตหมดใจจะใฝ่ฝัน: ถึงทางตันขบวนการนักศึกษา?’',
    creditLink: 'https://www.voicetv.co.th/read/49815',
  },
  banyong: {
    fullName: 'บรรยง พงศ์พาณิชย์',
    detail: 'บรรยงเป็นนิสิตคนหนึ่งที่<a href="https://thaipublica.org/2016/10/banyong-pongpanich-74/" target="_blank" rel="noopener noreferrer" class="underline">เรียกตัวเองว่าเป็นฝ่ายขวา</a> นิสิตคณะเศรษฐศาสตร์ผู้นี้ได้รับการเชิญชวนโดยพรรคฝ่ายขวาจุฬาฯชื่อ “อนุรักษ์จุฬา” ให้ลงสมัครเป็นประธานฝ่ายกีฬา สโมสรนิสิตจุฬาฯ ในปี 2518 และได้รับเลือกในที่สุด\n\nบรรยงออกมายอมรับว่าตนนั้นไม่ได้ฝักใฝ่การเมืองเป็นพิเศษและออกมาเล่าการกระทำในฝ่ายขวาในช่วงเวลานั้น ในแง่หนึ่งคุณก็เหมือนกันบรรยง คุณอาจจะไม่ได้ชัดเจนในจุดยืนทางการเมืองในตอนนี้ แต่การมีอยู่ของคุณคือสิ่งยืนยันชัดเจนของการอยู่ร่วมระหว่างความแตกต่างทางความคิดอันหลากหลายในสังคม คุณอาจจะเป็นฝ่ายขวาเหมือนบรรยง หรือคุณอาจจะไม่ได้มีแนวคิดการเมืองที่ชัดเจนมากนัก แต่คุณเข้าใจดีว่าเราต้องเคารพในความเป็นมนุษย์และไม่ทำร้ายใคร',
    url: '',
    image: '/characters/banyong.png',
    shareImage: '/characters/preview/banyong.png',
    credit: 'มติชน',
    creditLink: 'https://www.matichon.co.th/news-monitor/news_2179186',
  },
  boonsanong: {
    fullName: 'บุญสนอง บุณโยทยาน',
    detail: '“อาจารย์มหาวิทยาลัยควรเป็นกลางทางวิชาการนั้นพอจะรับฟังได้ แต่จะให้เป็นกลางทางการเมืองทั้ง ๆ ที่ประเทศชาติกําาลังจะล่มจมนั้น เป็นการหลีกเลี่ยงทางความรับผิดชอบต่อประชาชนและสังคมโดยแท้”\n\nดร.บุญสนอง บุณโยทยาน เป็นคนรักความยุติธรรม เขาเป็นคนเปิดกว้าง ไม่ถือตัว และสามารถสนทนากับผู้คนจากชนชั้นหรือสถานะใดก็ตามได้ เขาก่อตั้งและเลขาธิการพรรคสังคมนิยมแห่งประเทศไทย ซึ่งเป็นพรรคฝ่ายซ้ายที่เกิดขึ้นหลัง 14 ตุลา ออกนโยบายส่งเสริมความเป็นธรรม สิทธิ เสรีภาพ ความเสมอภาคและประชาธิปไตยอย่างแท้จริง\n\nดร.บุญสนอง เรียนปริญญาตรีที่คณะรัฐศาสตร์ จุฬาฯ ก่อนไปเรียนด้านสังคมวิทยาในระดับปริญญาโทและปริญญาเอก เขาเป็นคนเมื่อทําาอะไรแล้วจะตั้งใจมากถึงขีดสุด เมื่อเขากลับมาเป็นอาจารย์ เขาคอยจัดกิจกรรมและบรรยายให้กับนักศึกษาและสาธารณะอย่างต่อเนื่อง คุณคล้ายกับดร.บุญสนองที่คุณสนใจและลงมือผลักดันให้ความยุติธรรมและความเท่าเทียมเกิดขึ้นจริงในสังคม',
    url: '',
    image: '/characters/boonsanong.png',
    shareImage: '/characters/preview/boonsanong.png',
    credit: 'Wikipedia',
    creditLink: 'https://th.wikipedia.org/wiki/บุญสนอง_บุณโยทยาน',
  },
  empty: {
    fullName: 'ตัวของคุณเอง',
    detail: 'คุณแตกต่างไปจากคน ๖ ตุลาฯ คุณอาจจะไม่ได้เหมือนมากพอที่จะเป็นใครสักคน หรือไม่คุณก็มีส่วนของหลาย ๆ คนเติบโตในตัวคุณมากกว่าที่รู้ แต่นั่นไม่ใช่เรื่องแย่ บางทีนี่อาจเป็นความพิเศษที่มีค่าเหลือเกินในตัวของคุณ ทั้งนี้ คุณต้องระลึกไว้เสมอว่า ที่คุณจะใช้ตัวตนที่แตกต่างให้เป็นประโยชน์กับสังคมได้ยังไง และเป็นสิ่งสําคัญเหลือเกินที่คุณจะต้องรับรู้ว่า คุณอยากแตกต่างไปบนเส้นทางแบบไหน คุณอาจจะยังไม่รู้ตัวเองมากพอที่จะตัดสินใจ แต่เราหวังว่าคุณจะเป็นคนหนึ่งที่ช่วยเหลือสังคมนี้ร่วมไปกับพวกเราหลายคน จิตวิญญาณของคุณเติบโตอยู่ในตัวคุณ อย่างเป็นตัวคุณที่สุดเลย',
    url: '',
    image: '/characters/empty.png',
    shareImage: '/characters/preview/empty.png',
    credit: '',
    creditLink: '',
  },
}

export default characters
