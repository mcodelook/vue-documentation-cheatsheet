<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Deep watchers, Eager and Once </template>
        <template #fieldset>
            <BaseButton text="Increment age" @click="userProfile.data.age++" />
            <BaseButton
                text="Update name"
                @click="userProfile.data.name = 'Nick'"
            />
            <BaseButton
                text="Change city"
                @click="userProfile.data.address.city = 'LA'"
            />
        </template>
        <template #output>
            <p>{{ JSON.stringify(userProfile) }}</p>
        </template>
        <template #log>
            <p>{{ eventLog }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'

//Basic deep watcher, reactive object
const userProfile = reactive({
    data: {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            country: 'USA'
        }
    }
})

const eventLog = ref('Initial Log Text')

watch(
    userProfile,
    // eslint-disable-next-line no-unused-vars
    (newValue, oldValue) => {
        eventLog.value += `\n>> Nested property watch triggered `
        // fires on nested property mutations
        // Note: `newValue` will be equal to `oldValue` here
        // because they both point to the same object!
    }
)

// Watch specific nested property
// This only watches for data object replacement
watch(
    () => userProfile.data.age,
    (newAge, oldAge) => {
        eventLog.value += `\n>> Specific property changed from ${oldAge} to ${newAge}`
    }
)

watch(
    userProfile,
    // eslint-disable-next-line no-unused-vars
    (newValue, oldValue) => {
        eventLog.value += `\n>> Deep watch triggered $`
    },
    { deep: true }
)

watch(
    () => userProfile,
    // eslint-disable-next-line no-unused-vars
    (newValue, oldValue) => {
        eventLog.value += `\n>> Deep level MAX 2 watch triggered`
    },
    { deep: 2 }
)

watch(
    userProfile,
    // eslint-disable-next-line no-unused-vars
    (newValue, oldValue) => {
        eventLog.value += `\n>> Once triggered`
    },
    { once: true }
)

// watch(
//   source,
//   (newValue, oldValue) => {
//     // executed immediately, then again when `source` changes
//   },
//   { immediate: true }
// )

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
