<template>
    <LayoutDocument>
        <template #header> Watchers </template>
        <template #body>
            <BasicExample />
            <WatchSourceTypes />
            <WatchArrayMultipleSource />
            <DeepWatchers />
            <WatcherEffect />
            <WatcherCleanup />
            <PostWatcher />
        </template>
    </LayoutDocument>
</template>

<script setup>
import BasicExample from './BasicExample.vue'
import WatchSourceTypes from './WatchSourceTypes.vue'
import WatchArrayMultipleSource from './WatchArrayMultipleSource.vue'
import DeepWatchers from './DeepWatchers.vue'
import WatcherEffect from './WatcherEffect.vue'
import WatcherCleanup from './WatcherCleanup.vue'
import PostWatcher from './PostWatcher.vue'
</script>
