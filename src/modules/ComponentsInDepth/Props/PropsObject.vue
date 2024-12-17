<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Props object </template>
        <template #output>
            <PropsObjectChild
                v-for="item in itemsInventory"
                :key="item.id"
                :item
            />
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import PropsObjectChild from './PropsObjectChild.vue'

const itemsInventory = ref([
    { id: 1, name: 'Apples', amount: 0 },
    { id: 2, name: 'Oranges', amount: 0 }
])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
