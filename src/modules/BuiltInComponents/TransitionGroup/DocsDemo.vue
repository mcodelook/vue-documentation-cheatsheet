<template>
    <LayoutDocument>
        <template #header> Transition Group </template>
        <template #body>
            <TransitionGroupComp />
            <TransitionStaggeringList />
        </template>
    </LayoutDocument>
</template>

<script setup>
import TransitionGroupComp from './TransitionGroupComp.vue'
import TransitionStaggeringList from './TransitionStaggeringList.vue'
</script>
