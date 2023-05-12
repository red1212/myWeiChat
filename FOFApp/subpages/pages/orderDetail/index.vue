<template>
	<view class="detail-box">
		<view class="order-state">
			订单未支付，请完成支付！
		</view>
		<uni-card>
			<view class="info-item">
				<text class="label">委托人：</text>
				<text class="value">丁立国</text>
			</view>
			<view class="info-item">
				<text class="label">订单编号：</text>
				<text class="value">FOF20230319101</text>
			</view>
			<view class="info-item">
				<text class="label">检测项目：</text>
				<text class="value">场发射透射电子显微镜</text>
			</view>
			<view class="info-item">
				<text class="label">下单时间：</text>
				<text class="value">2023-03-19 15:30:49</text>
			</view>
		</uni-card>
	  
		<view class="order-info">
			<view class="label" style="width: auto;">样品信息及要求：</view>
		</view>
		
		<uni-card title="A组样品" type="line">
			<view class="info-item">
				<text class="info-label">样品名称：</text>
				<text class="info-value">test1</text>
			</view>
			<view class="info-item">
				<text class="info-label">测试明细：</text>
				<text class="info-value">XPS液体制样： XPS液体制样; XPS测试(非磁性样品)： 5个元素以内; XPS测试(磁性样品)： 5个元素以内; 原位XPS测试/温度点： 3个温度点; 原位光照（不含扫描）： 光照2次; 原位XPS测试/真空： 6-8个元素; 价带谱测试： 和XPS一起测试; 角分辨XPS测试/角度： 5-9个元素; XPS Mapping测试： 测试2小时; XPS数据分析： XPS数据分析/元素; 增加测试点： 2个; 紫外光电子能谱（UPS）测试： 紫外光电子能谱（UPS）;</text>
			</view>
			<view class="info-item">
				<text class="info-label">实验要求及目的：</text>
				<text class="info-value">test1</text>
			</view>
		</uni-card>
		<uni-card title="B组样品" type="line">
			<view class="info-item">
				<text class="info-label">样品名称：</text>
				<text class="info-value">test1</text>
			</view>
			<view class="info-item">
				<view class="info-label">测试明细：</view>
				<text class="info-value">XPS液体制样： XPS液体制样; XPS测试(非磁性样品)： 5个元素以内; XPS测试(磁性样品)： 5个元素以内; 原位XPS测试/温度点： 3个温度点; 原位光照（不含扫描）： 光照2次; 原位XPS测试/真空： 6-8个元素; 价带谱测试： 和XPS一起测试; 角分辨XPS测试/角度： 5-9个元素; XPS Mapping测试： 测试2小时; XPS数据分析： XPS数据分析/元素; 增加测试点： 2个; 紫外光电子能谱（UPS）测试： 紫外光电子能谱（UPS）;</text>
			</view>
			<view class="info-item">
				<text class="info-label">实验要求及目的：</text>
				<text class="info-value">test1</text>
			</view>
		</uni-card>
	  <uni-card>
			<text class="label">邮寄地址：</text>
			北京昌平区沙河镇青年创业大厦B座4层3A22   李逗逗收   13261867795
			<view style="margin-top:10px;">
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
	export default {
		data() {
			return {
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
		width: 116px;
		color: #333;
	}
	.link{
		word-break: break-all;
	}
</style>