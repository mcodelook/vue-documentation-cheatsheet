<template>
    <p :key="count" class="text-center">{{ count }}</p>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

setInterval(() => {
    count.value++
}, 500)
</script>
