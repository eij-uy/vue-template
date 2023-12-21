import type { LoginDto } from './interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const loginDto = ref<LoginDto>({
    loginUser: null,
    token: '',
  })

  const LOGOUT_EFFECT = () => {
    loginDto.value = {
      loginUser: null,
      token: '',
    }
  }

  return {
    loginDto,
    LOGOUT_EFFECT,
  }
})
