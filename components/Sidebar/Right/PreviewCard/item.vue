<script setup>
    const { twitterBorderColor, defaultTransition } = useTailwindConfig()
    const wrapperClases = computed(() => `${twitterBorderColor} ${defaultTransition}`)
</script>
<template>
    <div class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 boer-b" :class="wrapperClases">
        <slot></slot>
    </div>
</template>