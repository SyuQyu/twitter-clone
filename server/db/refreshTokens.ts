import { prisma } from "."

export const createRefreshToken = (token:any) => {
    return prisma.refreshToken.create({
        data: token
    })
}