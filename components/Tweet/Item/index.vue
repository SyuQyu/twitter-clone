<script setup>
const { twitterBorderColor } = useTailwindConfig()
const props = defineProps({
    tweets: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div>
        <TweetItemHeader :tweet="props.tweets"/>
        <div class="ml-16">
            <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
                {{ props.tweets.text }}
            </p>
            <div v-for="img in props.tweets.mediaFiles" :key="img.id" class="flex my-3 mr-2 border-2 rounded-2xl"
                :class="twitterBorderColor">
                <img :src="img.url" class="w-full rounded-2xl"/>
            </div>
        </div>
    </div>
</template>
