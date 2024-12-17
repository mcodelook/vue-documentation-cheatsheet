<template>
    <LayoutDocument>
        <template #header> Template Syntax </template>
        <template #body>
            <GlobalComponent />
            <TextInterpolation />
            <MultipleAttributes />
            <CallingFunctions />
            <DynamicArguments />
        </template>
    </LayoutDocument>
</template>

<script setup>
import TextInterpolation from './BindingInterpolation.vue'
import MultipleAttributes from './MultipleAttributes.vue'
import CallingFunctions from './CallingFunctions.vue'
import DynamicArguments from './DynamicArguments.vue'
</script>
