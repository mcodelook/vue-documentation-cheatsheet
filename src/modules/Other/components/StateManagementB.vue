<script setup>
import { store } from '../store.js'
</script>

<template>
    <div>
        <BaseButton
            @click="store.increment()"
            :text="`From B: ${store.count}`"
        />
    </div>
</template>
