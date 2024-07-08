import { defineNuxtModule, addComponentsDir } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({

    async setup(_, nuxt) {

        nuxt.options.css.push( join(__dirname, 'assets/scss/global.scss') )

        await addComponentsDir({
            path: join(__dirname, 'lib/'),
            prefix: 'ui-',
        })

        nuxt.hook('vite:extendConfig', (config) => {
            if (!config.css) config.css = {}
            if (!config.css.preprocessorOptions) config.css.preprocessorOptions = {}
            if (!config.css.preprocessorOptions.scss) config.css.preprocessorOptions.scss = {}

            config.css.preprocessorOptions.scss.additionalData =  `@use "${ join(__dirname, 'assets/scss/portable/portable.scss').replace(/\\/g, '/') }" as *;`
        })

    },

})