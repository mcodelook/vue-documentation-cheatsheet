<template>
    <div>
        <BaseButton @click="count++" text="Increment button - child" />
        <slot :messageChild="messageChild" :count></slot>
    </div>
</template>

<script setup>
import { useCounter } from '@/core/composables/useCounter'
const { count } = useCounter()
const messageChild = 'Hello from child component'
</script>
