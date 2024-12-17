<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Dynamic Arguments </template>
        <template #body>
            <a
                class="text-white hover:text-slate-400 underline"
                :[attributeDynamic]="argumentDynamic"
                target="_blank"
                >Dynamic link</a
            >
        </template>
        <template #output>
            <p>Dynamic attribute: {{ attributeDynamic }}</p>
            <p>Dynamic argument: {{ argumentDynamic }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
const attributeDynamic = 'href'
const argumentDynamic = 'https://google.com'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
