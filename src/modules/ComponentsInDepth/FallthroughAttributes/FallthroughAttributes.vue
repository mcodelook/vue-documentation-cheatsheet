<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Fallthrough Attributes </template>
        <template #output>
            <FallthroughAttributesChild class="bg-slate-700 rounded" />
        </template>
    </LayoutBase>
</template>

<script setup>
import FallthroughAttributesChild from './FallthroughAttributesChild.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
