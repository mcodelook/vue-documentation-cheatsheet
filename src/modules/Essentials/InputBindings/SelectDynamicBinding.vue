<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Select binding dynamic </template>
        <template #fieldset>
            <select
                v-model="selectedValue"
                class="bg-slate-900 p-2 border w-1/2 border-indigo-800"
            >
                <option disabled value="">Please select one</option>
                <option
                    v-for="option in selectOptions"
                    :value="option.value"
                    :key="option.value"
                >
                    {{ option.text }}
                </option>
            </select>
        </template>
        <template #output>
            <p>Selected value: {{ selectedValue }}</p>
        </template>
        <template #details>
            <p>Dynamic binding of select options</p>
        </template>
        <template #data>
            <pre>
                {{ selectOptions }}
            </pre>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('A')

const selectOptions = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' },
    { text: 'Four', value: 'D' }
])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
