
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from 'store/store.js'
import {$http} from '@escook/request-miniprogram'
 import {showMsg} from 'util/index.js'
 
uni.$http = $http


// 请求根路径 
$http.baseUrl = 'https://story.nabaiyu.com/apitest/api/'


//请求拦截器
$http.beforeRequest = function (options) {
	let token = store.state.m_users.token || ''
	if(token){
		options.header={
			'x-token':token
		}
	}
}
 //响应拦截器
 $http.afterRequest = function(response) {
   uni.hideLoading()
	 if(response.statusCode !== 200){
			uni.showToast({
				title: '网络错误',
				duration: 2000,
				icon: "none"
			});
	 }else{
		
	 }
 	if (response.data.code == 403) {
 		uni.showToast({
 			title: '您还没有登录喔',
 			duration: 2000,
 			icon: "none"
 		});
 		setTimeout(function() {
 			uni.navigateTo({
 				url:'/subpages/pages/login/index'
 			});
 		}, 1000)
  
 	} else {
 		return
 	}
 }


Vue.config.productionTip = false

//全局挂载错误提示信息
uni.$showMsg = showMsg

App.mpType = 'app'

const app = new Vue({
    ...App,
		store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
		
  }
}
// #endif