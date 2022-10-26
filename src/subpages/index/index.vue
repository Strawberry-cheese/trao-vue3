<template>
  <!-- <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view> -->

  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000" width="280" height="150">
    <nut-swiper-item v-for="item in list" :key="item" >
      <img :src="item" alt=""/>
    </nut-swiper-item>
  </nut-swiper>

  <nut-tabbar @tab-switch="tabSwitch" bottom>
    <nut-tabbar-item tab-title="首页" icon="home" num="11"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category" :dot="true"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart" num="110"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
import {reactive, toRefs, onMounted} from 'vue';

export default {
  name: 'Index',
  components: {},
  setup() {
    function tabSwitch(item, index) {
      console.log(item, index);
    }

    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
      page: 2,
      list: [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
    });
    onMounted(() => {
      setTimeout(() => {
        state.list.splice(1, 1);
      }, 3000);
    });
    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      tabSwitch,
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>
