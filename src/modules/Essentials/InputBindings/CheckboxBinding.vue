<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Toggle Switch Demo </template>
        <template #fieldset>
            <div class="inline">
                <input
                    class="mr-3"
                    type="checkbox"
                    id="mainToggle"
                    v-model="isEnabled"
                />
                <label class="mr-6" for="mainToggle">{{ isEnabled }}</label>

                <input
                    class="mr-3"
                    type="checkbox"
                    id="oppositeToggle"
                    :checked="!isEnabled"
                    @change="toggleState"
                />
                <label class="mr-6" for="oppositeToggle">invert</label>
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const isEnabled = ref(true)

const toggleState = () => {
    isEnabled.value = !isEnabled.value
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
