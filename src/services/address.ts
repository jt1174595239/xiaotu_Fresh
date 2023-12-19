import { http } from '@/utils/http'
import type { AddressItem, AddressParams } from '@/types/addrerss'
// 添加收货地址
//POST /member/address
/**
 *
 * @param data
 * @returns
 */
export const postMmeberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

//获取收货地址列表

//GET /member/address
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

// 获取收货地址详情
//GET /member/address/{id}
/**
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

//
//
/**
 * 修改收货地址
 * PUT /memebr/address/{id}
 * @param id
 * @param data
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 *
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
