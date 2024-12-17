<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Bindings and simplified v-model </template>
        <template #fieldset>
            <BaseInputField
                @input="event => (inputText = event.target.value)"
                :value="inputText"
                @keyup.enter.prevent="() => messageModal.showModal(inputText)"
            />
            <BaseInputField
                v-model="inputText"
                @keyup.enter.prevent="() => messageModal.showModal(inputText)"
            />
        </template>
        <template #details>
            <p>
                First input field uses a manual binding to update the inputText
                value. The second one uses the v-model to simplify the binding.
            </p>
        </template>
    </LayoutBase>
    <MessageModal ref="messageModal" />
</template>

<script setup>
import { ref } from 'vue'
import MessageModal from '@/core/components/modals/MessageModal.vue'
const messageModal = ref(null)

const inputText = ref('Hello')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
