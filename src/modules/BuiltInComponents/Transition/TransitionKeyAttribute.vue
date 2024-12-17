<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Transitions with the Key Attribute </template>
        <template #output>
            <div class="h-9 flex justify-center items-center">
                <Transition>
                    <p :key="count" class="block">{{ count }}</p>
                </Transition>
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

setInterval(() => {
    count.value++
}, 1000)
// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
    position: absolute;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
