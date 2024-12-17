<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Event arguments </template>
        <template #fieldset>
            <EventArgumentsChild
                @hover="handleHover"
                @increment="increment"
                @click.once="handleOneTimeClick"
            />
        </template>
        <template #output>
            <p>{{ messageHover }}</p>
            <p>Counter: {{ count }}</p>
            <p>{{ messageOnceClicked }}</p>
        </template>
    </LayoutBase>
</template>
<script setup>
import { ref, computed } from 'vue'
import EventArgumentsChild from './EventArgumentsChild.vue'
import { useCounter } from '@/core/composables/useCounter'
const { count, increment } = useCounter()

const messageOnceClicked = ref('Not clicked yet')
const isHovered = ref(false)
const messageHover = computed(
    () => `Hover state: ${isHovered.value ? 'Hovered' : 'Not hovered'}`
)

const handleHover = value => {
    isHovered.value = value
}

const handleOneTimeClick = () => {
    messageOnceClicked.value += ' - Clicked once'
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
