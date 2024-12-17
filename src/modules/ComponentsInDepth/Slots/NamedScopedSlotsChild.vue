<template>
    <div class="m-1 bg-slate-800 p-3 mt-6">
        <slot
            name="header"
            :sort-direction="sortDirection"
            :toggle-sort="toggleSort"
        >
            <BaseButton
                class="bg-indigo-800"
                @click="toggleSort"
                :text="sortButtonText"
            />
        </slot>

        <slot
            v-for="user in sortedUsers"
            :key="user.id"
            :user="user"
            :is-premium="user.type === 'premium'"
        >
            <p>{{ user.name }}</p>
        </slot>

        <slot name="footer" :total-users="users.length">
            Total users: {{ users.length }}
        </slot>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sortDirection = ref('asc')
const sortButtonText = computed(
    () => `Sort by name: ${sortDirection.value === 'asc' ? '↓' : '↑'}`
)

const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', type: 'premium' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com', type: 'basic' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', type: 'premium' }
])

const sortedUsers = computed(() => {
    return [...users.value].sort((a, b) => {
        return sortDirection.value === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    })
})

const toggleSort = () => {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
}
</script>
