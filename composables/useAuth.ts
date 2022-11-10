import jwt_decode from "jwt-decode"

export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

    const setToken = (newToken: string) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser: object) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const setIsAuthLoading = (value: boolean) => {
        const authLoading = useAuthLoading()
        authLoading.value = value
    }

    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })
                setToken(data.access_token)
                setUser(data.user)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data: any = await $fetch('/api/auth/refresh')
                setToken(data.access_token)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const reRefreshAccessToken = () => {
        const authToken: any = useAuthToken()

        if (!authToken.value) {
            return
        }

        const jwt: any = jwt_decode(authToken.value)
        const newRefreshTime = jwt.exp - 60000
        setTimeout(async () => {
            await refreshToken()
            reRefreshAccessToken()
        }, newRefreshTime);
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data: any = await userFetchApi('/api/auth/user')
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true)
            try {
                await refreshToken()
                await getUser()

                reRefreshAccessToken()

                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                setIsAuthLoading(false)
            }
        })
    }
    return {
        login,
        useAuthUser,
        initAuth,
        useAuthToken,
        useAuthLoading
    }
}