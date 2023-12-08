import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'
import type { HotResult } from '@/types/hot.d'
type HotParams = PageParams & { subType?: string }
/**
 * 通用热门类型推荐
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
