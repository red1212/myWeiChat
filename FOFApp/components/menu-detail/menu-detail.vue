<template>
	<view>
		<view class="menu">
				<view class="title">明细菜单</view>
				<view class="content border">
					<view v-for="(menuItem,k) in SampleArr" :key="k">
						<view class="menuRow">
							<view style="margin-bottom: 4px;">
								<text class="menuLabel" style="font-weight: 500;">{{menuItem.sampleNum}}组样品</text>
								<text class="menuValue">样品数量：{{menuItem.sample_number}}</text>
							</view>
							<view v-for="(sk,j) in menuItem.sample_sku" :key="j" style="margin-bottom: 6px;" class="flex mingxi">
								<view>
									<text class="menuLabel">{{sk.name}}:</text>
									<text class="menuValue">{{sk.list[0].item_name}}</text>
								</view>
								<view class="moneyBox">￥{{setMoney(sk,menuItem.sample_number)}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="content" style="font-size: 16px;">
					<text>费用总计：</text><text class="countPrice">500元</text>
				</view>
			</view>
	</view>
</template>
<script>
	import BigNumber from "bignumber.js";
	export default {
		name:"menu-detail",
		data() {
			return {
				BigNumber
			};
		},
		computed: {
			setMoney:function(){
				return (item,sample_number)=>{
					if(sample_number ==''){
						return '---'
					}
					let val = new BigNumber(item.list[0].item_price).multipliedBy(sample_number).toString()
					console.log(sample_number,item.list[0].item_price,'--计算价格--',val)
					return val == 'NaN' ? '---' : val

				}
			}
		},
		props: {
			SampleArr: {
				type: Array,
				default: () => []
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 10px;
		font-size: 14px;
	}
	
	.title {
		color: $uni-color-primary;
		font-weight: bold;
		background-color: $uni-bg-primary;
		padding: 10px;
	}
	//菜单项
	.menuRow{
		font-size: 12px;
		color: #999;
	}
	.menuValue{
		color: #999;
		padding-left: 16px
	}
	.mingxi{
		margin-bottom: 4px;
	}
	.moneyBox{
		background-color: #cd2828;
		font-size: 10px;
		border-radius: 11px;
		height: 20px;
		line-height: 20px;
		color: #fff;
		width: 66px;
		text-align: center;
		margin-left: 6px;
	}
	.countPrice {
		color: $uni-color-price;
	}
	.border{
		border-bottom: 1px dashed $uni-border-color;
	}
</style>