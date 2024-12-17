<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Radio binding </template>
        <template #fieldset>
            <div v-for="item in selectOptions" :key="item" class="inline">
                <input
                    class="mr-3"
                    type="radio"
                    :id="item"
                    :value="item"
                    v-model="selectedValue"
                />
                <label class="mr-6" :for="item">{{ item }}</label>
            </div>
        </template>
        <template #output>
            <p>Selected value: {{ selectedValue }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const selectOptions = ref(['One', 'Two', 'Three'])

const selectedValue = ref('One')

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
