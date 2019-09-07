<template>
	<div>
		<router-link tag="div" to="/" class="header-abd" v-show="showAbs">
			<div class="iconfont header-abd-back">&#xe624;</div>
		</router-link>
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/">
			<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "DetailHeader",
		data () {
			return {
				showAbs : true,
				opacityStyle : {
					opacity : 0
				}
			}
		},
		methods : {
			handlescroll () {
				const top = document.documentElement.scrollTop
				if (top>60){
					let opacity = top /140
					// 如果超过了就得1
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {opacity}
					this.showAbs= false
				}
				else {
					this.showAbs= true
				}
			}
		},
		// 和keepalive一起使用重新进入会调用钩子 页面展示会执行
		activated (){
			window.addEventListener("scroll",this.handlescroll)
			// 这个事件是全局事件在主页也会出发scroll
		},
		// 页面隐藏替换其他页面会执行
		deactivated (){
			window.removeEventListener("scroll",this.handlescroll)
		}
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.header-abd
		position : absolute
		left : 10px
		top : 10px
		width : 40px
		height : 40px
		line-height : 40px
		border-radius : 20px
		text-align : center
		background : rgba(0,0,0,0.8)
		.header-abd-back
			color : #fff
			font-size : 20px
	.header-fixed
		position : fixed
		top : 0
		left : 0 
		right : 0 
		height : 43px
		line-height : 43px
		text-align : center
		color : #fff
		background : #00bcd4
		font-size : 16px
		z-index : 2
		.header-fixed-back
			position : absolute
			top : 0 
			left : 0
			width : 32px
			text-align : center
			font-size : 20px
			color : #fff
</style>