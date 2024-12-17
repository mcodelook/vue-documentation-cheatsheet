import { createApp } from 'vue'

export const withSetup = composable => {
    let result
    const app = createApp({
        setup() {
            result = composable()
            //missing template warning
            return () => {}
        }
    })
    app.mount(document.createElement('div'))
    // return the result and the app instance
    // for testing provide/unmount
    return [result, app]
}
