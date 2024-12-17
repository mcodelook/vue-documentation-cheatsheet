<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>
            Reactivity Fundamentals with Ref and Reactive
        </template>
        <template #fieldset>
            <BaseButton text="Increment" @click="increment" />
            <BaseButton text="Reset count" @click="resetCount" />
            <BaseButton text="Reset with new ref" @click="resetRef" />
            <BaseButton
                text="Reset with new reactive"
                @click="resetReactiveCount"
            />
        </template>
        <template #output>
            <p>Count: {{ state.count }}</p>
        </template>
        <template #details>
            <p>
                The increment will increase the count by 2, because of the ref
                inside the reactive state. Shows how different reset methods
                work with ref and reactive.
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)

// Create reactive state with the ref
let state = reactive({
    count: count
})

const increment = () => {
    // Either way works due to ref unwrapping
    state.count++
    // OR
    count.value++
}

const resetRef = () => {
    // Create a new ref and update the reactive state
    const newCount = ref(0)
    state.count = newCount
}

const resetCount = () => {
    // Simply reset the value
    count.value = 0
}

const resetReactiveCount = () => {
    // Create a new reactive state
    state = reactive({
        count: ref(0)
    })
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
