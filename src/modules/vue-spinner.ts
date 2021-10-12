import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('PulseLoader', PulseLoader)
}
