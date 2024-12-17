<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Deep mutation </template>
        <template #fieldset>
            <BaseButton text="Mutate deeply" @click="mutateDeeply" />
        </template>
        <template #output>
            <p>State: {{ state }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({
    count,
    text: 'test',
    numbers: [1, 2, 3]
})

const mutateDeeply = () => {
    state.text = { deep: 'new text' }
    state.numbers.push(4)
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
