<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Keep Alive </template>
        <template #fieldset>
            <div class="flex justify-between items-center">
                <p class="inline">Current component:</p>
                <select
                    v-model="componentCurrent"
                    class="bg-slate-900 p-2 border w-1/4 border-indigo-800"
                >
                    <option disabled value="">Please select one</option>
                    <option
                        v-for="option in componentsOptions"
                        :key="option.text"
                        :value="option.component"
                    >
                        {{ option.text }}
                    </option>
                </select>
            </div>
        </template>
        <template #output>
            <KeepAlive :exclude="['KeepAliveCompC']" :max="10">
                <component :is="componentCurrent"></component>
            </KeepAlive>
        </template>
    </LayoutBase>
</template>

<script setup>
import { shallowRef, markRaw } from 'vue'
import KeepAliveCompA from './KeepAliveCompA.vue'
import KeepAliveCompB from './KeepAliveCompB.vue'
import KeepAliveCompC from './KeepAliveCompC.vue'
import KeepAliveCompD from './KeepAliveCompD.vue'

const componentCurrent = shallowRef(markRaw(KeepAliveCompB))

const componentsOptions = shallowRef([
    {
        component: markRaw(KeepAliveCompA),
        text: 'Counter'
    },
    {
        component: markRaw(KeepAliveCompB),
        text: 'Message'
    },
    {
        component: markRaw(KeepAliveCompC),
        text: 'Excluded'
    },
    {
        component: markRaw(KeepAliveCompD),
        text: 'Lifecycle hooks'
    }
])

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
