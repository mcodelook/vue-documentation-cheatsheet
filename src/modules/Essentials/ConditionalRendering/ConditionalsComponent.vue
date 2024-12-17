<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>Conditionals if, else, else-if, show</template>
        <template #fieldset>
            <BaseButton @click="cycleThroughTypes" text="Cycle through types" />
        </template>
        <template #output>
            <p v-if="typeCurrent === 'A'">A</p>
            <p v-else-if="typeCurrent === 'B'">B</p>
            <p v-else-if="typeCurrent === 'C'">C</p>
            <p v-else>Not A/B/C</p>
            <p v-show="typeCurrent === 'D'">V show</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const types = ['A', 'B', 'C', 'D']
const typeCurrent = ref('A')

const cycleThroughTypes = () => {
    const currentIndex = types.indexOf(typeCurrent.value)
    const nextIndex = (currentIndex + 1) % types.length
    typeCurrent.value = types[nextIndex]
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
