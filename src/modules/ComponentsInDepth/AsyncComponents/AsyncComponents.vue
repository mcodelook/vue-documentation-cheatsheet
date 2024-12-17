<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Async components </template>
        <template #fieldset>
            <BaseButton text="Mount" @click.once="toggleComponentMount" />
            <BaseButton
                @click="toggleError"
                :text="`Toggle Error Mode: ${isError ? 'On' : 'Off'}`"
            />
        </template>
        <template #output v-if="isMounted">
            <AsyncComponentChild />
        </template>
    </LayoutBase>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import LoadingComponent from '@/core/components/LoadingComponent.vue'
import ErrorComponent from '@/core/components/ErrorComponent.vue'

const isMounted = ref(false)
const isError = ref(false)

const toggleError = () => {
    isError.value = !isError.value
}

const toggleComponentMount = () => {
    isMounted.value = !isMounted.value
}

const AsyncComponentChild = defineAsyncComponent({
    loader: () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isError.value) {
                    reject(new Error('Failed to load component'))
                } else {
                    resolve(import('./AsyncComponentsChild.vue'))
                }
            }, 3000)
        }),
    loadingComponent: LoadingComponent,
    delay: 100,
    errorComponent: ErrorComponent,
    timeout: 6000,
    onError(error, retry, fail, attempts) {
        if (attempts <= 3) {
            retry()
        } else {
            fail()
        }
    }
})

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
