<template>
    <div
        v-if="isModalVisible"
        class="fixed inset-0 z-[9998] bg-black/50 flex items-center justify-center"
    >
        <div
            class="border border-slate-700 w-[360px] mx-auto p-3 bg-slate-800 rounded shadow-2xl shadow-black"
        >
            <header class="m-3">
                <slot name="header">Message</slot>
            </header>

            <main class="m-3 font-thin text-sm">
                <slot name="body">default body</slot>
            </main>

            <slot name="footer">
                <footer class="flex justify-center">
                    <BaseButton @click="$emit('close')" text="Close" />
                </footer>
            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isModalVisible: Boolean,
    required: true
})
</script>
