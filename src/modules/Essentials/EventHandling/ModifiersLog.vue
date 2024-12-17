<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Modifiers log </template>
        <template #log>
            <p>{{ eventLog }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { inject } from 'vue'

const eventLog = inject('eventLog')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
