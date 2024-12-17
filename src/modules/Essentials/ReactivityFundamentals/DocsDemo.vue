<template>
    <LayoutDocument>
        <template #header> Reactivity Fundamentals </template>
        <template #body>
            <Counter />
            <DeepMutation />
            <AddRefUnwrappingDetails />
            <ProxyVsOriginal />
        </template>
    </LayoutDocument>
</template>

<script setup>
import Counter from './ComputedSetter.vue'
import DeepMutation from './DeepMutation.vue'
import AddRefUnwrappingDetails from './AddRefUnwrappingDetails.vue'
import ProxyVsOriginal from './ProxyVsOriginal.vue'
</script>
