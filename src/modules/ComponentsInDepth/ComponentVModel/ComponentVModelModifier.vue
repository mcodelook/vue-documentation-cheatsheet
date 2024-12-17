<template>
    <BaseInputField type="text" v-model="model" />
</template>

<script setup>
const [model, modifiers] = defineModel({
    set(value) {
        if (modifiers.uppercase) {
            return value.toUpperCase()
        }
        return value
    }
})
</script>
