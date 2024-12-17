<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Propagation phases - logged </template>
        <template #body>
            <div
                @click.capture="handlePropagationOuter"
                class="bg-slate-900 p-3"
            >
                <p class="text-center font-thin p-1 text-white">
                    Outer Layer (Capture Phase)
                </p>
                <div
                    class="bg-slate-800 p-4 mt-2"
                    @click="handlePropagationMiddle"
                >
                    <p class="text-center font-thin p-1 text-white">
                        Middle Layer (Bubbling Phase)
                    </p>
                    <BaseButton
                        text="Inner Layer (Target Phase)"
                        @click="handlePropagationInner"
                    />
                </div>
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { inject } from 'vue'

const addEventLog = inject('addEventLog')

const handlePropagationOuter = () => {
    addEventLog('1. Outer Layer: Capture phase triggered first')
}

const handlePropagationMiddle = () => {
    addEventLog('2. Middle Layer: Bubbling phase triggered second')
}

const handlePropagationInner = () => {
    addEventLog('3. Inner Layer: Target phase triggered last')
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
