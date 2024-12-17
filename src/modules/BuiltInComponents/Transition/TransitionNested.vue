<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Transition nested </template>
        <template #fieldset>
            <BaseButton @click="isVisible = !isVisible" text="Toggle" />
        </template>
        <template #output>
            <Transition :duration="550" name="nested">
                <div v-if="isVisible" class="outer p-12 bg-slate-950">
                    <LayoutOutput class="inner"> Hello </LayoutOutput>
                </div>
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
.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
    opacity: 0.001;
}
</style>
