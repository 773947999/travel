<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item"  v-show="hasNoData">
					<!-- 要避免v-show里的！逻辑 -->
					没找到匹配城市
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default {
		name : "CitySearch",
		props : {
			cities : Object 
		},
		data () {
			return {
				keyword : '',
				list : [],
				timer : null
			}
		},
		computed : {
			hasNoData () {
				return !this.list.length
			}
		},
		watch : {
			keyword () {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					const result =[]
					for (let i in this.cities){
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)		
							}
						})
					}
					this.list = result
				}, 100)
			}
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
			this.scroll = new BScroll(this.$refs.search)
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.search
		height : 36px
		padding : 5px
		background : #00bcd4
		.search-input
			box-sizing : border-box
			width : 100%
			height : 31px
			padding : 0 5px
			line-height : 31px
			text-align : center
			border-radius : 3px
			color : #666
	.search-content
		z-index : 1
		overflow : hidden
		position : absolute
		top : 82px
		left : 0 
		right : 0
		bottom : 0
		background : #eee
		.search-item
			line-height : 31px
			padding-left : 10px
			background : #fff
			border : 1px solid #ccc
			color : #666
</style>