<template>
    <body class="mx-auto max-w-2xl mt-3">
        <h1 class="text-3xl my-3">Vue Documentation</h1>
        <RouterView />
    </body>

    <footer
        class="text-center font-thin text-slate-400 p-6 hover:text-slate-600"
    >
        <a href="https://github.com/mcodelook">mcodelook 2024</a>
    </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
