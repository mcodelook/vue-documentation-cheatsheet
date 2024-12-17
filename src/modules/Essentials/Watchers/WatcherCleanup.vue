<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Watcher Cleanup Example and stop </template>
        <template #fieldset>
            <BaseInputField
                id="idInput"
                v-model="id"
                type="text"
                placeholder="Enter Todo ID"
            />
            <BaseButton text="Stop Watching" @click="unwatch" />
        </template>
        <template #output v-if="data || error">
            <p v-if="data && !error">{{ data }}</p>
            <p v-if="error" class="text-red-500">{{ error }}</p>
            <p v-if="!data && !error && id">Loading...</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watch } from 'vue'

const id = ref('')
const data = ref(null)
const error = ref(null)

const unwatch = watch(id, (newId, oldId, onCleanup) => {
    if (!newId) {
        data.value = null
        return
    }

    const controller = new AbortController()

    const delayedFetch = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Perform fetch only if this watcher isn't cleaned up
        fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`, {
            signal: controller.signal
        })
            .then(async response => {
                if (!response.ok) throw new Error(`Error: ${response.status}`)
                return await response.json()
            })
            .then(fetchedData => {
                data.value = fetchedData
                error.value = null
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log(`Request for ID ${oldId} aborted.`)
                } else {
                    error.value = err.message
                }
            })
    }

    delayedFetch()

    // Cleanup: Abort the request if `id` changes before this fetch completes
    onCleanup(() => {
        console.log(`Cleaning up request for ID ${newId}`)
        controller.abort()
    })
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
