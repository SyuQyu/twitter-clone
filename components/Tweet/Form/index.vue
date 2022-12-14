<script setup>

    const loading = ref(false)

    const {postTweet} = useTweets()

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })

    async function handleFormSubmit(data) {
        loading.value = true
        try {
            const res = await postTweet({
                text : data.text,
                mediaFiles: data.mediaFiles
            })
            console.log(res)
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }
</script>
<template>
    <div>
        <div>
            <div v-if="loading" class="flex items-center justify-center p-6">
                <UISpinner />
            </div>
            <div v-else>
                <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit"/>
            </div>
        </div>
    </div>
</template>
