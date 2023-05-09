

export function formatPhone(str){
	if(!str) return '----'
	let str1 = str.slice(0,3)
	let str2 = str.slice(-3)
	return str1+'****'+str2
}

//加载失败
export function showMsg(title="数据加载失败",duration=15000){
	uni.showToast({
		title:title,
		duration:duration,
		icon:'none'
	})
}

//校验map是否为空

export function checkMap(map,mapText,duration=1500){
	let res = true
	for ( let i in map) {
		if(map[i] ===''){
			res = false
			return uni.$showMsg(mapText[i], duration)
		}
	}
	return res
}

const Code ={
	'success':200
}

export function isSuccess(code){
 return code === '200'
}

//处理错误提示
export function errorTip(text){
	// BadRequest: 请输入合法手机号
	if(text.indexOf('BadRequest:') !=-1){
		return text.replace('BadRequest:','')
	}
}

