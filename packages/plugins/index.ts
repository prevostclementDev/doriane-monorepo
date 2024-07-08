import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({

    async setup(_, nuxt) {

        addPlugin(join(__dirname, 'lib/helper.js'))
        addPlugin(join(__dirname, 'lib/datePicker.js'))

    },

})