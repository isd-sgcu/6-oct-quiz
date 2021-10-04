import characters from './assets/characters'
import { CharacterKeyOption } from './types'

export const goToIndex = () => {
  const router = useRouter()
  router.replace('/')
}

export const getShareKey = () => {
  const route = useRoute()
  return route.path.split('/')[2] as CharacterKeyOption
}

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}

export const setMetadata = ({
  title = 'คุณคือใครในเหตุการณ์ 6 ตุลาฯ',
  description = '“มาร่วมค้นหาว่าคุณคือใครในเหตุการณ์ 6 ตุลาฯ กันเถอะ”',
  image = '', // for og:image and twitter:image
  url = 'https://www.google.com',
  siteName = 'คุณคือใครในเหตุการณ์ 6 ตุลาฯ',
}) => {
  return useHead({
    title,
    meta: [
      { name: 'description', content: description },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:locale', content: 'th_TH' },
      { property: 'og:site_name', content: siteName },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: image },
    ],
  })
}

export const setShareMetadata = (key: CharacterKeyOption) => {
  const { fullName, shareImage } = characters[key]
  setMetadata({
    title: `คุณคือ ${fullName}`,
    image: shareImage,
  })
}

export const setResult = (key: CharacterKeyOption) => {
  const { fullName, detail, url, image, shareImage } = characters[key]

  setMetadata({
    title: `คุณคือ ${fullName}`,
    description: detail,
    image: shareImage,
  })

  return { fullName, detail, image, url }
}
