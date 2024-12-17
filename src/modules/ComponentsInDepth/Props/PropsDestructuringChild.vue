<template>
    <p>Double Count: {{ doubleCount }} - {{ message }}</p>
</template>

<script setup>
import { computed } from 'vue'

const { count = 15 } = defineProps({
    count: {
        type: Number,
        required: false
    },
    message: {
        type: String,
        required: false
    }
})

const doubleCount = computed(() => count * 2)
</script>
