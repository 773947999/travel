<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title">
				<span class="item-title-icon">
					<span class="iconfont">&#xe632;</span>
				</span>
				{{item.title}}
			</div>
			<!-- 如果有children就是多级的菜单 -->
			<div v-if="item.children" class="item-children">
				<DetailList :list="item.children"></DetailList>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : 'DetailList',
		props : {
			list : Array
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.item-title 
	  line-height: 0.8rem
	  font-size: 0.32rem
	  padding: 0.1rem
	  border: 0.01rem solid #eee
		.item-title-ticket {
			display: inline-block
		    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
		    margin-right: .1rem
		    background-size: .4rem 3rem
		    }
	.item-children
		padding : 0 .2rem
</style>