<template>
    <div>
        <p data-testid="count">{{ count }}</p>
        <button data-testid="increment" @click="increment">Increment</button>
        <button data-testid="decrement" @click="decrement">Decrement</button>
    </div>
</template>

<script setup>
import { useCounter } from '@/core/composables/useCounter'

const { count, increment, decrement } = useCounter()
</script>
