<template>
	<div class="header">
		城市选择
		<router-link to="/">
		<div class="iconfont header-back">&#xe624;</div>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : "CityHeader",
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.header
		position : relative
		overflow : hidden
		height : 43px
		line-height : 43px
		text-align : center
		color : #fff
		background : #00bcd4
		font-size : 16px
		.header-back
			position : absolute
			top : 0 
			left : 0
			width : 32px
			text-align : center
			font-size : 20px
			color : #fff
</style>