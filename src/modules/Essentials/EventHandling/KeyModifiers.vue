<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Key modifiers </template>
        <template #fieldset>
            <BaseInputField
                v-model="inputText"
                @keyup.enter.alt.exact="showAlert('Alt+Enter')"
            />
            <label class="inline-block">Alt+Enter exact</label>
        </template>
    </LayoutBase>
    <MessageModal ref="messageModal" />
</template>

<script setup>
import { ref } from 'vue'
import MessageModal from '@/core/components/modals/MessageModal.vue'

const messageModal = ref(null)

const inputText = ref('')

const showAlert = message => {
    messageModal.value.showModal(`${message}: ${inputText.value}`)
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
