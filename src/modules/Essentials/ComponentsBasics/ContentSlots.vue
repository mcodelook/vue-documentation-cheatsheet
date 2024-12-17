<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Content slots </template>
        <template #output>
            <ContentSlotsChild> This is parent speaking. </ContentSlotsChild>
        </template>
    </LayoutBase>
</template>

<script setup>
import ContentSlotsChild from './ContentSlotsChild.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
