<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Computed Properties Basic </template>
        <template #output>
            <p v-for="author in authorStatuses" :key="author.name">
                {{ author.name }} has published books: {{ author.hasPublished }}
            </p>
        </template>
        <template #details>
            <p>
                This example shows how to use computed properties to calculate a
                value based on the reactive state.
            </p>
        </template>
        <template #data>
            <pre>
                {{ authors }}
            </pre>
        </template>
    </LayoutBase>
</template>

<script setup>
import { reactive, computed } from 'vue'

const authors = reactive([
    {
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    },
    {
        name: 'Jane Smith',
        books: []
    }
])

const authorStatuses = computed(() => {
    return authors.map(author => ({
        name: author.name,
        hasPublished: author.books.length > 0 ? 'Yes' : 'No'
    }))
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
