<template>
    <div>
        <BaseButton
            class="mb-3"
            text="This button looks different"
            v-bind="$attrs"
        />
        <p>{{ $attrs }}</p>
    </div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
</script>
