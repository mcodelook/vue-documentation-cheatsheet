export default {
    install: (app, options) => {
        app.provide('i18nProvide', {
            translate(key) {
                return key.split('.').reduce((o, i) => o[i], options) || key
            }
        })
    }
}
