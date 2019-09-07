<template>
	<div class="list" ref="wrapper">
		<!--ref获取dom 符合betterscroll -->
		<div>
			<div class="area">
				<div class="title">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<!-- 有ref后key就是a到z -->
				<div class="title">{{key}}</div>
				<div class="item-list">
					<div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll' 
import { mapState , mapMutations } from 'vuex'

	export default {
		name : "CityList",
		props : {
			cities : Object,
			hot : Array,
			letter : String
		},
		computed : {
			...mapState({
				currentCity : 'city'
			})
		},
		methods : {
			handleCityClick (city) {
				// this.$store.dispatch('changeCity',city)
				// 派发一个名字叫changecity的动作，City传过去 简单操作可以略过直接commit
				
				// this.$store.commit('changeCity',city)有下面方法后可以直接
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch : {
			letter () {s
				// better-scroll里自带
				if (this.letter) {
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
.list
	overflow : hidden
	position : absolute
	top : 88px
	left : 0
	right : 0 
	bottom : 0
	
	
	.title
		line-height : 27px
		background : #eee
		padding-left : 10px
		border: 0.2px solid #ccc
		color : #666
		font-size : 13px
	.button-list
		overflow : hidden
		padding : 5px 30px 5px 5px
		.button-wrapper
			float : left
			width : 33.33%
			.button
				margin : 5px
				padding : 5px 0
				text-align : center
				border: 1px solid #ccc
				border-radius : 3px
	.item-list
		.item
			line-height : 39px
			color : #666 
			padding-left : 10px
			border : 1px solid #ccc

</style>