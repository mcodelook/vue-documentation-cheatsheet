<template>
    <LayoutDocument>
        <template #header> Computed Properties </template>
        <template #body>
            <ComputedPropertiesBasic />
            <ComputedCacheVsMethods />
            <WritableComputed />
        </template>
    </LayoutDocument>
</template>

<script setup>
import ComputedPropertiesBasic from './ComputedPropertiesBasic.vue'
import ComputedCacheVsMethods from './ComputedCacheVsMethods.vue'
import WritableComputed from './WritableComputed.vue'
</script>
