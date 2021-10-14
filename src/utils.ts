import characters from './assets/characters'
import { CharacterKeyOption } from './types'

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null
}

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
  title = 'คุณคล้ายใครในเหตุการณ์เดือนตุลาฯ',
  description = 'มาร่วมค้นหาว่าคุณคล้ายใครในเหตุการณ์ตุลาฯ กันเถอะ',
  image = '/landing_preview.png', // for og:image and twitter:image
  siteName = 'คุณคล้ายใครในเหตุการณ์เดือนตุลาฯ',
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

      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
  })
}

export const setShareMetadata = (key: CharacterKeyOption) => {
  const { fullName, shareImage } = characters[key]
  setMetadata({
    title: `คุณคล้ายกับ ${fullName}`,
    image: shareImage,
  })
}

export const setResult = (key: CharacterKeyOption) => {
  const { fullName, detail, url, image, shareImage, credit, creditLink } = characters[key]

  setMetadata({
    title: `คุณคล้ายกับ ${fullName}`,
    description: detail,
    image: shareImage,
  })

  return { fullName, detail, image, url, credit, creditLink }
}
