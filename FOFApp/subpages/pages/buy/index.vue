<template>
	<view class="buy-wrap">
		<uni-section>
			<view class="buy-box">
				<weituo :disabled="disable"/>
				<view style="margin-bottom: 10px;">邮寄地址：{{productDetail.product.MailingAddress || '--'}}</view>
			</view>
		</uni-section>
		<!-- 普通下单 -->
		<order-in-line v-if="productDetail.product.OrderType === 3" :productDetail="productDetail"/>
		
		<!-- 预约下单 -->
		<subscribe v-else :productDetail="productDetail"/>
		
		<view style="height: 20px;"></view>
		<!-- 弹窗 -->
		<my-popup ref="parentRef" :content="content" 
		@closePopUp="closePopUp" @clickBtnItem="closePopUp"  btnText="我知道了"></my-popup>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {isSuccess,errorTip} from '../../../util/index.js'
	export default {
		data() {
			return {
				content:'',
				productDetail:{},
			}
		},
		computed:{
		...mapState('m_client',['teamList']),
		...mapState('m_purchase',['purchaseInfo','disable'])	
		},

		async onLoad(option){
				uni.showLoading({
				  title: '数据加载中...',
				})
				let param={
					ID:parseInt(option.ID)
				}
				const { data: res }= await uni.$http.post('user/order/view',param);
				uni.hideLoading()
				if(isSuccess(res.code)){
					this.productDetail = res.data
					const {OrderType,Content2,Content3} = res.data.product
					this.content = OrderType == 3 ? Content2 : Content3  
					let coupons = res.data.coupons || []
					if(coupons.length > 0){
						this.updatePurchaseInfo({CouponID:coupons[0].ID})
					}else{
						this.updatePurchaseInfo({CouponID:0})
					}
					// this.$refs.parentRef.$refs.popup.open()   //-----后期放开
					
				}else{
					return uni.$showMsg(res.message,1500) 
				}
				
		},
		methods: {
			...mapMutations('m_purchase',['updatePurchaseInfo','updateDisable']),
		}
	}
</script>

<style lang="scss" scoped>
	.buy-wrap{
		background-color: #fff;
		min-height: 100vh;
	}
	.buy-box{
		padding:0px 10px;
	}
	.radio-item{
		display: flex;
		align-items: center;
	}
	.weituo{
		color: $uni-color-primary;
	}
	.row-item{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		font-size: $uni-font-14;
	}
	.label{
		width: 80px;
	}
	.color{
		color: $uni-color-primary;
	}
	.service-box{
		display: flex;
		flex:1;
		flex-wrap: wrap;
	}
	.service-base{
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid $uni-border-color;
		box-sizing: border-box;
		border-radius: 6px;
		margin-bottom: 10px;
		font-size: 12px;
		margin-right: 6px;
	}
  .service-act{
		border: 1px solid $uni-color-primary;
		color: $uni-color-primary;
	}
</style>
