<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Event Handling Examples </template>
        <template #fieldset>
            <BaseButton
                @click="() => messageModal.showModal('Hello!')"
                text="Say Hello"
            />
            <BaseButton
                @click="
                    event =>
                        messageModal.showModal('Event-triggered message', event)
                "
                text="Trigger with $event"
            />
            <BaseButton
                @click="
                    () => messageModal.showModal('Arrow function triggered.')
                "
                text="Arrow"
            />
        </template>
    </LayoutBase>
    <MessageModal ref="messageModal" />
</template>

<script setup>
import { ref } from 'vue'
import MessageModal from '@/core/components/modals/MessageModal.vue'

const messageModal = ref(null)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
