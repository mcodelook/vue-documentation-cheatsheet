<template>
    <LayoutDocument>
        <template #header> Slots </template>
        <template #body>
            <NamedSlots />
            <ConditionalSlots />
            <ScopedSlots />
            <NamedScopedSlots />
            <RenderlessComponents />
        </template>
    </LayoutDocument>
</template>

<script setup>
import NamedSlots from './NamedSlots.vue'
import ConditionalSlots from './ConditionalSlots.vue'
import ScopedSlots from './ScopedSlots.vue'
import NamedScopedSlots from './NamedScopedSlots.vue'
import RenderlessComponents from './RenderlessComponents.vue'
</script>
