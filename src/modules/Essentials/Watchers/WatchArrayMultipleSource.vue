<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Array of multiple sources </template>
        <template #fieldset>
            <BaseInputField v-model="firstName" placeholder="Enter John" />
            <BaseInputField v-model="lastName" placeholder="Enter Smith" />
        </template>
        <template #output>
            <p>{{ formStatus }}</p>
            <p>Form is valid: {{ isFormValid }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')

const isFormValid = computed(
    () => firstName.value === 'John' && lastName.value === 'Smith'
)

const formStatus = ref('Form is not valid')

// Watch multiple sources: firstName and computed property for form validation
watch([firstName, () => isFormValid.value], ([newLastName, newIsFormValid]) => {
    if (newIsFormValid) {
        formStatus.value = 'You are John Smith!'
    } else {
        formStatus.value = 'Liar! You are not John Smith!'
    }

    console.log(`Username: ${newLastName}, Form Valid: ${newIsFormValid}`)
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
