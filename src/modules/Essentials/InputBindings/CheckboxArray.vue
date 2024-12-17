<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Checkbox array binding </template>
        <template #fieldset>
            <div v-for="name in selectOptions" :key="name" class="inline">
                <input
                    class="mr-3"
                    type="checkbox"
                    :id="name"
                    :value="name"
                    v-model="selectedValue"
                />
                <label class="mr-6" :for="name">{{ name }}</label>
            </div>
        </template>
        <template #output>
            <p>Checked names: {{ selectedValue }}</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const selectOptions = ref(['Jack', 'John', 'Mike'])

const selectedValue = ref([])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
