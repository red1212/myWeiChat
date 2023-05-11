<template>
	<view class="buy-wrap">
		<uni-section>
			<view class="buy-box">
				<view class="row-item">
					<view class="radio-item">
						<my-radio :checked="purchaseInfo.checked" text="我已阅读并同意" @radioChange="radioChange" :disabled="disable"></my-radio>
						 <text class="weituo" @click="openWeituo">《委托协议》</text>
					</view>
				</view>
			</view>
		</uni-section>
		<!-- 预约下单 -->
		<subscribe/>
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
				weituoText:`<div>
				<div style="text-align:center;font-size:14px;margin-bottom:8px">委托声明</div>
				<div>1）委托方对送检样品来源的合法性和相关信息的真实性承担全部责任。</div>
				<div>2）委托方对送检样品已知的或潜在的危害有如实告知的义务，否则承担全部责任。</div>
				<div>3）承检方仅对本次样品负责，检测结果仅反映对该样品的评价，检测结果使用所产生的直接或间接的损失，承检方不承担任何责任。</div>
				<div>4）如因灾害、事故等不可抗力造成样品丢失或者仪器出现故障，从而造成检测服务延迟或不能进行时，承检方会及时通知委托方取消或暂停服务而无需承担责任。</div>
				<div>5）承检方承诺在向甲方交付成果之前，不会将成果转让给第三人，数据及分析的所有结果归委托方独有。</div>
				<div>6）委托方与及承检方参与此项目人员均需要保密原始资料、技术路线、试验报告及与试验有关的资料结果及价格，保密期限两年，不得向第三方泄露相关信息，否则由过错方承担所有责任。</div>
				</div>`
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
					this.$refs.parentRef.$refs.popup.open()
				}else{
					return uni.$showMsg(res.message,1500) 
				}
				
		},
		methods: {
			...mapMutations('m_purchase',['updatePurchaseInfo','updateDisable']),
			closePopUp() {
				this.$refs.parentRef.$refs.popup.close()
			},
			radioChange(){
				let obj={
					'checked':!this.purchaseInfo.checked
				}
				this.updatePurchaseInfo(obj)
			},
			openWeituo(){
				this.content = this.weituoText
				this.$refs.parentRef.$refs.popup.open()
			},
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
