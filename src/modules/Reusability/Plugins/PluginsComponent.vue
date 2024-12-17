<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Plugins </template>
        <template #output>
            <p>{{ $translate('greetings.hello') }}</p>
            <p>{{ i18nProvide.translate('greetings.hello') }}</p>
        </template>
        <template #details>
            <p>Using global i18n plugin</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { inject } from 'vue'

const i18nProvide = inject('i18nProvide')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
