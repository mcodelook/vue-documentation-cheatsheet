<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Transition staggering list </template>
        <template #body>
            <BaseInputField placeholder="Filter" v-model="query" />
            <TransitionGroup
                tag="ul"
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
            >
                <li
                    class="rounded flex justify-between my-1 pl-2 h-7 bg-slate-900 border-slate-800 border"
                    v-for="(item, index) in filteredPeople"
                    :key="item.fullname"
                    :data-index="index"
                >
                    {{ item.fullname }}
                </li>
            </TransitionGroup>
        </template>
    </LayoutBase>
</template>

<script setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'

const people = [
    { fullname: 'Bruce Lee' },
    { fullname: 'Jackie Chan' },
    { fullname: 'Chuck Norris' },
    { fullname: 'Jet Li' },
    { fullname: 'Kung Fury' }
]

const query = ref('')

const filteredPeople = computed(() =>
    people.filter(item =>
        item.fullname.toLowerCase().includes(query.value.toLowerCase())
    )
)

const onBeforeEnter = el => {
    el.style.opacity = 0
    el.style.height = 0
}

const onEnter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}

const onLeave = (el, done) => {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
