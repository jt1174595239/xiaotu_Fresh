import type { PageParams, PageResult } from '@/types/global'
import { type BannerItem, type CategoryItem, type GuessItem, type HotItem } from '@/types/home.d'
import { http } from '@/utils/http'
/**
 *
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页）默认
 *
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

//首页-前台分类-小程序
//GET
// /home/category/multi
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// services/home.ts
/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 * GET
 * /home/goods/guessLike
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
