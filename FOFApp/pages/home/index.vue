<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" :interval="5000"
			indicator-active-color="rgba(255, 255, 255,.5)" indicator-color="rgba(255, 255, 255,.2)">
			<swiper-item v-for="(item,i) in imgList" :key="i" v-if="item.Img.indexOf('.mp4') === -1">
			<!-- 	<video id="myVideo" v-if="item.Img.indexOf('.mp4') != -1" :src="item.Img"
				:autoplay="true" :show-play-btn="false"
				:show-fullscreen-btn="true" enable-danmu danmu-btn controls></video> -->
				<image :src="item.Img" mode="widthFix" class="swiper-img"></image>
			</swiper-item>
		</swiper>
		<view class="tuijian">—— 特别推荐 ——</view>
		<view class="list">
			<navigator class="list-item" v-for="(item,i) in products" :key="i" :url="`/subpages/pages/productDetail/index?id=${item.ID}`">
				<image :src="item.Cover" class="img"></image>
				<view class="text-box">
					<view class="price">
						<view class="dolor">￥</view>
						<view>{{item.Price}}</view>
					</view>
					<view class="name">{{item.Name}}</view>
				</view>
			</navigator>
		</view>
		<button type="default" open-type="contact" class="contactUs">
			<uni-icons type="headphones" size="20" color="#fff"></uni-icons>
		</button>
		<!-- 弹窗 -->
		<my-popup ref="parentRef"
		@closePopUp="closePopUp" @clickBtnItem="closePopUp"  btnText="我知道了">
		<view class="notice-item">
			<view class="flex-center flex-column">
				<view class="notice-name">{{notice.Name}}</view>
				<view>{{notice.CreateAt}}</view>
			</view>
			<view class="content" v-html="notice.Content"></view>
		</view>
		</my-popup>
	</view>
</template>

<script>
	import {isSuccess,errorTip} from '../../util/index.js'
	export default {
		data() {
			return {
				imgList: [],
				products: [],
				notice:{},
				content:`<div>
				<div style="text-align:center;font-size:14px;margin-bottom:8px">委托声明</div>
				</div>`
			}
		},
		 onReady: function(res) {
		    // #ifndef MP-ALIPAY
		      this.videoContext = uni.createVideoContext('myVideo')
		        // #endif
		},
		async onLoad(){
			uni.showLoading({
			  title: '数据加载中...',
			})
			const { data: res }= await uni.$http.post('');
			uni.hideLoading()
			if(isSuccess(res.code)){
				this.imgList = res.data.banner || []
				this.products = res.data.products || []
				this.notice = res.data.notice || {}
				console.log(res)
				this.$refs.parentRef.$refs.popup.open()
			}else{
				return uni.$showMsg(res.message,1500) 
			}
			console.log(res)
		},
		methods:{
			closePopUp() {
				this.$refs.parentRef.$refs.popup.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	swiper {
		height: 400rpx;
	}

	.contactUs {
		position: fixed;
		right: 10px;
		z-index: 2;
		top: 80%;
		border-radius: 50%;
		background: #3b9ee8;
	}

	.tuijian {
		font-size: 14px;
		text-align: center;
		margin-top: 20px;
		margin-bottom: 10px;
		color: $uni-color-primary;
	}

	.swiper-img {
		width: 100%;
		height: 100%;
	}

	.img {
		width: 306rpx;
		height: 306rpx;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20rpx;
	}

	.list-item {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10px;
		align-items: center;
		padding: 20rpx;
		border-radius: 8px;
		width: 49%;
		box-sizing: border-box;
	}

	.name {
		color: #333333;
		font-size: 14px;
	}

	.text-box {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1;
		width: 100%;
	}

	.desc {
		font-size: 12px;
		color: #888888;
		overflow: hidden;
		-webkit-line-clamp: 3;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.price {
		color: #d42f2f;
		display: flex;
		align-items: center;
		font-size: 14px;
		margin-bottom: 4px;
		margin-top: 4px;
	}

	.dolor {
		margin-right: 1px;
		font-size: 12px;
	}
	.notice-item{
		margin-bottom: 6px;
		.content{
			max-height: 300px;
		}
	}
	.notice-name{
		font-weight: bold;
		font-size: 14px;
		margin-bottom: 6px;
	}
</style>
