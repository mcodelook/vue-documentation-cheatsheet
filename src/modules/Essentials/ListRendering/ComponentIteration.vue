<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>Component</template>
        <template #fieldset>
            <BaseButton
                v-for="num in 5"
                :key="num"
                :text="num"
                @click="() => messageModal.showModal(num)"
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
