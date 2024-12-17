<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Class and Style Bindings Demo </template>
        <template #fieldset>
            <BaseButton
                :text="`${isHighlighted ? 'Remove' : 'Add'} Highlight`"
                @click="toggleHighlight"
            />
            <BaseButton
                :text="`${isError ? 'Clear' : 'Show'} Error State`"
                @click="toggleErrorState"
            />
        </template>
        <template #output>
            <p
                :class="{
                    'text-red-600': isHighlighted,
                    'font-bold': isHighlighted
                }"
                :style="{ 'font-size': textSize + 'px' }"
            >
                Inline Style Binding
            </p>
            <p :class="elementStyles">Reactive Object Binding</p>
            <p :class="conditionalComputedStyles">Computed Styles</p>
            <p :class="[classTextBlue, classTextBold]">Array binded</p>
            <p :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
                Multiple values
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const textSize = ref(16)
const classTextBlue = 'text-blue-600'
const classTextBold = 'font-bold'

const isHighlighted = ref(false)
const isError = ref(null)

const elementStyles = reactive({
    'text-blue-600': isHighlighted,
    'font-thin': isHighlighted
})

const conditionalComputedStyles = computed(() => ({
    'text-green-600': isHighlighted.value && !isError.value,
    'bg-red-600': isError.value
}))

const toggleHighlight = () => {
    isHighlighted.value = !isHighlighted.value
    textSize.value = 14
}

const toggleErrorState = () => {
    isError.value = !isError.value
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
