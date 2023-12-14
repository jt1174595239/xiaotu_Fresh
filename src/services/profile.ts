import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

//GET /member/profile
//请求参数

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
