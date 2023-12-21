import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
import { isNoAuth, isSuccess } from './utils'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()

    if (userStore.loginDto.token) {
      config.headers.Authorization = `Bearer ${userStore.loginDto.token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse<API.ResultData>) => {
    const userStore = useUserStore()
    const res = response.data
    if (isSuccess(res.code)) {
      return response
    }

    if (isNoAuth(res.code)) {
      userStore.LOGOUT_EFFECT()
      router.replace('/401')
    }

    return Promise.reject(res.message)
  },
  (err) => {
    return Promise.reject(err)
  },
)

export const http = async <T = any>(config: AxiosRequestConfig): Promise<API.ResultData<T>> => {
  const response = await instance(config)
  return response.data
}
