<template>
    <div class="flex justify-between mt-4 p-4" :class="statusTypes[status]">
        <p>{{ message }}</p>
        <button @click="handleClose">[ × ]</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
defineProps({
    status: {
        type: String,
        validator: value => ['success', 'error'].includes(value)
    },
    message: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['close'])

const statusTypes = {
    success: 'bg-green-800 border border-green-400 text-green-100',
    error: 'bg-red-800 border border-red-400 text-red-100'
}

const handleClose = () => {
    emit('close')
}

onMounted(() => {
    setTimeout(() => {
        handleClose()
    }, 3000)
})
</script>
