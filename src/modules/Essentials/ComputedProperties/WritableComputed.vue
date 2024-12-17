<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header>
            Writable Computed Example with v-model binding
        </template>
        <template #fieldset>
            <BaseInputField id="fullName" v-model="fullName" type="text" />
            <BaseButton
                :text="'Set Name to Jane Smith'"
                @click="setNameJaneSmith"
            />
        </template>
        <template #output>
            <p>Name: {{ firstName }} {{ lastName }}</p>
        </template>
        <template #details>
            <p>Writable computed - setter</p>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
    get() {
        return `${firstName.value} ${lastName.value}`
    },
    set(newValue) {
        const [first, last] = newValue.split(' ')
        firstName.value = first || ''
        lastName.value = last || ''
    }
})

const setNameJaneSmith = () => {
    fullName.value = 'Jane Smith'
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
