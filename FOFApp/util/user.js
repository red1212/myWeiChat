import store from '../store/store.js'
import {isSuccess} from './index.js'
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

//发送验证码
export async function  sendCodeFn(phone,type){
	let params={
			"phone":phone,
			"type":type// 枚举值参见接口说明 - 枚举 - 短信验证码
		}
	const { data: res }= await uni.$http.post('user/code/send', params);
	if(!isSuccess(res.code)){
		return uni.$showMsg(res.message,1500) 
	}
}
//支付价格查询
export async function  orderPrice(params){
	const { data: res }= await uni.$http.post('user/order/price', params);
	if(!isSuccess(res.code)){
		uni.$showMsg(res.message,1500) 
		return '--'
	}
	return res.data.totalPrice
}

//支付状态查询
export async function payState(params){
	const { data: res }= await uni.$http.post('user/order/pay/status', params);
	if(!isSuccess(res.code)){
		if(res.data){
			uni.$showMsg('支付成功',1500) 
		}else{
			uni.$showMsg('支付失败',1500) 
		}
		
	}else{
		uni.$showMsg(res.message,1500) 
	}
	
}
export async function weixinPay(code,payType,Orderno){
	let param={
		"payType": payType, //接口说明-枚举-支付类型
		"orderNo": Orderno,
		"code":  code //可选
	}
	const {data: res} = await uni.$http.post('user/pay', param);
	if (isSuccess(res.code)) {
		weixinRequest(res.data)
	} else {
		return uni.$showMsg(res.message, 1500)
	}
}

export function weixinRequest(param){
	let res = false
	uni.requestPayment({
		...param,
		success: function (res) {
			console.log('success:' + JSON.stringify(res));
			res = true
		},
		fail: function (err) {
			console.log('fail:' + JSON.stringify(err));
			res = false
		}
	});
	return res
}