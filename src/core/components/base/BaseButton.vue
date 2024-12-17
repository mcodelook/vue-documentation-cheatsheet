<template>
    <button
        class="bg-indigo-600 border mr-1 border-indigo-500 text-sm hover:bg-indigo-800 text-white font-medium py-2 px-4 rounded disabled:font-thin disabled:bg-indigo-950"
        :disabled
        :id
        :type
    >
        {{ text }}
    </button>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLocalStorageRef } from '@/modules/Other/refs/useLocalStorage'
defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    text: {
        type: [String, Number],
        required: true
    },
    id: {
        type: String,
        default: '',
        required: false
    },
    type: {
        type: String,
        default: 'button',
        validator: value => ['button', 'submit'].includes(value)
    }
})

const mountCount = useLocalStorageRef('button-mount-count-default')

onMounted(() => {
    mountCount.value = (mountCount.value || 0) + 1
})
</script>
