<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Computed Cache vs Methods </template>
        <template #fieldset>
            <BaseButton text="Add a book" @click="addBook" />
            <BaseButton text="Clear books" @click="clearBooks" />
            <BaseButton text="Clear Log" @click="clearLog" />
        </template>
        <template #output>
            <p>Total Books: {{ items.books.length }}</p>
            <p>Computed Value: {{ computedHaskBooks }}</p>
            <p>Method Value: {{ methodHasBooks() }}</p>
        </template>
        <template #log>
            <p>{{ eventLog }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const items = reactive({
    books: []
})

const eventLog = ref('Initial Log Text')

// Separate computed properties for display vs logging
const logComputedHasBooks = computed(() => {
    eventLog.value += '\nComputed: Checking if there are books'
    return items.books.length > 0
})

const computedHaskBooks = computed(() => items.books.length > 0)

// Separate method for display vs logging
const logMethodHasBooks = () => {
    eventLog.value += '\nMethod: Checking if there are books'
    return items.books.length > 0
}

const methodHasBooks = () => {
    return items.books.length > 0
}

const addBook = () => {
    items.books.push(`Book ${items.books.length + 1}`)
    eventLog.value += `\nAdded book ${items.books.length}`
    logMethodHasBooks()
    logComputedHasBooks.value
}

const clearBooks = () => {
    items.books.length = 0
    eventLog.value += '\nCleared all books.'
    logMethodHasBooks()
    logComputedHasBooks.value
}

const clearLog = () => {
    eventLog.value = 'Initial Log Text'
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
