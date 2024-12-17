<template>
    <BaseInputField v-model="message" />
    <p>Message is: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
</script>
