<template>
    <article class="px-6 bg-slate-800 p-3 shadow-xl mt-6 pb-6">
        <header
            class="flex justify-between p-3 pb-6 text-lg font-thin text-slate-50"
        >
            <h3>
                <slot name="header"> Default component header </slot>
            </h3>
            <a
                target="_blank"
                :href="githubUrl"
                class="text-slate-500 text-base hover:text-slate-300"
            >
                [ src file ]
            </a>
        </header>

        <main>
            <section
                v-if="$slots.body"
                class="p-3 font-normal bg-slate-900 text-slate-200"
            >
                <slot name="body">default body</slot>
            </section>

            <fieldset v-if="$slots.fieldset">
                <slot name="fieldset"> </slot>
            </fieldset>

            <form v-if="$slots.form">
                <slot name="form">default form</slot>
            </form>

            <output v-if="$slots.output">
                <LayoutOutput>
                    <slot name="output">default output</slot>
                </LayoutOutput>
            </output>

            <output v-if="$slots.log">
                <LayoutLog>
                    <slot name="log">default output</slot>
                </LayoutLog>
            </output>

            <details
                v-if="$slots.details"
                class="text-slate-400 text-sm mt-6 leading-relaxed italic font-light"
            >
                <summary class="text-slate-500 not-italic cursor-pointer">
                    About this section
                </summary>
                <slot name="details">
                    Default description explaining the component's purpose
                </slot>
                <details v-if="$slots.data">
                    <summary class="text-slate-500 not-italic cursor-pointer">
                        Data used
                    </summary>
                    <LayoutLog>
                        <slot name="data">
                            Default description explaining the component's
                            purpose
                        </slot>
                    </LayoutLog>
                </details>
            </details>
        </main>
    </article>
</template>

<script setup>
import { computed } from 'vue'
import { getGithubUrl } from '@/core/utils/githubUrl'

const props = defineProps({
    sourcePath: {
        type: String,
        default: '' // Add default value
    }
})

const githubUrl = computed(() => {
    if (!props.sourcePath) return '#'
    return getGithubUrl(props.sourcePath)
})
</script>
