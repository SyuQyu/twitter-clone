// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss'],
    // router: {
    //     middleware: ['auth']
    // },
    runtimeConfig: {
        jwtAccessSecret:process.env.JWT_ACCESSTOKEN_SECRET,
        jwtRefreshSecret:process.env.JWT_REFRESHTOKEN_SECRET
    }
})
