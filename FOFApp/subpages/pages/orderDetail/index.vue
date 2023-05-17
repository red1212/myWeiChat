<template>
	<view class="detail-box">
		<!-- 普通下单 -->
		<view>
			<view class="order-state" v-if="orderInfo.IsPay ==1">
				支付成功
				<view>请打印检测项目表，随样品邮寄至检测处。</view >
			</view>
			<view class="order-state" v-else>
				订单未支付，请完成支付！
			</view>
		</view>
		<uni-card>
<!-- 			<view class="info-item">
				<text class="label">委托人：</text>
				<text class="value">丁立国</text>
			</view> -->
			<view class="info-item">
				<text class="label">订单编号：</text>
				<text class="value">{{orderInfo.Orderno}}</text>
			</view>
			<view class="info-item">
				<text class="label">检测项目：</text>
				<text class="value">{{orderInfo.ProductInfo.Name}}</text>
			</view>
			<view class="info-item">
				<text class="label">下单时间：</text>
				<text class="value">{{dayjs(orderInfo.CreatTime).format('YYYY-MM-DD HH:mm:ss')}}</text>
			</view>
		</uni-card>
	  
		<view class="order-info">
			<view class="label" style="width: auto;">样品信息及要求：</view>
		</view>
		<subscribe-order-detail v-if="orderInfo.OrderType ==4" :orderInfo="orderInfo"/>
		
		<inline-order-detail v-if="orderInfo.OrderType ==3" :orderInfo="orderInfo"/>
		<uni-card>
				<text class="label">邮寄地址：</text>
				{{orderInfo.ProductInfo.MailingAddress || '--'}}
				<view style="margin-top:10px;" v-if="orderInfo.OrderType !=4">
					<!-- 普通下单 -->
					<text class="label" style="width: 105px;">数据下载链接：</text>
					<view>链接:</view> 
					<uni-link class="link" href="https://pan.baidu.com/s/1XtSRY7flYw8ZPo45YEoeXg?pwd=d44j" text="https://pan.baidu.com/s/1XtSRY7flYw8ZPo45YEoeXg?pwd=d44j"></uni-link>
					<view>提取码:</view> 
					<uni-link class="link" href="d44j" text="d44j"></uni-link>
					
				</view>
		</uni-card>
	</view>
</template>

<script>
	import {isSuccess,errorTip} from '../../../util/index.js'
	import dayjs from "dayjs"
	export default {
		data() {
			return {
				dayjs,
				orderInfo:{}
			}
		},
		async onLoad(option){
			console.log(option)
			if(option?.id){
				uni.showLoading({title: '数据加载中...',})
				const {data: res} = await uni.$http.post('user/order/detail', {extra:option.id});
				console.log(res)
				uni.hideLoading()
				if (isSuccess(res.code)) {
						this.orderInfo = res.data || {} 
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail-box{
		padding-bottom: 20px;
	}
	.order-state{
		background-color:$uni-color-primary;
		color: #fff;
		padding:20px 10px;
		text-align: center;
		margin-top: 10px;
	}
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
	.link{
		word-break: break-all;
	}
</style>