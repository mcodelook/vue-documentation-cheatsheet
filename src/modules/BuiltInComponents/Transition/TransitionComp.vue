<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Transition </template>
        <template #fieldset>
            <BaseButton
                @click="isVisible = !isVisible"
                text="Toggle component"
            />
        </template>
        <template #output>
            <Transition>
                <p class="text-center" v-if="isVisible">Hello</p>
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
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
