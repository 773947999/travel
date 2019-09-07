<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
		<!-- 为了解决mouted在渲染完成后数据过来显示最后一页这里添加 v-if="list.length可以用计算属性更完整" -->
	    <!-- slides -->
	    	<swiper-slide v-for="(item,index) in imgs" :key="index">
			<img class="gallary-img" :src="item">
	    	</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    左右箭头 -->
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div>滚动条 -->
	  		</swiper>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "CommonGallary" ,
		props : {
			imgs : {
				type : Array,
				default () {
					return []
				}
			}
		},
		data () {
			return {
				swiperOption : {
					pagination: {el: '.swiper-pagination',
					type: 'fraction',
				},
				observer:true,
    			observeParents:true,
				},
				
			}
		},
		methods : {
			handleGallaryClick () {
				this.$emit('close')
			}
		},
	};
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow : inherit
	.container
		display : flex
		flex-direction : column
		justify-content : center
		z-index : 99
		position : fixed
		left : 0 
		right : 0
		top : 0
		bottom : 0
		background : #000
		.wrapper
			width : 100%
			height : 0 
			padding-bottom : 50%
			background :#fff
			.gallary-img
				width : 100%
			.swiper-pagination
				color :#fff
				bottom : -50px
			
</style>