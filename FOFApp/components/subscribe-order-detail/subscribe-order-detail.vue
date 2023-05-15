<template>
	<view>
		<uni-card type="line">
			<view class="info-item">
				<text class="info-label">主要成分：</text>
				<text class="info-value">{{orderInfo.Item.SampleComponent}}</text>
			</view>
			<view class="info-item">
				<text class="info-label">预约时长：</text>
				<text class="info-value">{{orderInfo.Item.SampleNumber}}小时</text>
			</view>
			<view class="info-item">
				<text class="info-label">预约时间：</text>
				<text class="info-value">{{dayjs(orderInfo.Item.StartTime).format('YYYY-MM-DD HH:mm:ss')}} ~ {{dayjs(orderInfo.Item.EndTime).format('YYYY-MM-DD HH:mm:ss')}}</text>
			</view>
		</uni-card>
			
	</view>
</template>

<script>
	import dayjs from "dayjs"
	export default {
		name:"subscribe-order-detail",
		data() {
			return {
				dayjs
			};
		},
		props:{
			orderInfo:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info-item{
		margin-bottom: 4px;
	}
	.label{
		color: #333;
		font-weight: 600;
		width: 80px;
		display: inline-block;
	}
	.order-info{
		padding:0px 10px;
	}
	.info-item{
		margin-bottom: 10px;
		display: flex;
	}
	.info-value{
		flex:1;
	}
	.info-label{
		width: 90px;
		color: #333;
	}
</style>