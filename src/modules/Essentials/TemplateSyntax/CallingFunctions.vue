<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Calling functions, on attributes </template>
        <template #output>
            <time
                :title="formatShortDate(date)"
                :datetime="formatISODate(date)"
            >
                {{ formatDateWithTime(date) }}
            </time>
        </template>
        <template #details>
            <p>In this example, functions are called on attributes.</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import {
    formatDateWithTime,
    formatISODate,
    formatShortDate
} from '@/core/utils/dateUtils'

const date = ref(new Date())

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
