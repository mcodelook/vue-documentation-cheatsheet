<template>
    <header
        v-if="$slots.header"
        class="text-xl border-b-2 p-2 border-slate-700"
    >
        <slot name="header" />
    </header>

    <body v-if="$slots.default" class="font-thin text-base p-2">
        <slot />
    </body>

    <footer v-if="$slots.footer" class="font-thin text-base p-2 text-slate-600">
        <slot name="footer" />
    </footer>

    <div v-if="$slots.dynamic" class="text-xs text-center text-indigo-500">
        <slot name="dynamic" />
    </div>
</template>
