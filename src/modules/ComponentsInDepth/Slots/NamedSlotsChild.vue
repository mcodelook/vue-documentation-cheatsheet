<template>
    <header class="text-xl border-b-2 p-2 border-slate-700">
        <slot name="header"></slot>
    </header>

    <body class="font-thin text-base p-2">
        <slot></slot>
    </body>
    <footer class="font-thin text-base p-2 text-slate-600">
        <slot name="footer"></slot>
    </footer>
</template>
