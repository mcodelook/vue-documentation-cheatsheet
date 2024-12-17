<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Multiple Attributes </template>
        <template #body>
            <p v-bind="attributes">Multiple Attribute text</p>
        </template>
        <template #output>
            <p>{{ attributes }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
const attributes = {
    id: 'text',
    class: 'wrapper text-red-500',
    style: {
        textAlign: 'center'
    }
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
