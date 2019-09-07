<template>
	<div>
		<DeatailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></DeatailBanner>
		<DetailHeader></DetailHeader>
		<div class="content">
			<DetailList :list="list"></DetailList>
		</div>
	</div>
</template>
<script type="text/javascript">
import DeatailBanner from './components/Banner.vue' ;
import DetailHeader from './components/Header.vue' ;
import DetailList from './components/list.vue' ;
import axios from 'axios';
	export default {
		name : "Deatail" ,
		components : {
			DeatailBanner,
			DetailHeader,
			DetailList,
		},
		data () {
			return {
				sightName : '',
				bannerImg : '',
				gallaryImgs : [],
				list : [],
			}
		},
		// 使用过keepalive只会执行一次点其他的也会显示缓存 要调用activated
		mounted () {
			this.getDetailInfo()
		},
		methods : {
			getDetailInfo () {
				axios.get('/des.json', {
					params : {
						id : this.$route.params.id
					}
				}) .then(this.handleGetDataSucc)
				// axios.get('des.json?id=' + this.$route.params.id) 
				// .then(this.handleGetDataSucc)
				// 接收路由里的参数
			},
			handleGetDataSucc (res) {
				res = res.data 
				if (res.ret && res.data) {
					const data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
	};
</script>
<style type="text/css" lang="stylus" scoped>
	.content
		height : 2500px
</style>