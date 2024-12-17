<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Proxy vs original </template>
        <template #output>
            <p>Raw: {{ raw }}</p>
            <p>Proxy: {{ proxy }}</p>
            <p>Is equal: {{ isEqual }}</p>
            <p>Is equal reactive: {{ isEqualReactive }}</p>
        </template>
        <template #details>
            <p>
                The proxy is a reactive object that is not equal to the original
                object.
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { reactive } from 'vue'

const raw = { foo: 'bar' }
const proxy = reactive(raw)

const isEqual = raw === proxy
const isEqualReactive = reactive(raw) === proxy

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
