<template>
    <Teleport to="#modals">
        <modal
            :isModalVisible="isMessageModalVisible"
            @close="closeMessageModal"
        >
            <template #header>
                <h3>Message</h3>
            </template>
            <template #body>
                <p>{{ currentModalMessage }}</p>
            </template>
        </modal>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './ModalPop.vue'

const isMessageModalVisible = ref(false)
const currentModalMessage = ref('')

const showModal = (message, event) => {
    currentModalMessage.value = message + (event ? ` Event: ${event.type}` : '')
    isMessageModalVisible.value = true
}

const closeMessageModal = () => {
    isMessageModalVisible.value = false
    currentModalMessage.value = ''
}

// Expose methods and state to parent components
defineExpose({
    showModal,
    closeMessageModal,
    isMessageModalVisible,
    currentModalMessage
})
</script>
