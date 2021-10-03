export const replay = () => {
  const router = useRouter()
  router.replace('/')
}

export const setMetadata = ({
  title = 'คุณคือใครในเหตุการณ์ 6 ตุลาฯ',
  description = 'เข้าร่วมทำแบบประเมินเพื่อค้นหาว่าคุณคือใครในเหตุการณ์ 6 ตุลาฯ กันเถอะ',
  image = '',
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
