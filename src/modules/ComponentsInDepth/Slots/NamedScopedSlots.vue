<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Named scoped slots </template>
        <template #fieldset>
            <BaseButton
                @click="isDefaultVisible = !isDefaultVisible"
                text="Toggle default slot"
            />
        </template>
        <template #output>
            <NamedScopedSlotsChild>
                <template #header="{ sortDirection, toggleSort }">
                    <div v-if="isDefaultVisible">
                        <BaseButton
                            @click="toggleSort"
                            :text="`Sort by name: ${sortDirection === 'asc' ? 'A to Z' : 'Z to A'}`"
                        />
                    </div>
                </template>

                <template #default="{ user, isPremium }">
                    <div
                        v-if="isDefaultVisible"
                        class="text-base bg-slate-900 p-1"
                        :class="{ italic: isPremium }"
                    >
                        <strong>{{ user.name }} - </strong>
                        <span>{{ user.email }}</span>
                        <span v-if="isPremium">⭐ Premium</span>
                    </div>
                </template>

                <template #footer="{ totalUsers }">
                    <div v-if="isDefaultVisible" class="text-xs text-center">
                        Showing {{ totalUsers }} users with details
                    </div>
                </template>
            </NamedScopedSlotsChild>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref } from 'vue'
import NamedScopedSlotsChild from './NamedScopedSlotsChild.vue'

const isDefaultVisible = ref(false)

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
