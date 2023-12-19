import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

//GET /member/profile
//请求参数
//获取个人信息

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

//修改个人信息
//PUT /member/profile
// @param data 请求体参数
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
