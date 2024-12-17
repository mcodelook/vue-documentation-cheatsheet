<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Transition group composition </template>
        <template #body>
            <BaseButton text="Insert at random index" @click="insertItem" />
            <BaseButton text="Reset" @click="resetItems" />
            <BaseButton text="Shuffle" @click="shuffleItems" />

            <TransitionGroup
                tag="ul"
                name="fade"
                class="list-none my-1 box-border"
            >
                <li v-for="item in items" :key="item">
                    <div
                        class="w-full rounded flex justify-between pl-2 h-7 bg-slate-900 border-slate-800 border"
                    >
                        <p>Item of: {{ item }}</p>
                        <button
                            class="mr-3 text-slate-400"
                            @click="removeItem(item)"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            </TransitionGroup>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

const insertItem = () => {
    const i = Math.round(Math.random() * items.value.length)
    items.value.splice(i, 0, id++)
}

const resetItems = () => {
    items.value = getInitialItems()
    id = items.value.length + 1
}

const shuffleItems = () => {
    const array = items.value.slice()
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    items.value = array
}

const removeItem = item => {
    const i = items.value.indexOf(item)
    if (i > -1) {
        items.value.splice(i, 1)
    }
}
// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>

<style scoped>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
    position: absolute;
    flex: 1;
}
</style>
