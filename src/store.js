import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
  	city : defaultCity
  },
  mutations: {
  	changeCity (state,city) {
  		state.city = city
      try 
  		{localStorage.city =city}
      catch (e) {}
  		// localStorage类似cookie存储数据
      //味了避免用户设置了隐身模式导致localStorage抛出异常 
  	}
  },
  // action要处理一些异步简答操作可以直接commit
  // actions: {
  // 	// ctx上下文 使用commit方法
  // 	changeCity (ctx,city) {
  // 		ctx.commit('changeCity',city)
  // 	}
  // }
  getters : {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
});
