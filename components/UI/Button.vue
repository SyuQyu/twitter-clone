<script setup>

const emits = defineEmits(['onClick'])

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: 'md'
    },
    liquids: {
        type: Boolean,
        default: false
    }
})

const paddingClases = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'px-2 py-2'
        case 'lg':
            return 'px-4 py-2'
        default:
            return 'px-3 py-2'
    }
})

const textFontSize = computed(() => {
    switch (props.size) {
        case 'lg':
            return 'text-md'
        default:
            return 'text-sm'
    }
})

const defaultWidth = computed(() => {
    switch (props.size) {
        default:
            return 'w-min'
    }
})

const buttonClass = computed(() => `${paddingClases.value} ${props.liquids ? 'w-full' : defaultWidth.value}`)

function handleClick(evt) {
    emits('onClick', evt)
}

</script>
<template>
    <button
        class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
        :class="buttonClass" :disabled="props.disabled" @click="handleClick">
        <span :class="textFontSize">
            <slot />
        </span>
    </button>
</template>