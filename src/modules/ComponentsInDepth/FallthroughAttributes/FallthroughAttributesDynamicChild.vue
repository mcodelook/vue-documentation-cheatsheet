<template>
    <div>
        <BaseButton
            class="mb-3"
            @click="toggleInheritance"
            text="Click Me"
            v-bind="inheritedAttrs"
        />
        <p>Inheritance State: {{ isInherited }}</p>
        <p>Current Attrs: {{ inheritedAttrs }}</p>
    </div>
</template>

<script setup>
import { ref, computed, useAttrs } from 'vue'

defineOptions({
    inheritAttrs: false
})

const isInherited = ref(true)
const attrs = useAttrs()

const inheritedAttrs = computed(() =>
    // Only return attrs if inheritance is enabled
    isInherited.value ? attrs : {}
)

const toggleInheritance = () => {
    isInherited.value = !isInherited.value
}
</script>
