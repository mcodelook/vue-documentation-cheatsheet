<template>
    <p :key="count" class="text-center">{{ count }}</p>
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue'

const count = ref(0)

setInterval(() => {
    count.value++
}, 500)

onActivated(() => {
    count.value += 1000
})

onDeactivated(() => {
    count.value -= 500
})
</script>
