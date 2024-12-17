<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Passing Props, Emitting Events </template>
        <template #body>
            <ComponentsBasicChild
                v-for="item in itemsInventory"
                :key="item.id"
                :initial-amount="item.amount"
                :item-name="item.name"
                @update-count="updateItemCounter(item.id, $event)"
            />
        </template>
        <template #output>
            <p>Total items: {{ itemsTotal }}</p>
        </template>
        <template #details>
            <p>Child component emits events to update the parent component.</p>
        </template>
        <template #data>
            {{ itemsInventory }}
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'
import ComponentsBasicChild from './ComponentsBasicChild.vue'

const itemsInventory = ref([
    { id: 1, name: 'Apples', amount: 0 },
    { id: 2, name: 'Oranges', amount: 0 }
])

const itemsTotal = computed(() =>
    itemsInventory.value.reduce((sum, item) => sum + item.amount, 0)
)

const updateItemCounter = (id, newValue) => {
    const itemCounter = itemsInventory.value.find(item => item.id === id)
    if (itemCounter) {
        itemCounter.amount = newValue
    }
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
