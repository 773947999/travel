<template>
<div class="wrapper">
	<swiper :options="swiperOption">
		<!-- 为了解决mouted在渲染完成后数据过来显示最后一页这里添加 v-if="list.length可以用计算属性更完整" -->
	    <!-- slides -->
	    <swiper-slide v-for="item of List" :key="item.id">
		<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    
	    
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    左右箭头 -->
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>滚动条 -->
	  </swiper>
</div>
</template>
<script type="text/javascript">
	export default {
		name : 'HomeSwiper',
		props : {
			List : Array
		},
		// 传入对象实现页码灰点 循环
		data () {
			return {
    			swiperOption: {	loop : true,
      			pagination: {
        		el: '.swiper-pagination'
      },
      
    },
    swiperSlides: [1, 2, 3, 4, 5]
  }
},
	};
</script>
<style lang="stylus" scoped>
// 穿透出scoped显示
.wrapper >>> .swiper-pagination-bullet
	background : #fff
.wrapper
	overflow : hidden
	width : 100%
	height : 0
	padding-bottom : 30%
// 会自动撑开高比上宽的空间 为了防止后面元素的抖动
	.swiper-img
		width : 100%
</style>