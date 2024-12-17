<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>
            Text interpolation, Attribute bindings, global property
        </template>
        <template #output>
            <p :id="dynamicId" :sameNameId>
                Same-name Shorthand {{ sameNameId }} and dynamic Id
                {{ dynamicId }}
            </p>
            <p>{{ messageGlobal }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

const messageGlobal = proxy.message
const dynamicId = 3
const sameNameId = 15

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
