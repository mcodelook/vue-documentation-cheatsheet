<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Watch effect </template>
        <template #fieldset>
            <BaseButton text="Fetch data" @click="id++" />
        </template>
        <template #output>
            <p>Data: {{ data }}</p>
        </template>
        <template #details>
            <p>Watch effect to fetch data from an API when the id changes.</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const id = ref(1)
const data = ref(null)

// watch(
//   todoId,
//   async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     )
//     data.value = await response.json()
//   },
//   { immediate: true }
// )
// the same as above

// Set id before watchEffect to ensure it tracks the dependency correctly
watchEffect(async () => {
    console.log('Watch effect triggered')
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id.value}`
        )
        data.value = await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        data.value = { error: 'Failed to fetch data.' }
    }
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
