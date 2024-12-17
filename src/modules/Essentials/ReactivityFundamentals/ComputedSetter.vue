<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Basic ref and counter with Maximum Value </template>
        <template #fieldset>
            <BaseButton :text="`Increment: ${count}`" @click="increment" />
            <BaseButton text="Set to 10" @click="setLimitedCounter" />
        </template>
        <template #output>
            <p>Limited count: {{ limitedCounter }}</p>
            <p v-if="logSetTriggered">{{ logSetTriggered }}</p>
        </template>
        <template #details>
            <p>
                The counter has a maximum value of 3. Applying setter on
                computed value.
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounter } from '@/core/composables/useCounter'
const { count, increment } = useCounter()

const logSetTriggered = ref('')
const maximumValue = 3

const limitedCounter = computed({
    get(previousValue) {
        if (count.value <= maximumValue) {
            return count.value
        }
        return previousValue
    },
    set(maxValue) {
        count.value = 10
        logSetTriggered.value = 'Counter value set to ' + maxValue
    }
})

const setLimitedCounter = () => {
    limitedCounter.value = 10
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
