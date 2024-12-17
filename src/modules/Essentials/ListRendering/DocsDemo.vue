<template>
    <LayoutDocument>
        <template #header> List rendering </template>
        <template #body>
            <ObjectIteration />
            <SimpleRange />
            <FilteredValues />
            <ComponentIteration />
        </template>
    </LayoutDocument>
</template>

<script setup>
import ObjectIteration from './ObjectIteration.vue'
import SimpleRange from './SimpleRange.vue'
import FilteredValues from './FilteredValues.vue'
import ComponentIteration from './ComponentIteration.vue'
</script>
