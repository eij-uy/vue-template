import { useUserStore } from '@/store/modules/user'
import router from './index'

const WHITE_LIST = ['/login']

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  if (userStore.loginDto.token) {
    if (to.path === '/login') {
      return next('/')
    }
    return next()
  }

  if (WHITE_LIST.includes(to.path)) {
    return next()
  }
  return next('/login')
})
