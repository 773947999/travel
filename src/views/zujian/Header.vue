<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
    </div>
    <!-- 路由跳转 -->
    <router-link to="/city">
	    <div class="header-right">
	      <!-- {{this.$store.state.city}} 映射完成后可以使用 -->
	      {{this.city}}
	      <span class="iconfont arrow-icon">&#xe6a2;</span>
	    </div>
	</router-link>
  </div>
</template>
<script type="text/javascript">
import { mapState ,mapGetters } from "vuex" ;
export default {
  name: "HomeHeader",
  // props : {
  // 	city : String
  // }不需要ajax传入接收
  computed : {
  	...mapState (['city']) ,
  	...mapGetters (['doubleCity'])
  	// 展开运算符 mapState是把vuex里的City数据映射到组件上计算属性中
  }
};
</script>
<style lang="stylus" scoped>
	@import "../../assets/styles/varibles.styl";
	// 可以通过别名修改缩减代码在webackbase.conf里修改直接导航到styles
.header
	display : flex
	line-height : 43px
	// .86rem
	background : $bgColor
	color : #fff
	.header-left
		width : 32px
		// .64rem
		float : left
		.back-icon
			text-align : center
			font-size : 20px
	.header-input
		flex : 1
		height : 31px
		line-height : 31px
		// .64rem
		margin-left : 10px
		margin-top : 6px
		padding-left : 10px
		// .12rem
		// margin-bottom : 6px
		background : #fff
		border-radius : 5px
		// .1rem
		color : #ccc
	.header-right
		color : #fff
		min-width : 52px
		padding : 0 5px
		// 1.24rem
		float : right
		text-align : center
		.arrow-icon
			margin-left : -2px
			font-size : 12px
</style>
