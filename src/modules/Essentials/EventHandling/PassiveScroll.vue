<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Passive Scroll Demo - logged </template>
        <template #output>
            <div
                class="h-20 overflow-y-auto"
                @scroll.passive="handlePassiveScroll"
            >
                <p v-for="n in 10" :key="n">
                    > Scrollable content line {{ n }}
                </p>
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { inject } from 'vue'

const addEventLog = inject('addEventLog')

const handlePassiveScroll = () => {
    addEventLog('Passive Scroll Demo: Non-blocking scroll event logged')
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
