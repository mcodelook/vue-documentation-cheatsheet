<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Click to cycle through states </template>
        <template #body>
            <Transition name="slide-up">
                <BaseButton
                    v-if="buttonState === 'saved'"
                    @click="buttonState = 'edited'"
                    text="Edit"
                />
                <BaseButton
                    v-else-if="buttonState === 'edited'"
                    @click="buttonState = 'editing'"
                    text="Save"
                />
                <BaseButton
                    v-else-if="buttonState === 'editing'"
                    @click="buttonState = 'saved'"
                    text="Cancel"
                />
            </Transition>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const buttonState = ref('saved')
// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateY(-30px);
}
</style>
