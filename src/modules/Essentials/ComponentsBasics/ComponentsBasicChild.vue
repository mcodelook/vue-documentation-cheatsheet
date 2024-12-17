<template>
    <div class="border-slate-700 border-b-2 p-4">
        <div class="flex justify-between items-center space-x-4">
            <p>{{ itemName }}</p>
            <ComponentsBasicChildEmit
                :amount
                @increment="handleIncrement"
                @decrement="handleDecrement"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentsBasicChildEmit from './ComponentsBasicChildEmit.vue'

const props = defineProps({
    initialAmount: {
        type: Number,
        default: 0
    },
    itemName: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['updateCount'])

// Local state that starts with the initial count
const amount = ref(props.initialAmount)

// Handler functions that emit updates to parent
const handleIncrement = () => {
    amount.value++
    emit('updateCount', amount.value)
}

const handleDecrement = () => {
    amount.value--
    emit('updateCount', amount.value)
}
</script>
