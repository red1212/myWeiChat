// 购买
export default {
	namespaced: true,
	state: () => ({
		disable:false,   //控制内容是否可编辑
		purchaseInfo:{
			checked:true,
			CouponID: 0, //优惠券id  如果没有优惠券传 0
		},
		productDetail:JSON.parse(uni.getStorageSync('ProductDetail') || '{}'),   //产品详情信息
		
	}),
	mutations:{
		updatePurchaseInfo(state,info){
			state.purchaseInfo = {...state.purchaseInfo,...info}
			console.log('--df--')
			console.log(state.purchaseInfo)
			console.log('--df--')
		},
		updateDisable(state,val){
			state.disable = val
		},
		updateProductDetail(state,val){
			state.productDetail = val
			this.commit('m_purchase/saveProductDetailToStorage')
		},
		saveProductDetailToStorage(state) {
			uni.setStorageSync('ProductDetail', JSON.stringify(state.productDetail))
		},
	},
	getters:{
		
	}
}