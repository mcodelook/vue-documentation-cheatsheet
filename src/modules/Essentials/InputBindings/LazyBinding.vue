<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Lazy input bindings </template>
        <template #fieldset>
            <BaseInputFieldLazy v-model.lazy="BaseInputField" />
        </template>
        <template #output>
            <p>Lazy: {{ BaseInputField }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import BaseInputFieldLazy from '@/core/components/base/BaseInputFieldLazy.vue'
import { ref } from 'vue'

const BaseInputField = ref(0)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
