<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Symbol keys </template>
        <template #output class="text-xl">
            <div
                class="m-1 p-3"
                :class="
                    theme.mode === 'light'
                        ? 'bg-slate-200 text-slate-900'
                        : 'bg-slate-900 text-white'
                "
            >
                <SymbolKeysButton />
                <SymbolKeysChild />
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { provide, reactive } from 'vue'
import { ThemeKey } from '@/keys.js'

import SymbolKeysButton from './SymbolKeysButton.vue'
import SymbolKeysChild from './SymbolKeysChild.vue'

const theme = reactive({
    mode: 'dark',
    toggleTheme() {
        this.mode = this.mode === 'light' ? 'dark' : 'light'
    }
})

provide(ThemeKey, theme)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
