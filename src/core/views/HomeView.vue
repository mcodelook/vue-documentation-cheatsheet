<template>
    <main>
        <nav>
            <router-link
                v-for="(component, tabName) in tabs"
                :key="tabName"
                :to="{ name: 'tab', params: { tab: tabName.toLowerCase() } }"
                custom
                v-slot="{ isActive, navigate }"
            >
                <button
                    @click="navigate"
                    :class="[
                        'text-xs p-3 mr-1 border-t-indigo-800 border-t-4',
                        isActive ? 'bg-slate-950' : 'bg-slate-800'
                    ]"
                >
                    {{ tabName }}
                </button>
            </router-link>
        </nav>

        <section class="bg-slate-950 p-1 shadow-lg shadow-black min-h-72">
            <Transition name="fade" mode="out-in">
                <div :key="currentTab" class="w-full">
                    <component :is="tabs[currentTab]" />
                </div>
            </Transition>
        </section>
    </main>
</template>

<script setup>
import { ref, defineAsyncComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoadingComponent from '@/core/components/LoadingComponent.vue'
import ErrorComponent from '@/core/components/ErrorComponent.vue'

const route = useRoute()
const router = useRouter()

const asyncComponentOptions = {
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 0,
    timeout: 5000
}

const tabs = {
    Essentials: defineAsyncComponent({
        loader: () => import('@/modules/Essentials/DocDemo.vue'),
        ...asyncComponentOptions
    }),
    ComponentsInDepth: defineAsyncComponent({
        loader: () => import('@/modules/ComponentsInDepth/DocDemo.vue'),
        ...asyncComponentOptions
    }),
    Reusability: defineAsyncComponent({
        loader: () => import('@/modules/Reusability/DocDemo.vue'),
        ...asyncComponentOptions
    }),
    BuiltInComponents: defineAsyncComponent({
        loader: () => import('@/modules/BuiltInComponents/DocDemo.vue'),
        ...asyncComponentOptions
    }),
    Other: defineAsyncComponent({
        loader: () => import('@/modules/Other/DocDemo.vue'),
        ...asyncComponentOptions
    })
}

// Initialize currentTab based on route or default
const currentTab = ref(
    route.params.tab
        ? Object.keys(tabs).find(tab => tab.toLowerCase() === route.params.tab)
        : 'Essentials'
)

// Watch for route changes
watch(
    () => route.params.tab,
    newTab => {
        if (newTab) {
            const matchedTab = Object.keys(tabs).find(
                tab => tab.toLowerCase() === newTab
            )
            currentTab.value = matchedTab
        }
    }
)

// Watch for currentTab changes
watch(currentTab, newTab => {
    if (route.params.tab !== newTab.toLowerCase()) {
        router.push({ name: 'tab', params: { tab: newTab.toLowerCase() } })
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
