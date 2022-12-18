<script setup>
const props = defineProps({
    tweets: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <ul>
            <TweetItem v-for="tweet in props.tweets" :tweets="tweet" :key="tweet.id"/>
        </ul>
    </div>
</template>