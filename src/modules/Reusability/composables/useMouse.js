import { ref } from 'vue'
import { useEventListener } from '@/core/composables/useEventListener'

export const useMouse = () => {
    const xPosition = ref(0)
    const yPosition = ref(0)

    useEventListener(window, 'mousemove', event => {
        xPosition.value = event.pageX
        yPosition.value = event.pageY
    })

    return { xPosition, yPosition }
}
