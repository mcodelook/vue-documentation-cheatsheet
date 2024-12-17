import { customRef } from 'vue'

export const useLocalStorageRef = (key, defaultValue = 0) => {
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                const value = localStorage.getItem(key)
                return value ? JSON.parse(value) : defaultValue
            },
            set(newValue) {
                localStorage.setItem(key, JSON.stringify(newValue))
                trigger()
            }
        }
    })
}
