import {prisma} from "."

export const createMediaFile = (mediaFile:any) => {
    return prisma.mediaFile.create({
        data: mediaFile
    })
}