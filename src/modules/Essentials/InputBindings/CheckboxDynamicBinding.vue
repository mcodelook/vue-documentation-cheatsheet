<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Checkbox dynamic binding </template>
        <template #fieldset>
            <input
                class="mr-3"
                type="checkbox"
                v-model="toggleValue"
                :true-value="customTrueValue"
                :false-value="customFalseValue"
            />
            <label class="mr-6">{{ toggleValue }}</label>
        </template>
        <template #output>
            <p>Toggle: {{ toggleValue }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const toggleValue = ref(true)
const customTrueValue = ref('Yes, it is true')
const customFalseValue = ref('No, it is false')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
