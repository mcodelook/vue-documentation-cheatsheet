<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Select multi binding </template>
        <template #fieldset>
            <select
                v-model="selectedValues"
                multiple
                class="bg-slate-900 p-2 border border-indigo-800"
            >
                <option disabled value="">Please select multi</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </template>
        <template #output>
            <p>Selected multi: {{ selectedValues }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const selectedValues = ref([])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
