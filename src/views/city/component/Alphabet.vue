<template>
	<ul class="list">
		<li class="item" v-for="item of letters" :key="item" :ref="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>
		
	</ul>
</template>
<script type="text/javascript">
	export default {
		name : "CityAlphabet",
		props : {
			cities : Object
		},
		computed : {
			letters () {
				const letters = []
				for(let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		data () {
			return {
				touchStatus : false,
				startY : 0,
				// 一直获取影响性能优化
				timer : null
				// 函数截流
			}
		},
		updated () {
			// 页面完成更新和渲染后会执行 页面刚加载是city。vue里cities是空值
			this.startY = this.$refs['A'][0].offsetTop

		},
		methods : {
			// 接受一个e的对象
			handleLetterClick (e) {
				this.$emit('change' , e.target.innerText)
			},
			handleTouchStart () {
				this.touchStatus = true
			},
			handleTouchMove (e) {
				if (this.touchStatus) {
					// const startY = this.$refs['A'][0].offsetTop
					if (this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 79
					// 手指的值touches
					const index = Math.floor((touchY - this.startY) / 20)
					if (index >= 0 && index < this.letters.length)
					{this.$emit('change' , this.letters[index])}
					},16)
					
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			},
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.list
		display : flex
		flex-direction : column
		justify-content : center
		position : absolute
		top : 115px
		right : 0
		bottom : 0
		width : 20px
			
		.item
			line-height : 20px
			text-align : center
			color : #00bcd4
</style>