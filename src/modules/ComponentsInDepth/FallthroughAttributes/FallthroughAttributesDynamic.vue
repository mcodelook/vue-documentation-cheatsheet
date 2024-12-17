<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Accessing Fallthrough Attributes </template>
        <template #output>
            <FallthroughAttributesDynamicChild class="bg-slate-700 rounded" />
        </template>
    </LayoutBase>
</template>

<script setup>
import FallthroughAttributesDynamicChild from './FallthroughAttributesDynamicChild.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
