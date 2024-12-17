<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Input bindings </template>
        <template #fieldset>
            <select v-model="selectedObjectValue" class="bg-slate-900 p-1 w-52">
                <option :value="{ number: 123 }">123</option>
                <option :value="{ number: 456 }">456</option>
            </select>
        </template>
        <template #output>
            <p>Selected: {{ selectedObjectValue }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
const selectedObjectValue = ref({ number: 123 })

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
