<template>
    <LayoutDocument>
        <template #header> Components Basics </template>
        <template #body>
            <ComponentsBasic />
            <ContentSlots />
        </template>
    </LayoutDocument>
</template>

<script setup>
import ComponentsBasic from './ComponentsBasic.vue'
import ContentSlots from './ContentSlots.vue'
</script>
