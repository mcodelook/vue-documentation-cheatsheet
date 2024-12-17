<template>
    <LayoutDocument>
        <template #header> Custom reference </template>
        <template #body>
            <LayoutBase :sourcePath="componentPath">
                <template #header> Local storage </template>
                <template #log>
                    <p>BaseButton.vue was mounted {{ mountCount }} times</p>
                </template>
            </LayoutBase>
        </template>
    </LayoutDocument>
</template>

<script setup>
import { useLocalStorageRef } from '../refs/useLocalStorage'

const mountCount = useLocalStorageRef('button-mount-count-default')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
