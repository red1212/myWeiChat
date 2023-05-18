<template>
	<view class="wallet-wrap">
		<view class="box">
			<view class="row">
				<view><text class="label">当前账户余额:</text><text class="price">¥{{assetInfo.Balance || 0.00}}</text></view>
				<button type="primary" class="Recharge" @click="Recharge">充值</button>
			</view>
			<uni-collapse>
				<uni-collapse-item :show-animation="true" border="false">
					<template v-slot:title>
						<view class="tip-title">预存说明</view>
					</template>
					<view class="content">
						<text class="text">预存优惠，一次性充值金额优惠</text>
						<text class="text">5000元以上，5150+100元京东购物卡一张</text>
						<text class="text">1万以上，10400+200元京东购物卡一张</text>
						<text class="text">2万以上，21000+400元京东购物卡一张</text>
						<text class="text">5万以上，53000+1000元京东购物卡一张</text>
						<text class="text">10万以上，108000+2000元京东购物卡一张</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="box">
			<view class="row">
				<view><text class="label">当前账户信用额度：</text><text class="price" style="color:#333">{{assetInfo.CreditTotal || 0.00}}</text></view>
			</view>
			<uni-collapse>
				<uni-collapse-item :show-animation="true" border="false">
					<template v-slot:title>
						<view class="tip-title">信用额度是什么?</view>
					</template>
					<view class="content">
						<text class="text">信用额度是为您提供先测试后付款的支付服务，额度2000元。使用信用额度付款后，需在支付后的60天内进行还款，否则帐号将被冻结。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="box">
			<view class="row">
				<view><text class="label">已使用信用额度：</text><text class="price" style="color:#333">{{assetInfo.CreditUsed || 0.00}}</text></view>
			</view>
			<view class="tip-title list">
				申请信用额度请联系客服：13911521303/15811059950
			</view>
		</view>
		<view class="box list">
			<view class="row">
				<view><text class="label">剩余额度：</text><text class="price" style="color:#333">{{assetInfo.CreditBalance || 0.00}}</text></view>
			</view>
		</view>
	  <my-popup btnText="支付" title="充值" :disabled="disabled" ref="rechargeRef"  @closePopUp="closePopUp" @clickBtnItem="confirm">
			<view class="input-box">
				<text>输入充值金额：</text>
				<input class="uni-input" type="digit" :value="money" @input="(e)=>inputChange(e)"/>
			</view>
		</my-popup>
	</view>
</template>

<script>
	import {isSuccess} from '../../../util/index.js'
	export default {
		data() {
			return {
				money:'',
				disabled:true,
				assetInfo:{},
				loading:false
			}
		},
		watch:{
			money:function(newVal){
				this.disabled = newVal ? false : true
			}
		},
		onLoad(){
			this.getAssets()
		},
		methods:{
			inputChange(e){
				this.money = e.detail.value
			},
			Recharge(){
				this.$refs.rechargeRef.$refs.popup.open();
			},
			closePopUp(){
				this.$refs.rechargeRef.$refs.popup.close();
				this.money = ''
			},
			async confirm(){
				if(this.loading) return
				this.loading = true
				let param = {
					amount : Number(this.money)
				}
				let {data:res} = await uni.$http.post('user/recharge', param);
				this.loading = false
				if (isSuccess(res.code)) {
					//这里对接微信支付
					
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			},
			async getAssets(){
				uni.showLoading({
					title: '数据加载中...',
				})
				this.loading = true
				const {data: res} = await uni.$http.post('user/assets');
				this.loading = false
				uni.hideLoading()
				if (isSuccess(res.code)) {
					this.assetInfo = res?.data || {}
				} else {
					return uni.$showMsg(res.message, 1500)
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wallet-wrap {
		background-color: $uni-color-write;
		min-height: 100vh;
		padding: 10px;
	}

	.list {
		padding-bottom: 10px;
		border-bottom: 1px solid $uni-border-color;
	}

	.box {
		margin-top: 20px;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		margin-bottom: 10px;
	}

	.label {
		width: 100px;
	}

	.price {
		color: $uni-color-price;
		margin-left: 10px;
	}

	.Recharge {
		background-color: $uni-color-primary;
		color: $uni-color-write;
		margin: 0px;
		font-size: 12px;
	}

	.content {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		color: #999;
		padding-bottom: 10px;
	}

	.tip-title {
		font-size: 12px;
		line-height: 30px;
		color: #666;
	}

.input-box{
	display: flex;
	font-size: 12px;
	align-items: center;
}
.uni-input{
	border:1px solid $uni-border-color;
	padding: 6px 4px;
}
</style>
