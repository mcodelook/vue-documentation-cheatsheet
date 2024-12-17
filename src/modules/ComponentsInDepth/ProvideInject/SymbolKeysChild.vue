<template>
    <div>
        <p>Current theme: {{ theme.mode }}</p>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { ThemeKey } from '@/keys.js'

const theme = inject(ThemeKey)
if (!theme) {
    throw new Error('SymbolKeysChild must be used within a ThemeProvider.')
}
</script>
