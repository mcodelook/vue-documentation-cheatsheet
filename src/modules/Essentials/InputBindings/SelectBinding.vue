<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Select binding </template>
        <template #fieldset>
            <select
                v-model="selectedValue"
                class="bg-slate-900 p-2 w-1/2 border border-indigo-800"
            >
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </template>
        <template #output>
            <p>Selected: {{ selectedValue }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
