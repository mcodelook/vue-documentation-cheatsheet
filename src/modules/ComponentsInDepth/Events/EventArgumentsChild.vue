<template>
    <BaseButton
        @mouseenter="emitHover(true)"
        @mouseleave="emitHover(false)"
        text="Hover me"
    />
    <BaseButton text="Increment" @click="$emit('increment', 1)" />
    <BaseButton text="Once" @click="$emit('click')" />
</template>

<script setup>
const emit = defineEmits(['hover', 'increment', 'click'])

const emitHover = value => {
    emit('hover', value)
}
</script>
