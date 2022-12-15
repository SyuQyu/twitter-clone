export const mediaFilesTransformer = (mediaFile:any) => {
    return {
        id: mediaFile.id,
        url: mediaFile.url,
    }
}