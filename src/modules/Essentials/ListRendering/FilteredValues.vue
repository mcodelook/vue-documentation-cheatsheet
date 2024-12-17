<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>Filtered Numbers</template>
        <template #output>
            <span v-for="num in filteredEvenNumbers" :key="num"
                >{{ num }},
            </span>

            <div v-for="set in numberSets" :key="set[0]">
                Set: {{ set }} - Result:
                <span
                    class="italic"
                    v-for="num in filterEvenNumbers(set)"
                    :key="num"
                    >{{ num }},
                </span>
            </div>
        </template>
        <template #details>
            <p>
                Filtering even numbers from an array using computed property and
                method.
            </p>
        </template>
        <template #data>
            <p>
                {{ numbers }}
            </p>
            <p>
                {{ numberSets }}
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])
const filteredEvenNumbers = computed(() =>
    numbers.value.filter(num => num % 2 === 0)
)
const filterEvenNumbers = numbers => {
    return numbers.filter(num => num % 2 === 0)
}

const numberSets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
