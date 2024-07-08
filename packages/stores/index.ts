import { defineNuxtModule, installModule} from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({

    async setup(_, nuxt) {

        await installModule('@pinia/nuxt', {
            storesDirs : join(__dirname,  'lib/**')
        })

    },

})