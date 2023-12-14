<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { useGuessList } from '@/composables/index'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  //console.log(res);
  bannerList.value = res.result
}

//获取前台分类数据
const CategoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  CategoryList.value = res.result
}

//获取热门分类数据
const HotList = ref<HotItem[]>([])
const getHomeHotItemData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}

//获取猜你喜欢组件实例
const { guessRef, onScrolltolower } = useGuessList()
//自定义下拉刷新被触发
//页面是否加载中标记
const isLoading = ref(false)
//页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotItemData()])
  isLoading.value = false
})
//当前下拉刷新状态
const isTriggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  isTriggered.value = true
  //await getHomeBannerData()
  //await getHomeCategoryData()
  // await getHomeHotItemData()
  //  重置猜你喜欢数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotItemData(),
    guessRef.value?.getMore(),
  ])
  //关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!--自定义轮播图-->
      <XtxSwiper :list="bannerList" />
      <!--分类面板-->
      <CategoryPanel :list="CategoryList" />
      <!--热门推荐-->
      <HotPanel :list="HotList" />
      <!--猜你喜欢-->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
