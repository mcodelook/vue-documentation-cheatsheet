<template>
    <slot :xPosition="xPosition" :yPosition="yPosition" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const xPosition = ref(0)
const yPosition = ref(0)

const update = e => {
    xPosition.value = e.pageX
    yPosition.value = e.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>
