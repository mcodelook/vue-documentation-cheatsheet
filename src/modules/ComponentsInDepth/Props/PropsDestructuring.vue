<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Props Destructuring </template>
        <template #fieldset>
            <BaseButton text="Increment" @click="increment" />
        </template>
        <template #output>
            <p>Count: {{ count }}</p>
            <PropsDestructuringChild :count="count" />
            <PropsDestructuringChild message="default" />
        </template>
        <template #details>
            Second cild component is using default value from props
        </template>
    </LayoutBase>
</template>

<script setup>
import PropsDestructuringChild from './PropsDestructuringChild.vue'
import { useCounter } from '@/core/composables/useCounter'
const { count, increment } = useCounter()

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
