import type { UserVo } from '@/api/modules/system/user/interface'

export interface LoginDto {
  loginUser: UserVo | null
  token: string
}
