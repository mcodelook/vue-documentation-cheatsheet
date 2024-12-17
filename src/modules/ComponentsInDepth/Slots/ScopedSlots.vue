<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Scoped slots </template>
        <template #output>
            <!-- <ScopedSlotsChild v-slot="slotProps">
            {{ slotProps.messageChild }} {{ slotProps.count }}
        </ScopedSlotsChild> -->
            <ScopedSlotsChild v-slot="{ messageChild, count }">
                <p>{{ messageChild }}</p>
                <p class="italic">Using parent class - {{ count }}</p>
            </ScopedSlotsChild>
        </template>
    </LayoutBase>
</template>

<script setup>
import ScopedSlotsChild from './ScopedSlotsChild.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
