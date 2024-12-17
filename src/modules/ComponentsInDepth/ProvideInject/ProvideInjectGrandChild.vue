<template>
    <p>Message to grand child: {{ messageParent }}</p>
    <p>Message from App-level Provide: {{ messageGlobalProvide }}</p>
    <BaseButton
        class="mt-3"
        @click="handleClick"
        :text="`Update Message and try reseting read-only counter ${countReadOnly}`"
    >
    </BaseButton>
</template>

<script setup>
import { inject } from 'vue'

const { messageParent, updateMessage } = inject('messageParent', true)
const messageGlobalProvide = inject('messageGlobalProvide')
const countReadOnly = inject('read-only-count')

const handleClick = () => {
    countReadOnly.value = 0
    updateMessage()
}
</script>
