import {prisma} from "."

export const createTweets = (tweetData:any) => {
    return prisma.tweet.create({
        data: tweetData
    })
}