<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Event Propagation Modifiers </template>
        <template #body>
            <div>
                <div
                    @click="handleContainerClick"
                    class="*:m-1 p-2 bg-slate-800 hover:bg-slate-900 cursor-pointer"
                >
                    <BaseButton
                        @click.stop="handleStopPropagation"
                        text="Stop Propagation Demo"
                    />

                    <form @submit.prevent>
                        <BaseInputField
                            @keyup.enter="handlePreventDefault"
                            placeholder="Submit prevent"
                        />
                    </form>
                </div>
            </div>

            <div>
                <div
                    class="bg-slate-800 mt-1 p-2 text-center hover:bg-slate-900 cursor-pointer"
                    @click.self="handleSelfClick"
                >
                    Click Background Only (.self)
                    <BaseButton
                        text="Click Button Only"
                        @click="handleButtonClick"
                    />
                </div>
            </div>
        </template>
    </LayoutBase>
    <MessageModal ref="messageModal" />
</template>

<script setup>
import { ref } from 'vue'
import MessageModal from '@/core/components/modals/MessageModal.vue'

const messageModal = ref(null)

const handleContainerClick = () => {
    messageModal.value.showModal(
        'Container clicked - This shows event bubbling'
    )
}

const handleStopPropagation = () => {
    messageModal.value.showModal('Link clicked - Event stops here (.stop)')
}

const handlePreventDefault = () => {
    messageModal.value.showModal(
        'Form submitted - Default prevented (.prevent)'
    )
}

const handleSelfClick = () => {
    messageModal.value.showModal(
        'Background clicked - Only triggers on direct clicks (.self)'
    )
}

const handleButtonClick = () => {
    messageModal.value.showModal(
        'Button clicked - Does not trigger parent handler'
    )
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
