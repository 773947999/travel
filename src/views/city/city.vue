<template>
	<div>
		<CityHeader></CityHeader>
		<CitySearch :cities="cities"></CitySearch>
		<CityList :cities="cities" :hot="hotCities" :letter="letter"></CityList>
		<CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
	</div>	
</template>
<script type="text/javascript">
import CityHeader from "./component/header.vue"
import CitySearch from "./component/Search.vue"
import CityList from "./component/List.vue"
import CityAlphabet from "./component/Alphabet.vue"
import axios from "axios"
	export default {
		name : "City",
		components : {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities : {},
				hotCities : [],
				letter : "",
			}
		},
		methods : {
			getCityInfo () {
				axios.get('citys.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
				console.log (res)
			},
			handleLetterChange (letter) {
				this.letter = letter
				
			},
		},
		mounted () {
			this.getCityInfo();
		}
	};
</script>
<style type="text/css" lang="stylus" scoper>
	
</style>