export default () => {
    const postTweet = (formData:any) => {
        const form = new FormData();
        form.append('text', formData.text);
        formData.mediaFiles.forEach((mediaFile:string, i: string )=> {
            form.append('media_file_' + i, mediaFile)
        })

        return userFetchApi('/api/user/tweets', {
            method: 'POST',
            body: form
        })
    }

    return {
        postTweet
    }
}