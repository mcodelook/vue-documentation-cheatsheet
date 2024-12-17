<template>
    <BaseInputField type="text" v-model="model" :placeholder="model" />
</template>

<script setup>
const model = defineModel('title', {
    default: 'Default value here',
    required: false
})
</script>
