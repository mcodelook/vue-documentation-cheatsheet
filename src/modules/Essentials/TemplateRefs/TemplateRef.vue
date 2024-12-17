<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Template Ref </template>
        <template #fieldset>
            <BaseButton text="Mount" @click="toggleComponentMount" />
        </template>
        <template v-if="isMounted" #output>
            <TemplateRef />
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import TemplateRef from './TemplateRefChild.vue'

const isMounted = ref(false)
const toggleComponentMount = () => {
    isMounted.value = !isMounted.value
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
