<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> V-model to child components </template>
        <template #fieldset>
            <ComponentVModelChild v-model="messageParent" />
        </template>
        <template #output>
            <p>{{ messageParent }}</p>
        </template>
    </LayoutBase>

    <LayoutBase :sourcePath="componentPath">
        <template #header>
            Handling v-model modifiers and default value
        </template>
        <template #fieldset>
            <ComponentVModelArgument v-model:title="messageArgumentModel" />
            <ComponentVModelArgument />
        </template>
        <template #output v-if="messageArgumentModel">
            <p>{{ messageArgumentModel }}</p>
        </template>
    </LayoutBase>

    <LayoutBase :sourcePath="componentPath">
        <template #header> Modifiers for v-model with arguments </template>
        <template #fieldset>
            <ComponentVModelModifier v-model.uppercase="messageToUppercase" />
        </template>
        <template #output v-if="messageToUppercase">
            <p>{{ messageToUppercase }}</p>
        </template>
        <template #details>
            <p>Uses custom modifier to uppercase the text</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

import ComponentVModelChild from './ComponentVModelChild.vue'
import ComponentVModelArgument from './ComponentVModelArgument.vue'
import ComponentVModelModifier from './ComponentVModelModifier.vue'

const messageParent = ref('Message from the parent')
const messageArgumentModel = ref('')
const messageToUppercase = ref('')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
