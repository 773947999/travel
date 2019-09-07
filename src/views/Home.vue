<template>
  <div class="home">
    <!-- <HomeHeader :city="city"></HomeHeader>store公共传数据 -->
    <HomeHeader ></HomeHeader>
    <HomeSwiper :List="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :List="recommendList"></HomeRecommend>
    <HomeWeekend :List="weekendList"></HomeWeekend>
   
  </div>
</template>

<script>
// @ is an alias to /src

import HomeHeader from "./zujian/Header.vue";
import HomeSwiper from "./zujian/swiper.vue";
import HomeIcons from "./zujian/Icons.vue";
import HomeRecommend from "./zujian/Recommend.vue";
import HomeWeekend from "./zujian/weekend.vue";
import axios from "axios";
import { mapState } from 'vuex' ;
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city :"",前端存储不用ajax传入
      lastCity : '' ,
      swiperList : [],
      iconList : [],
      recommendList : [],
      weekendList : [],
    }
    // swiper mounted 是在渲染完成才引进数据所以引入的时候是慢的会自动跳到后几页
  },
  // 获取ajax的数据 请求一个url具体地点数据 返回then200返回参数
  computed : {
    ...mapState (['city'])
  },
  methods : {
    getHomeinfo () {
      axios.get('indexs.json?city=' + this.city)
      .then(this.getHomeinfosucc)
    },
    getHomeinfosucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  // 挂在好后ajax请求 获取数据
  mounted () {
    this.lastCity = this.city
    this.getHomeinfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeinfo()
    }
    // 缓存后每次刷新也会执行 mounted不会执行在keep-live后
  }
};
</script>
