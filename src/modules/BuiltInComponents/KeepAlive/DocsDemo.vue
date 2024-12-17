<template>
    <LayoutDocument>
        <template #header> Keep Alive </template>
        <template #body>
            <KeepAliveComponent />
        </template>
    </LayoutDocument>
</template>

<script setup>
import KeepAliveComponent from './KeepAliveComponent.vue'
</script>
