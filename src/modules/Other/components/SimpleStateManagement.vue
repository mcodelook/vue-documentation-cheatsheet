<template>
    <LayoutDocument>
        <template #header>
            Simple State Management with Reactivity API
        </template>
        <template #body>
            <LayoutBase :sourcePath="componentPath">
                <template #header> Simple State Management </template>
                <template #body>
                    <StateManagementA class="mb-1" />
                    <StateManagementB />
                </template>
            </LayoutBase>
        </template>
    </LayoutDocument>
</template>

<script setup>
import StateManagementA from './StateManagementA.vue'
import StateManagementB from './StateManagementB.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
