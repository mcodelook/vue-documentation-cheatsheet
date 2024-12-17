<template>
    <LayoutDocument>
        <template #header> Fallthrough Attributes </template>
        <template #body>
            <FallthroughAttributes />
            <FallthroughAttributesDynamic />
        </template>
    </LayoutDocument>
</template>

<script setup>
import FallthroughAttributes from './FallthroughAttributes.vue'
import FallthroughAttributesDynamic from './FallthroughAttributesDynamic.vue'
</script>
