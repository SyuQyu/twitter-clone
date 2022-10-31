import { prisma } from "."

export const createRefreshToken = (token:any) => {
    return prisma.refreshToken.create({
        data: token
    })
}

export const getRefreshTokenByToken = (token:any) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}