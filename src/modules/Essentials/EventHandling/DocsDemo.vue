<template>
    <LayoutDocument>
        <template #header> Event Handling </template>
        <template #body>
            <MethodsInlineHandlers />
            <EventModifiers />
            <PropagationEvent />
            <SingleClick />
            <PassiveScroll />
            <ModifiersLog />
            <KeyModifiers />
        </template>
    </LayoutDocument>
</template>

<script setup>
import { ref, provide } from 'vue'
import MethodsInlineHandlers from './MethodsInlineHandlers.vue'
import EventModifiers from './EventModifiers.vue'
import PropagationEvent from './PropagationEvent.vue'
import SingleClick from './SingleClick.vue'
import PassiveScroll from './PassiveScroll.vue'
import KeyModifiers from './KeyModifiers.vue'
import ModifiersLog from './ModifiersLog.vue'

const eventLog = ref([])

const addEventLog = message => {
    eventLog.value.unshift(message)
}

provide('addEventLog', addEventLog)
provide('eventLog', eventLog)
</script>
