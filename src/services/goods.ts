import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'
//商品详情

//GET/goods
//规格集合一定要和skus集合下的specs顺序保持一致

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
