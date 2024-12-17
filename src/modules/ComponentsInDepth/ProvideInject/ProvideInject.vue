<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Provide/Inject and reactivity </template>
        <template #fieldset class="text-xl">
            <BaseInputField v-model="messageParent" />
            <BaseButton @click="increment" :text="`Counter ${count}`" />
        </template>
        <template #output>
            <ProvideInjectChild />
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, provide, readonly } from 'vue'
import ProvideInjectChild from './ProvideInjectChild.vue'
import { useCounter } from '@/core/composables/useCounter'
const { count, increment } = useCounter()

const messageParent = ref('hello')

const updateMessage = () => {
    messageParent.value = 'Message from the parent'
}

provide('messageParent', {
    messageParent,
    updateMessage
})
provide('read-only-count', readonly(count))

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
