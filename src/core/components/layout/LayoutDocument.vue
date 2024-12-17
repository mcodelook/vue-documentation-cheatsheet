<template>
    <section
        class="bg-slate-900 m-3 mt-6 p-3 shadow-md shadow-black border-t-4 border-indigo-800"
    >
        <header v-once @click="handleToggleVisibility">
            <h2
                class="text-left text-xl font-light p-1 pl-3 pt-3 pb-2 hover:text-slate-300 text-slate-50 cursor-pointer"
            >
                <span class="text-indigo-600 font-bold">#</span>
                <slot name="header"> Default doc section header </slot>
            </h2>
        </header>
        <Transition name="scroll">
            <main v-if="isVisible" class="overflow-hidden">
                <slot name="body">default body</slot>

                <button
                    class="text-indigo-400 hover:text-indigo-500 cursor-pointer pb-3 pt-5 w-full"
                    @click="handleToggleVisibility"
                >
                    [ × ]
                </button>
            </main>
        </Transition>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(false)
const handleToggleVisibility = () => {
    isVisible.value = !isVisible.value
}
</script>

<style scoped>
.scroll-enter-active,
.scroll-leave-active {
    transition: all 0.4s cubic-bezier(0.5, 0.5, 0.5, 1);
    transform-origin: top;
}

.scroll-enter-from,
.scroll-leave-to {
    opacity: 0;
    transform: rotateX(-90deg);
    transform-origin: top;
}

.scroll-enter-to,
.scroll-leave-from {
    opacity: 1;
    transform: rotateX(0deg);
}
</style>
