<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Basic mouse example </template>
        <template #output>
            <p>Mouse position is at: {{ xPosition }}, {{ yPosition }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { useMouse } from '@/modules/Reusability/composables/useMouse.js'

const { xPosition, yPosition } = useMouse()

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
