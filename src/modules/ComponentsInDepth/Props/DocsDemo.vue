<template>
    <LayoutDocument>
        <template #header> Props </template>
        <template #body>
            <PropsComponent />
            <PropsDestructuring />
            <PropsObject />
        </template>
    </LayoutDocument>
</template>

<script setup>
import PropsComponent from './PropsComponent.vue'
import PropsDestructuring from './PropsDestructuring.vue'
import PropsObject from './PropsObject.vue'
</script>
