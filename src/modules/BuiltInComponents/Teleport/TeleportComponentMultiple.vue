<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Multiple Teleports on the Same Target </template>
        <template #body>
            <div id="refed"></div>

            <BaseButton
                id="show-modal-1"
                @click="isModal1Visible = true"
                text="Show Modal 1"
            />
            <BaseButton
                id="show-modal-2"
                @click="isModal2Visible = true"
                text="Show Modal 2"
            />
            <BaseButton
                id="show-modal-3"
                @click="isModal3Visible = true"
                text="Show Modal 3"
            />

            <Teleport to="#modals">
                <modal
                    :isModalVisible="isModal1Visible"
                    @close="isModal1Visible = false"
                >
                    <template #header>
                        <h3>Custom Header for Modal 1</h3>
                    </template>
                    <template #body>
                        <p>
                            This is the body content for Modal 1. The div is in
                            index.html
                        </p>
                    </template>
                </modal>
            </Teleport>

            <Teleport to="#modals">
                <modal
                    :isModalVisible="isModal2Visible"
                    @close="isModal2Visible = false"
                >
                    <template #header>
                        <h3>Custom Header for Modal 2</h3>
                    </template>
                    <template #body>
                        <p>
                            This is the body content for Modal 2. The div is in
                            index.html
                        </p>
                    </template>
                </modal>
            </Teleport>

            <Teleport defer to="#refed">
                <modal
                    :isModalVisible="isModal3Visible"
                    @close="isModal3Visible = false"
                >
                    <template #header>
                        <h3>Defer - Custom Header for Modal 3</h3>
                    </template>
                    <template #body>
                        <p>This is the body content for Modal 3.</p>
                    </template>
                </modal>
            </Teleport>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../../../core/components/modals/ModalPop.vue'

const isModal1Visible = ref(false)
const isModal2Visible = ref(false)
const isModal3Visible = ref(false)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
