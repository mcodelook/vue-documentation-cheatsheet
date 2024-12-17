<template>
    <input
        class="mr-3 disabled:bg-slate-400 rounded-md whitespace-pre-line p-2 italic bg-slate-950 border-2 monospace border-indigo-700 text-slate-300 shadow-inner shadow-black/25"
        ref="inputText"
    />
    <BaseButton text="Make List Italic" @click="makeListItalic" />
    <ul>
        <li v-for="item in items" :key="item.id" ref="listItemRefs">
            {{ item.text }} - {{ item.id }}
        </li>
    </ul>
</template>

<script setup>
import { ref, useTemplateRef, onMounted } from 'vue'

const inputText = useTemplateRef('inputText')
const items = ref([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
])
const listItemRefs = useTemplateRef('listItemRefs')

const makeListItalic = () => {
    listItemRefs.value.forEach(listItemElement => {
        listItemElement.style.fontStyle = 'italic'
    })
}

onMounted(() => {
    inputText.value.focus()
    inputText.value.value = 'Hello, World!'

    listItemRefs.value.forEach((listItemElement, index) => {
        items.value[index].text =
            `Thing ${index + 1} - ${inputText.value.value}`
    })
})
</script>
