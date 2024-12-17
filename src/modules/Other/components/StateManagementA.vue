<template>
    <div>
        <BaseButton
            @click="store.increment()"
            :text="`From A: ${store.count}`"
        />
    </div>
</template>

<script setup>
import { store } from '../store.js'
</script>
