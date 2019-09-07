<template>
	<div>
	<div class="title">周末去哪儿</div>
	<ul>
		<li class="item" v-for="item of List" :key="item.id">
			<div class="item-img-wrapper">
			<img class="item-img" :src="item.imgUrl">
			</div>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"HomeWeekend",
		props : {
			List : Array
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.title
		line-height : 40px
		background : #eee
		text-indent : 10px
	.item-img-wrapper
		overflow : hidden
		height : 0
		padding-bottom : 33.9%
	.item-img
		width : 100%
	.item-info
		padding : 5px
		
		.item-title
			line-height : 27px
			font-size : 16px
		.item-desc
			line-height : 20px
			color : #ccc
			overflow : hidden
			white-space : nowrap
			text-overflow : ellipsis
</style>