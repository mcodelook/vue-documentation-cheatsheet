import { reactive, nextTick } from 'vue'

export const useStatusNotification = () => {
    const notification = reactive({
        isVisible: false,
        type: 'success',
        message: ''
    })

    const hideNotification = () => {
        notification.isVisible = false
    }

    const showNotification = async (type, message) => {
        if (notification.isVisible) {
            hideNotification()
            await nextTick()
        }
        notification.isVisible = true
        notification.message = message
        notification.status = type
    }

    return { notification, hideNotification, showNotification }
}
