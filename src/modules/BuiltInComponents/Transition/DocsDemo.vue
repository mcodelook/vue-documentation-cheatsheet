<template>
    <LayoutDocument>
        <template #header> Transition </template>
        <template #body>
            <TransitionComp />
            <ToggleSlide />
            <TransitionNested />
            <TransitionCycle />
            <TransitionKeyAttribute />
        </template>
    </LayoutDocument>
</template>

<script setup>
import TransitionComp from './TransitionComp.vue'
import ToggleSlide from './TransitionSlide.vue'
import TransitionNested from './TransitionNested.vue'
import TransitionCycle from './TransitionCycle.vue'
import TransitionKeyAttribute from './TransitionKeyAttribute.vue'
</script>
