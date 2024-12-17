<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Basic watch example </template>
        <template #fieldset>
            <BaseInputField
                placeholder="Ask a yes/no question"
                id="questionInput"
                v-model="userQuestion"
            />
        </template>
        <template #output>
            <p>{{ apiResponse }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watch } from 'vue'

const userQuestion = ref('')
const apiResponse = ref('Questions usually contain a question mark. ;-)')
const isLoading = ref(false)

watch(userQuestion, async newQuestion => {
    if (newQuestion.endsWith('?')) {
        isLoading.value = true
        apiResponse.value = 'Thinking...'
        try {
            const response = await fetch('https://yesno.wtf/api')
            const data = await response.json()
            apiResponse.value = data.answer
        } catch (error) {
            apiResponse.value = 'Error! Could not reach the API. ' + error
        } finally {
            isLoading.value = false
        }
    } else {
        apiResponse.value = 'Questions usually contain a question mark. ;-)'
    }
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
