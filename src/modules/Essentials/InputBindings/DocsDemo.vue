<
<template>
    <LayoutDocument>
        <template #header> Input bindings </template>
        <template #body>
            <BindingsVModel />
            <MultiLineInput />
            <CheckboxBinding />
            <CheckboxArray />
            <RadioBindings />
            <SelectBinding />
            <SelectMultiBinding />
            <SelectDynamicBinding />
            <CheckboxDynamicBinding />
            <LazyBinding />
        </template>
    </LayoutDocument>
</template>

<script setup>
import BindingsVModel from './BindingsVModel.vue'
import MultiLineInput from './MultiLineInput.vue'
import CheckboxBinding from './CheckboxBinding.vue'
import CheckboxArray from './CheckboxArray.vue'
import RadioBindings from './RadioBindings.vue'
import SelectBinding from './SelectBinding.vue'
import SelectMultiBinding from './SelectMultiBinding.vue'
import SelectDynamicBinding from './SelectDynamicBinding.vue'
import CheckboxDynamicBinding from './CheckboxDynamicBinding.vue'
import LazyBinding from './LazyBinding.vue'
</script>
