<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Renderless components </template>
        <template #output>
            <MouseTracker v-slot="{ xPosition, yPosition }">
                <p>Mouse is at: {{ xPosition }}, {{ yPosition }}</p>
            </MouseTracker>
        </template>
    </LayoutBase>
</template>

<script setup>
import MouseTracker from './MouseTracker.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
