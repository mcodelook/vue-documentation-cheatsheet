<template>
    <LayoutDocument>
        <template #header> Provide / Inject </template>
        <template #body>
            <ProvideInject />
            <SymbolKeys />
        </template>
    </LayoutDocument>
</template>

<script setup>
import ProvideInject from './ProvideInject.vue'
import SymbolKeys from './SymbolKeys.vue'
</script>
