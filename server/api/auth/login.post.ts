import { sendError } from 'h3'
import { getUserByUsername } from '~~/server/db/users'
import { userTransformer } from '~~/server/transformer/user'
import { generateToken, sendRefreshToken } from '~~/server/utils/jwt'
import { createRefreshToken } from '~~/server/db/refreshTokens'
import bcrypt from "bcrypt"

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    const { username, password } = body

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Ivalid params'
        }))
    }

    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    const { accessToken, refreshToken } = generateToken(user)

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken, user: userTransformer(user)
    }

}) 