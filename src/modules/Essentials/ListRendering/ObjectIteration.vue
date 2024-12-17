<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>Object iterations</template>
        <template #output>
            <ul v-for="(value, key, index) in itemDetails" :key="index">
                <li>{{ index }}. {{ key }}: {{ value }}</li>
            </ul>
        </template>
    </LayoutBase>
</template>

<script setup>
import { reactive } from 'vue'

const itemDetails = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
