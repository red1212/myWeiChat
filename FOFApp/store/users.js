export default {
	namespaced: true,
	state: () => ({
		token: uni.getStorageSync('token') || '', //登录状态
		// 用户的基本信息
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		isLogin:true,  //true 登录 false 为注册
	}),
	mutations: {
		updateIsLogin(state, val){
			state.isLogin = val
		},
		updateToken(state,val){
			state.token = val
			this.commit('m_users/saveTokenToStorage')
		},
		saveTokenToStorage(state){
			uni.setStorageSync('token', state.token)
		},
		updateUserInfo(state, userinfo){
			state.userinfo = userinfo
			this.commit('m_users/saveUserInfoToStorage')
		},
		// 将 userinfo 持久化存储到本地
		saveUserInfoToStorage(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},
	},

	getters: {

	}
}
