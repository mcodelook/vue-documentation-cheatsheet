<template>
    <LayoutDocument>
        <template #header> Events </template>
        <template #body>
            <EventsComponent />
            <EventArguments />
        </template>
    </LayoutDocument>
</template>

<script setup>
import EventsComponent from './EventsComponent.vue'
import EventArguments from './EventArguments.vue'
</script>
