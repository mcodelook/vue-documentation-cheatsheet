<template>
    <input
        :id
        :type
        :placeholder
        :disabled
        v-model="model"
        class="disabled:bg-slate-400 rounded-md whitespace-pre-line p-2 mr-2 italic bg-slate-900 border-2 monospace border-indigo-700 text-slate-300 shadow-inner shadow-black/25"
    />
</template>

<script setup>
const [model] = defineModel()

defineProps({
    id: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: 'Input'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>
