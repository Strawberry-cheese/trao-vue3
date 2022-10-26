<template>
  <nut-noticebar
      text="迎面走來的你讓我如此蠢蠢欲動
這種感覺我從未有
Cause I got a crush on you who you
你是我的我是你的誰
再多一眼看一眼就會爆炸
https://lyricstranslate.com"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
  ></nut-noticebar>
  <nut-swiper :init-page="page" :pagination-visible="true" height="200" pagination-color="#426543" auto-play="3000">
    <nut-swiper-item v-for="item in list" :key="item">
      <img :src="item" alt="" style="width: 100%;"/>
    </nut-swiper-item>
  </nut-swiper>
  <div class="components" style="border-radius: 30px 30px 0 0">
    <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字" style="padding: 20px 20px 20px 20px;"></nut-cell>
  </div>

  <!--  <nut-tabbar unactive-color="#7d7e80" bottom  v-model:visible="index" active-color="#1989fa"  @tab-switch="tabSwitch" style="padding:20px 0px 20px 0px">-->
  <!--    <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>-->
  <!--    <nut-tabbar-item tab-title="分类" icon="category" @click="goCss"></nut-tabbar-item>-->
  <!--    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>-->
  <!--  </nut-tabbar>-->


</template>

<script lang="ts">
import {reactive, toRefs, onMounted} from 'vue';
import Taro from "@tarojs/taro";

export default {
  setup() {
    const state = reactive({
      page: 2,
      index: 0,
      screenHeight: '',
      screenWidth: '',
      statusBarHeight: '',
      NAVIGATOR_HEIGHT: 44,
      TAB_BAR_HEIGHT: 50,

      list: [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
    });
    onMounted(() => {
      Taro.getAccountInfoSync()
      setTimeout(() => {
        state.list.splice(1, 1);
      }, 3000);
    });
    return {...toRefs(state)};
  },

  created() {
    Taro.getSystemInfo({
      success(res) {
        this.screenHeight = res.screenHeight;
        this.screenWidth = res.screenWidth;
        this.statusBarHeight = res.statusBarHeight;
        console.log(res.statusBarHeight);
      }
    })
  },


  methods: {
    tabSwitch(item, index) {
      this.index = index
      console.log(item, index);
    },
    goCss() {
      Taro.navigateTo({url: '/pages/commodity/commodity'})
    },
  },
};
</script>
<style lang="scss" scoped>

.nut-swiper-item {

  img {
    width: 100%;
    height: 100%;
  }
}
</style>

