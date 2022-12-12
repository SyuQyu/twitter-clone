// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    // router: {
    //     middleware: ['auth']
    // },
    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESSTOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESHTOKEN_SECRET,

        // Cloudinary
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
    }
})
