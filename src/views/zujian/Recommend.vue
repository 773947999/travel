<template>
	<div>
	<div class="title">热销推荐</div>
	<ul>
		<router-link tag="li" class="item" v-for="item of List" :key="item.id" :to="'/detail/' + item.id">
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<button class="item-button">查看详情</button>
				</div>
		</router-link>
	</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"HomeRecommend",
		props : {
			List : Array
		},
		
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.title
		margin-top : 10px
		line-height : 40px
		background : #eee
		text-indent : 10px
	.item
		overflow : hidden
		display : flex
		height : 95px
		.item-img
			width : 85px
			height : 85px
			padding : 5px
		.item-info
			flex : 1
			padding : 5px
			.item-title
				line-height : 27px
				font-size : 16px
			.item-desc
				line-height : 20px
				color : #ccc
			.item-button 
				line-height :22px
				margin-top : 8px
				background : #ff9300
				padding : 0 10px
				border-radius : 3px
				color : #fff
</style>