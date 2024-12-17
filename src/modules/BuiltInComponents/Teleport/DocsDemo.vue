<template>
    <LayoutDocument>
        <template #header> Teleport </template>
        <template #body>
            <TeleportComponent />
            <TeleportComponentMultiple />
        </template>
    </LayoutDocument>
</template>

<script setup>
import TeleportComponent from './TeleportComponent.vue'
import TeleportComponentMultiple from './TeleportComponentMultiple.vue'
</script>
