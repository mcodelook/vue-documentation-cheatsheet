<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>Simple range</template>
        <template #output>
            <span v-for="number in 10" :key="number">{{ number }}, </span>
        </template>
    </LayoutBase>
</template>

<script setup>
// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
