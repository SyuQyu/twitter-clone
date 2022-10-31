import { sendError } from 'h3'
import { getRefreshTokenByToken } from '~~/server/db/refreshTokens';
import { getUserById } from '~~/server/db/users';
import { decodeRefreshToken, generateToken } from '~~/server/utils/jwt';

export default defineEventHandler(async (event) => {
    interface JwtPayload {
        userId: string
    }

    const cookies = useCookies(event);

    const refreshToken = cookies.refresh_token
    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const rToken = await getRefreshTokenByToken(refreshToken)

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken) as JwtPayload

    try {
        const user = await getUserById(token.userId)

        const {accessToken} = generateToken(user)
        return {
            access_token: accessToken
        }
    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }
})