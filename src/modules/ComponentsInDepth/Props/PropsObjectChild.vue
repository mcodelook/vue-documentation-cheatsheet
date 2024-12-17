<template>
    <p>ID: {{ item.id }} - Name: {{ item.name }} - Amount: {{ item.amount }}</p>
</template>
<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
        validator: value => {
            return (
                Object.hasOwn(value, 'id') &&
                Object.hasOwn(value, 'name') &&
                Object.hasOwn(value, 'amount')
            )
        }
    }
})
</script>
