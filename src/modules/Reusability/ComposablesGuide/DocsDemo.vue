<template>
    <LayoutDocument>
        <template #header> Composables </template>
        <template #body>
            <MouseExample />
            <AsyncStateExample />
        </template>
    </LayoutDocument>
</template>

<script setup>
import MouseExample from './MouseExample.vue'
import AsyncStateExample from './AsyncStateExample.vue'
</script>
