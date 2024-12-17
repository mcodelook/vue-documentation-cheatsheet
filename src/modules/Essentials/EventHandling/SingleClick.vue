<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Single Click Demo - logged </template>
        <template #fieldset>
            <BaseButton
                @click.once="handleSingleClick"
                text="Click Once Only"
            />
        </template>
    </LayoutBase>
</template>

<script setup>
import { inject } from 'vue'

const addEventLog = inject('addEventLog')

const handleSingleClick = () => {
    addEventLog('Single Click Demo: This handler will only trigger once')
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
