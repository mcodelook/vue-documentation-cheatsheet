<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Async state example, reactive state </template>
        <template #fieldset>
            <BaseButton
                :text="`Fetch next one, prev: ${currentId}`"
                @click="currentId++"
            />
        </template>
        <template #output>
            <p>Static - {{ JSON.stringify(data) }} {{ error }}</p>
            <p>
                Dynamic - {{ JSON.stringify(dynamicData) }} {{ dynamicError }}
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '@/core/composables/useFetch'
import { useFetchReactive } from '@/core/composables/useFetchReactive'

const currentId = ref(1)

const { data, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${currentId.value}`
)
const { data: dynamicData, error: dynamicError } = useFetchReactive(
    () => `https://jsonplaceholder.typicode.com/todos/${currentId.value}`
)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
