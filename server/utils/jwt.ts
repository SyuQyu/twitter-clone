import jwt from 'jsonwebtoken';


const genAccessToken = (user: any) => {
    const config = useRuntimeConfig()

    return jwt.sign({
        userId: user.id
    }, config.jwtAccessSecret, {
        expiresIn: '10m'
    })
}

const genRefreshToken = (user: any) => {
    const config = useRuntimeConfig()

    return jwt.sign({
        userId: user.id
    }, config.jwtRefreshSecret, {
        expiresIn: '4h'
    })
}

export const decodeRefreshToken = (token:any) => {
    const config = useRuntimeConfig()
    try {
        return jwt.verify(token, config.jwtRefreshSecret)
    } catch (error) {
        return null
    }
}

export const decodeAccessToken = (token:any) => {
    const config = useRuntimeConfig()
    try {
        return jwt.verify(token, config.jwtAccessSecret)
    } catch (error) {
        return null
    }
}

export const generateToken = (user: any) => {
    const accessToken = genAccessToken(user)
    const refreshToken = genRefreshToken(user)


    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (event:any, token:any) => {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
} 