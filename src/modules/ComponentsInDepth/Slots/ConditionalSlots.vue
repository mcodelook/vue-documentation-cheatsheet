<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Conditional Slots, dynamic </template>
        <template #fieldset>
            <BaseButton
                @click="handleClick"
                text="Toggle default slot and dynamic slot"
            />
        </template>
        <template #output>
            <ConditionalSlotsChild>
                <template #header>
                    <p>This is the header</p>
                </template>

                <template v-if="isDefaultVisible" #default>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum sint quos eveniet, minima tempore dolores!
                    </p>
                </template>

                <template #footer>
                    <em>This is the footer</em>
                </template>

                <template #[dynamicSlotName]> Dynamic slot </template>
            </ConditionalSlotsChild>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'
import ConditionalSlotsChild from './ConditionalSlotsChild.vue'

const isDefaultVisible = ref(true)

const handleClick = () => {
    isDefaultVisible.value = !isDefaultVisible.value
}

const dynamicSlotName = computed(() =>
    isDefaultVisible.value ? '' : 'dynamic'
)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
