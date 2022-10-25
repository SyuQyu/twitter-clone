<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColor">
            {{ props.title }}
        </h1>
        <slot>

        </slot>
        <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:bg-dim-300 dark:hover:bg-dim-200"
            :class="defaultTransition">
            Show More
        </div>
    </div>
</template>