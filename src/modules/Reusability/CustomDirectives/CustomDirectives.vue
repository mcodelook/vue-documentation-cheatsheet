<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Custom directives </template>
        <template #output>
            <p v-highlight>Custom directivly highlighted</p>
            <p v-highlightglobal>Global directivly highlighted</p>
            <div>
                <p
                    v-tooltip="{
                        content: 'Tooltip text'
                    }"
                    class="cursor-pointer"
                >
                    Hover this text
                </p>
            </div>
        </template>
    </LayoutBase>
</template>

<script setup>
import { tooltipDirective as vTooltip } from '@/modules/Directives/tooltip-directive.js'

const vHighlight = {
    mounted: el => {
        el.classList.add('bg-yellow-800', 'text-black')
    }
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
