import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt.js"
import { sendError } from "h3"
import { getUserById } from "../db/users"

export default defineEventHandler(async (event) => {
    interface JwtPayload {
        userId: string
    }

    const endpoints = [
        '/api/auth/user'
    ]

    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        const pattern = new UrlPattern(endopoint)

        return pattern.match(event.req.url)
    })

    if (!isHandledByThisMiddleware) {
        return
    }

    const token = event.req.headers['authorization']?.split(' ')[1]
    // console.log(token, "data token")
    const decoded = decodeAccessToken(token) as JwtPayload

    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }


    try {
        const userId = decoded.userId 

        const user = await getUserById(userId)

        event.context.auth = { user }
    } catch (error) {
        return
    }

})