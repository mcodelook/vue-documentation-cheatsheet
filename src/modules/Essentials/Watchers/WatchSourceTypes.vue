<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Multiple source types </template>
        <template #fieldset>
            <div class="mb-3">
                <label class="mr-3" for="x-input" role="label">x:</label>
                <BaseInputField id="x-input" v-model="x" type="number" />
            </div>
            <div>
                <label class="mr-3" for="y-input" role="label">y:</label>
                <BaseInputField id="y-input" v-model="y" type="number" />
            </div>
        </template>
        <template #details>
            <p>
                Watch multiple source: only x, change of sum, change of x and y
                - where y is a getter.
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, watch } from 'vue'

const x = ref(0)
const y = ref(0)

// single ref
//Watch only x
watch(x, newX => {
    alert(`x is ${newX}`)
})

// getter
//watch value change of sum
watch(
    () => Number(x.value) + Number(y.value),
    sum => {
        alert(`sum of x + y is: ${sum}`)
    }
)

// array of multiple sources
//watch both x and y, where y is a getter
watch([x, () => y.value], ([newX, newY]) => {
    alert(`x is ${newX} and y is ${newY}`)
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
