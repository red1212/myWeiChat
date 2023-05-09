<template>
	<view class="pro-detail">
		<!-- 
		 产品详情页-->
		<view class="banner-box">
			<view class="banner">
				<image :src="productDetail.Cover"></image>
			</view>
			<view class="pro-introduce">
				<view class="card">
					<view class="title">{{productDetail.Name || '----'}}</view>
					<view class="desc-item">
						<view class="price">¥{{productDetail.Price || '----'}}</view>
					</view>

					<view class="desc-item">
						<view class="label">检测能力：</view>
						<view class="flex1">{{productDetail.Keywords}}</view>
					</view>
					<view class="desc-item">
						<view class="label">检测周期：</view>
						<view class="flex1">{{productDetail.CompletionCycle || '----'}}</view>
					</view>
					<view class="desc-item">
						<view class="label">服务次数：</view>
						<view class="flex1">{{productDetail.ServiceNum}}次</view>
					</view>
				</view>
				<view class="prod-box">
					<view>
						<view class="prod_title">设备介绍</view>
						<view class="content-Item" v-html="productDetail.Content"></view>
					</view>
					<view>
							<view class="prod_title">仪器型号</view>
							<view class="content-Item" v-html="productDetail.InstrumentModel"></view>
					</view>
					<view>
							<view class="prod_title">技术参数</view>
							<view class="content-Item">
									<view v-for="(item,i) in productDetail.SpecsJson" :key="i" class="flex-between Specs">
										<view>{{item.specs_name}}</view>
										<view style="text-align: right;">{{item.specs_desc}}</view>
									</view>
							</view>
					</view>
					
					<view>
							<view class="prod_title">案例展示</view>
							<view class="content-Item">
								<view v-for="(item,i) in productDetail.FeaturesJson" :key="i" style="text-align: center;">
										<image :src="item.features_img"></image>
								</view>
						
							</view>
					</view>
					<view>
							<view class="prod_title">应用范围</view>
							<view class="content-Item" v-html="productDetail.Remark"></view>
					</view>

					
				</view>									
			</view>
		</view>
		<view class="goods-carts">
			<view class="bottom-nav">
				<view class="nav-left-item">
					<view v-for="(item,i) in options" :key="i" @click="onClick(item)" class="left-child-item">
						<view class="nav-text-item">
							<uni-icons :type="item.icon" size="20" :color="item.icon ? item.color : '#666'"></uni-icons>
							<view class="nav-text">{{item.text}}</view>
						</view>
					</view>
				</view>
				<view class="nav-right-item" @click="openBuy()">
					<!-- 预约机时  http://47.97.216.6/index/order/yuyue/?code=T7357389146975537536-->
						<button type="primary" class="purchase" v-if="productDetail.OrderType == 3">在线下单</button>
						<button type="primary" class="purchase" v-else>预约下单</button>
				</view>
			</view>
			<!-- <uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" /> -->
		</view>
	</view>
</template>

<script>
	import {isSuccess,errorTip} from '../../../util/index.js'
	import {isLogin,toLogin} from '../../../util/user.js'
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				ID:null,
				productDetail:{},
				options: [
					{
						icon: 'home',
						text: '首页',
					},
					{
					icon: 'heart',
					text: '收藏',
				}],
			}
		},
		async onLoad(option){
				this.ID = option.id
				uni.showLoading({
				  title: '数据加载中...',
				})
				let param={
					ID:parseInt(this.ID )
				}
				const { data: res }= await uni.$http.post('product/detail',param);
				uni.hideLoading()
				if(isSuccess(res.code)){
					this.productDetail = res.data
					this.handCollect(res.data.NumCollect)
				}else{
					return uni.$showMsg(res.message,1500) 
				}
				
		},
		methods: {
			...mapMutations('m_purchase',['updateProductDetail']),
			openBuy(){
				if(!isLogin()) return toLogin()
				this.updateProductDetail(this.productDetail)
					uni.navigateTo({
						url:'/subpages/pages/buy/index'
					})	
			},
			handCollect(key){
				if(key != 0){
					this.options[1].icon = 'heart-filled'
					this.options[1].color = '#d42f2f'
					this.options[1].text = '已收藏'
				}else{
					this.options[1].icon = 'heart'
					this.options[1].text = '收藏'
				}
			},
			async onClick(item) {
				let {text} = item
				if(text ==='首页'){
					uni.switchTab({
						url:"/pages/home/index"
					})
				}
				if(text === '收藏'){
					let param={
						ProductId:parseInt(this.ID )
					}
					const { data: res }= await uni.$http.post('user/mark/add',param);
					if (isSuccess(res.code)) {
						this.handCollect(1)
					} else {
						return uni.$showMsg(res.message, 1500)
					}
				}else{
					let param={
						ProductId:parseInt(this.ID )
					}
					const { data: res }= await uni.$http.post('user/mark/del',param);
					if (isSuccess(res.code)) {
						this.handCollect(0)
					} else {
						return uni.$showMsg(res.message, 1500)
					}
				}
			},
			//下单
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pro-detail {}

	.card {
		background-color: $uni-color-write;
		padding: 10px;
	}

	.banner {
		height: 240px;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	.title {
		color: #333;
		font-weight: bold;
		font-size: 14px;
	}

	.label {
		width: 70px;

	}
	.desc-item {
		display: flex;
		font-size: 14px;
		margin-top: 8px;
	}

	.price {
		color: $uni-color-price;
		font-size: 16px;
	}
	.goods-carts {
		position: fixed;
		bottom: 0px;
		height: 50px;
		background-color: $uni-color-write;
		z-index: 100;
		width: 100%;
		display: flex;
	}
	.nav-left-item{
		display: flex;
		flex:1;
	}
	.bottom-nav{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding:0px 10px;
	}
	.nav-right-item{
		flex: 1 0 100px;
	}
	.left-child-item{
		display: flex;
		text-align: center;
		font-size: 12px;
		padding-right: 10rpx;
		color: $uni-color-base;
	}
	.nav-text{
		margin-top:1px;
	}
	.purchase{
		background-color: $uni-color-price;
		font-size: 12px;
		flex:1;
		border-radius: 50px;
		line-height: 40px;
	}
	.nav-text-item{
		width: 40px;
		text-align: center;
	}
	.prod_title{
		    line-height: 40px;
		    background: #eee;
		    padding: 0 10px;
		    font-size: 14px;
		    color: $uni-color-primary;
	}
	.prod-box{
		background-color: $uni-color-write;
		padding:10px;
		padding-bottom: 60px;
	}
	.content-Item{
		font-size: 14px;
		color: $uni-color-base;
		line-height: 24px;
		padding:10px 0px;
	}
	.Specs{
		padding: 10px 0px;
		border-bottom: 1px solid $uni-border-color;
	}
</style>
