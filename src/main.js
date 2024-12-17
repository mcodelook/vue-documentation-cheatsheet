import './assets/main.css'

import { createApp, version } from 'vue'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n'
import i18nProvide from './plugins/i18nProvide'
import {
    logErrorToService,
    showErrorNotification
} from './services/errorService'

import GlobalComponent from '@/modules/Essentials/CreatingApplication/GlobalComponent.vue'
import LayoutBase from '@/core/components/layout/LayoutBase.vue'
import LayoutOutput from '@/core/components/layout/LayoutOutput.vue'
import LayoutLog from '@/core/components/layout/LayoutLog.vue'
import LayoutDocument from '@/core/components/layout/LayoutDocument.vue'
import BaseButton from '@/core/components/base/BaseButton.vue'
import BaseInputField from '@/core/components/base/BaseInputField.vue'
import StatusComponent from '@/core/components/StatusComponent.vue'

console.log('Vue version:', version)
const app = createApp(App)

app.use(router)

app.config.errorHandler = (error, instance, info) => {
    console.error('Global error:', error)
    console.error('Component:', instance)
    console.error('Error Info:', info)

    logErrorToService(error, instance, info)

    showErrorNotification(error)
}

app.config.globalProperties.message = 'Its a global property'
app.component('GlobalComponent', GlobalComponent)
    .component('LayoutBase', LayoutBase)
    .component('LayoutOutput', LayoutOutput)
    .component('LayoutLog', LayoutLog)
    .component('LayoutDocument', LayoutDocument)
    .component('StatusComponent', StatusComponent)
    .component('BaseInputField', BaseInputField)
    .component('BaseButton', BaseButton)

app.provide('messageGlobalProvide', 'Its a global provide property')
app.directive('highlightglobal', {
    mounted: el => {
        el.classList.add('bg-red-800', 'text-black')
    }
})
app.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})

app.use(i18nProvide, {
    greetings: {
        hello: 'Bonjour Provider!'
    }
})

app.mount('#app')

// const app = createApp({
//     data() {
//       return {
//         count: 0
//       }
//     }
//   })
//
// In-DOM templates are often used in applications that are using Vue without a build step.
// They can also be used in conjunction with server-side frameworks,
// where the root template might be generated dynamically by the server.
