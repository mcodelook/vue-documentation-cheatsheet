<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Props Demonstration </template>
        <template #fieldset>
            <BaseButton
                @click="handleNumberChange"
                text="Change number to 30"
            />
        </template>
        <template #output>
            <PropsChild
                messageText="Message from the parent"
                :numericValue="currentNumber"
                :isHighlighted="isHighlighted"
            />
        </template>
        <template #details>
            Simple props passing. Shows how child behaves when parent changes
            the prop values.
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import PropsChild from './PropsChild.vue'

const currentNumber = ref(15)
const isHighlighted = ref(false)

const handleNumberChange = () => {
    currentNumber.value = 30
    isHighlighted.value = !isHighlighted.value
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
