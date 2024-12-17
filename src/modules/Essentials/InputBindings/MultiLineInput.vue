<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Multiline input </template>
        <template #fieldset>
            <textarea
                class="rounded-md w-1/2 whitespace-pre-line p-2 italic bg-slate-900 border-2 border-indigo-700 text-slate-300 shadow-inner shadow-black/25"
                v-model="inputText"
                placeholder="add multiple lines"
            ></textarea>
        </template>
        <template #output v-if="inputText">
            <p class="whitespace-pre-line">Input: {{ inputText }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
