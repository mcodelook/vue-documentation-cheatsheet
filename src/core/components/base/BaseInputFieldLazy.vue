<template>
    <input
        :id
        :type
        :placeholder
        :disabled
        :value="model"
        @input="handleInput"
        @change="handleChange"
        class="disabled:bg-slate-400 rounded-md whitespace-pre-line p-2 italic bg-slate-900 border-2 monospace border-indigo-700 text-slate-300 shadow-inner shadow-black/25"
    />
</template>

<script setup>
const [model, modifiers] = defineModel({
    set(value) {
        if (modifiers.lazy) {
            return value
        }
        return value
    }
})

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

const handleInput = e => {
    if (!modifiers.lazy) {
        model.value = e.target.value
    }
}

const handleChange = e => {
    if (modifiers.lazy) {
        model.value = e.target.value
    }
}
</script>
