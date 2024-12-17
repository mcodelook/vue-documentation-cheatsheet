<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Slide + Fade </template>
        <template #fieldset>
            <BaseButton
                @click="isVisible = !isVisible"
                text="Toggle Slide + Fade"
            />
        </template>
        <template #output>
            <Transition name="slide-fade">
                <p class="text-center" v-if="isVisible">Hello there</p>
            </Transition>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>

<style scoped>
.slide-fade-enter-active {
    animation: bounce-in 1.3s;
    transition: all 1.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>
