<template>
	<view class="wrap">
		<view class="row-1">
			<view class="title">联系我们</view>
			<view class="title-en">CONTACT US</view>
			<view class="desc-box">
				<view>如果您在网站使用或者检测咨询上有问题，可以随时与我们下面几位老师联系。</view>
				<view>工作时间：周一至周六 8:30--18:30</view>
			</view>
		</view>
		
		<view class="row-2">
			<uni-card v-for="(item,i) in contactus" :key="i">
				<view class="techer-info"><uni-icons type="person" size="20" color="#0e67a9"></uni-icons> <view class="name">{{item.name}}</view></view>
				<view class="colum"><view class="label">办公电话：</view><text class="phone">{{item.tel}}</text> <text class="tip-text">微信同号</text></view>
				<view class="colum"><view class="label">邮箱：</view>{{item.email}}</view>
				<view class="colum"><view class="label">QQ：</view>{{item.qq}}</view>
				<view class="colum"><view class="label">负责范围：</view>{{item.fanwei}}</view>
			</uni-card>
		</view>
		
		<view class="row-1">
			<view class="title">服务热线</view>
			<view class="server-phone">{{company['服务热线'] || ''}}</view>
			<view class="address">地址：{{company['地址'] || '---'}}</view>
			<view class="address">邮箱：{{company['邮箱'] || '---'}}</view>
			<view class="address">财务咨询：{{company['财务咨询'] || '---'}}</view>
			<view class="address">投诉电话：{{company['投诉电话'] || '---'}}</view>
		</view>
	</view>
</template>

<script>
	import {isSuccess} from '../../../util/index.js'
	export default{
		data(){
			return{
				contactus:[],
				company:{}
			}
		},
		async onLoad(){
			uni.showLoading({
			  title: '数据加载中...',
			})
			const { data: res }= await uni.$http.post('company');
			uni.hideLoading()
			if(isSuccess(res.code)){
				this.contactus = res.data.contactus || []
				this.company = res.data.company || []
			}else{
				return uni.$showMsg(res.message,1500) 
			}
		}
	}
</script>

<style scoped>
	.wrap{
		padding-bottom: 20px;
	}
	.row-1{
		padding:20px;
		text-align: center;
		background-color: #fff;
	}
	.title{
		font-weight: bold;
		font-size: 18px;
		color: #0e67a9;
	}
	.title-en{
		color: #ccc;
		font-size: 14px;
	}
	.desc-box{
		color: #666666;
		font-size: 12px;
		margin-top: 10px;
		text-align: center;
	}
	.techer-info{
		display: flex;
		border-bottom: 1px solid #ebeef5;
		padding: 10px 0px;
	}
	.label{
		width: 70px;
	}
	.name{
		font-weight: bold;
		margin-left: 6px;
		font-size: 14px;
		color: #111;
	}
	.phone{
		font-weight: bold;
		color: #111;
		margin-right: 6px;
	}
	.tip-text{
		font-size: 10px;
		color: #888888;
	}
	.colum{
		display: flex;
		font-size: 14px;
		color: #666666;
		margin-top: 8px;
	}
	.server-phone{
		font-size: 14px;
	}
	.address{
		font-size: 12px;
		color: #888888;
		margin-top: 4px;
	}
</style>