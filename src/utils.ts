export const replay = () => {
  const router = useRouter()
  router.replace('/')
}

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}
