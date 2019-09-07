<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">
				{{this.sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe736;</span>
					{{this.bannerImgs.length}}
				</div>
			</div>
		</div>
		<FadeAnimation>
			<CommonGallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
		</FadeAnimation>
	</div>
</template>
<script type="text/javascript">
import CommonGallary from "../../../common/gallary/Gallary.vue";
import FadeAnimation from "../../../common/fade/Fade.vue";
	export default {
		name : "DeatailBanner" ,
		props : {
			sightName : String,
			bannerImg : String,
			bannerImgs : Array,
		},
		data () {
			return {
				showGallary :false ,
				
			}
		},
		methods : {
			handleBannerClick () {
				this.showGallary = true
			},
			handleGallaryClose () {
				this.showGallary = false
			}
		},
		components : {
			CommonGallary,
			FadeAnimation,
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.banner
		position : relative
		overflow : hidden
		height : 0
		padding-bottom : 55%
		.banner-img
			width : 100%
		.banner-info
			display : flex
			position : 	absolute
			left : 0
			right : 0
			bottom : 0
			line-height : 30px
			color : #fff
			background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				font-size : 16px
				padding : 0 10px
				flex : 1
			.banner-number
				margin-top : 7px
				padding : 0 20px
				line-height : 16px
				height : 16px
				border-radius : 10px
				background :  rgba(0, 0, 0, .8)
				font-size : 12px
				.banner-icon
					font-size : 12px
</style>