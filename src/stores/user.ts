import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedName = ref('')

  return {
    savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
