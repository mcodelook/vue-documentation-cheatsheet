<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Global component</template>
        <template #fieldset>
            <BaseButton
                :text="isDeleteButtonDisabled ? 'Enable' : 'Disable'"
                @click="toggleDeleteButton"
            />
            <BaseButton
                :disabled="isDeleteButtonDisabled"
                text="Delete"
                @click="handleDelete"
            />
        </template>
        <template #details>
            <p>
                This is a global component and can be used anywhere in the
                application.
            </p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'

const isDeleteButtonDisabled = ref(false)

const toggleDeleteButton = () => {
    isDeleteButtonDisabled.value = !isDeleteButtonDisabled.value
}

const handleDelete = () => {
    throw new Error('Delete button clicked - Intentionally thrown error')
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
