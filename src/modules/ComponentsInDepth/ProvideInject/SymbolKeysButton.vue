<template>
    <BaseButton
        @click="theme.toggleTheme()"
        :text="`Switch to ${theme.mode === 'light' ? 'Dark' : 'Light'} Mode`"
    />
</template>

<script setup>
import { inject } from 'vue'
import { ThemeKey } from '@/keys.js'

const theme = inject(ThemeKey)
</script>
