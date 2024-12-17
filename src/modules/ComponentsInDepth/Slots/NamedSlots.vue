<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Named slots </template>
        <template #output>
            <NamedSlotsChild>
                <template #header>
                    <p>Awebo head</p>
                </template>

                <template #default>
                    <div>
                        <p>A paragraph for the main content.</p>
                        <p>And another one.</p>
                    </div>
                </template>

                <template #footer>
                    <p>#tag #vue #good</p>
                </template>
            </NamedSlotsChild>
        </template>
    </LayoutBase>
</template>

<script setup>
import NamedSlotsChild from './NamedSlotsChild.vue'

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
