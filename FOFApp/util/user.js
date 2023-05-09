import store from '../store/store.js'

//是否登录
export function isLogin() {
	return store.state.m_users.token ? true : false
}

//去登录
export function toLogin() {
	uni.navigateTo({
		url: '/subpages/pages/login/index'
	})
}
