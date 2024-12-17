<template>
    <p :class="{ 'text-red-600': !isHighlighted }">
        Message: {{ messageText }}
    </p>
    <p>Number: {{ numericValue }}</p>
    <p>Default Text: {{ defaultText }}</p>
    <p>Number + 11 (Ref): {{ numberPlusElevenRef }}</p>
    <p>Number + 11 (Computed): {{ numberPlusElevenComputed }}</p>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    messageText: {
        type: String,
        required: true
    },
    numericValue: {
        type: Number,
        default: 0
    },
    defaultText: {
        type: String,
        default: 'Default Text'
    },
    isHighlighted: {
        type: Boolean,
        default: false
    }
})

const numberPlusElevenRef = ref(props.numericValue + 11)
const numberPlusElevenComputed = computed(() => props.numericValue + 11)
</script>
