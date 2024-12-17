<template>
    <div class="flex items-center space-x-2">
        <BaseButton text="-" @click="() => $emit('decrement')" />
        <LayoutOutput>{{ amount }}</LayoutOutput>
        <BaseButton text="+" @click="() => $emit('increment')" />
    </div>
</template>

<script setup>
defineProps({
    amount: {
        type: Number,
        required: true
    }
})

defineEmits(['increment', 'decrement'])
</script>
