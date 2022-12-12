import formidable from "formidable"
import { createMediaFile } from "~~/server/db/mediaFiles"
import { createTweets } from "~~/server/db/tweets"
import { tweetTransformer } from "~~/server/transformer/tweet"

export default defineEventHandler(async (event) => {

    const form = formidable({})

    const response: any = await new Promise((resolve, reject) => {
        form.parse(event.req, (err, fields, files) => {
            if (err) {
                reject(err)
            }
            resolve({ fields, files })
        })
    })

    const { fields, files } = response

    const userId = event.context?.auth?.user?.id

    const tweetData = {
        text: fields.text,
        authorId: userId
    }
    const tweet = await createTweets(tweetData)


    const filePromises = Object.keys(files).map(async key => {
        return createMediaFile({
            url: '',
            providerPublicId: 1,
            userId: userId,
            tweetId: tweet.id
        })
    })

    await Promise.all(filePromises)

    return {
        // tweet: tweetTransformer(tweet)
        files
    }
})