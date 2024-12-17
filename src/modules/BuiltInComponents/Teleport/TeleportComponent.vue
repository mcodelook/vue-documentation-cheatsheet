<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Teleport </template>
        <template #body>
            <BaseButton
                id="show-modal"
                text="Show Modal"
                @click="isModalVisible = true"
            />

            <Teleport to="body">
                <modal :isModalVisible @close="isModalVisible = false">
                    <template #header>
                        <h3>Custom Header for Modal</h3>
                    </template>
                </modal>
            </Teleport>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../../core/components/modals/ModalPop.vue'

const isModalVisible = ref(false)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
