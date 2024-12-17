<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Post/Sync watcher </template>
        <template #fieldset>
            <BaseInputField
                v-model="userName"
                type="text"
                placeholder="Enter userName"
            />
            <BaseButton
                text="Save"
                @click="handleSubmit"
                :disabled="!isValid"
            />
        </template>
        <template #output>
            <p class="validation-message inline">{{ validationMessage }}</p>
            <p class="inline">- {{ saveStatus }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watchSyncEffect, watchPostEffect } from 'vue'

const userName = ref('')
const isValid = ref(false)
const validationMessage = ref('')
const saveStatus = ref('')

// Immediate validation using watchSyncEffect
watchSyncEffect(() => {
    // This runs synchronously whenever userName changes
    if (userName.value.length === 0) {
        isValid.value = false
        validationMessage.value = 'Username is required'
    } else if (userName.value.length < 5) {
        isValid.value = false
        validationMessage.value = 'Username must be at least 5 characters'
    } else {
        isValid.value = true
        validationMessage.value = 'Username is valid'
    }
})

// UI updates using watchPostEffect
watchPostEffect(() => {
    // This runs after Vue updates the DOM
    if (isValid.value) {
        // Access and modify DOM element styles directly
        const messageElement = document.querySelector('.validation-message')
        messageElement.style.color = 'green'
    } else {
        const messageElement = document.querySelector('.validation-message')
        messageElement.style.color = 'red'
    }
})

const handleSubmit = () => {
    if (isValid.value) {
        saveStatus.value = 'Saving...'
        setTimeout(() => {
            userName.value = ''
            saveStatus.value = 'Saved!'
        }, 1000)
    }
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
