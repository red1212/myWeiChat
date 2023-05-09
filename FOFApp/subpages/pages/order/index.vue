<template>
	<view>
		<view class="top">
		<view class="tabBar typeBar">
			<view class="tab-item" v-for="(item,i) in typeList" :key="i">
				<text :class="['text',i === typeActive ? 'active' : '']" @click="typeChange(item,i)">{{item}}</text>
			</view>
		</view>
		</view>
		<view class="tabBar" style="background-color: #fff;">
			<view class="tab-item" v-for="(item,i) in tabList" :key="i">
				<text :class="['text',i === active ? 'active' : '']" @click="tabChange(item,i)">{{item}}</text>
			</view>
		</view>
		<view class="my-order">
			<view class="order-item" v-for="(item,i) in List" :key="i">
				<view class="row-1">
					<text class="orderId">{{item.orderId}}</text>
					<text class="payState">{{item.payState}}</text>
				</view>
				<view class="row-2">
					<view class="left-item">
						<image :src="item.img" class="pd-img" mode="widthFix"></image>
					</view>
					<view class="right-item">
						<view class="name">{{item.name}}</view>
						<view class="state">{{item.state}}</view>
						<view class="price">¥{{item.price}} <text class="discount">折扣优惠: ￥0</text></view>
					</view>
				</view>
				<view class="row-3">
					<button type="primary" size="mini" class="btn btnprimary" @click="clickResult(item,'open')">检测说明</button>
					<button type="primary" size="mini" class="btn btnprimary" @click="clickPay(item,'open')">去支付</button>
					<button type="default" size="mini" class="btn" @click="goDetail(item)">订单详情</button>
				</view>
			</view>
		</view>
		<view>
			<!-- 普通弹窗 -->
			<my-popup title="检测结果说明" ref="resultRef" @closePopUp="clickResult('close')"></my-popup>
			<my-pay @closePopUp="clickPay('close')" ref="payRef" @comfirmPay="comfirmPay"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeActive:0,
				active: 0,
				typeList:['材料检测','预约检测'],
				tabList: ['全部订单', '未支付', '已支付', '检测中', '检测完成', '已完成'],
				List: [{
						orderId: 'FOF20230317114',
						img: 'http://47.97.216.6/upload/9a/5652dcd3369d818566670266fd2e5c.png',
						price: '100',
						state: '待处理',
						payState: '未支付',
						name: '磁滞回线测试仪（VSM）磁滞回线测试仪（VSM）磁滞回线测试仪（VSM）磁滞回线测试仪（VSM）'
					},
					{
						orderId: 'FOF20230317114',
						img: 'http://47.97.216.6/upload/8a/5d9478f9a8456a78bb21942f778dd7.png',
						price: '100',
						state: '待处理',
						payState: '未支付',
						name: '磁滞回线测试仪（VSM）'
					}
				]
			
			}
		},
		onLoad(){
			// this.$refs.payRef.$refs.popup.open()
		},
		methods: {
			//tab切换
			tabChange(item, i) {
				if (this.active === i) return
				this.active = i
			},
			typeChange(item,i){
				if(this.typeActive === i) return
				this.typeActive = i
			},
			goDetail(item) {
				uni.navigateTo({
					url: '/subpages/pages/orderDetail/index?id=1',
				})
			},
			//预测结果
			clickResult(item,type){
				if(type === 'open'){
					this.$refs.resultRef.$refs.popup.open()
				}else{
					this.$refs.resultRef.$refs.popup.close()
				}
			},
			//支付
			clickPay(item,type){
				if(type === 'open'){
					this.$refs.payRef.$refs.popup.open()
				}else{
					this.$refs.payRef.$refs.popup.close()
				}
				
			},
			//支付
			comfirmPay(){
				console.log('支付成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabBar {
		display: flex;
		font-size: 30rpx;
		color: #787878;
		padding: 20px 10px;
		justify-content: space-between;
	}
  .top{
		position: sticky;
		top: 0px;
		z-index: 10;
		background-color: $uni-border-color;
	}
	.typeBar{
		justify-content: space-between;
		width: 300rpx;
		margin:  0 auto;
		padding:10px;
	}
	.text {
		border-bottom: 2px solid transparent;
		padding-bottom: 6px;
	}

	.active {
		color: $uni-color-primary;
		border-bottom: 2px solid $uni-color-primary;
	}

	.order-item {
		background-color: #fff;
		margin-bottom: 10px;
		padding: 10px;
	}

	.row-1 {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #666;
		margin-bottom: 8px;
	}

	.row-2 {
		display: flex;
    align-items: center;
	}

	.left-item {
		width: 105px;
		height: 100px;
		text-align: center;
		display: flex;
		align-items: center;
	}

	.pd-img {
		max-width: 100%;
		max-height: 100%;
	}

	.right-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.name {
		font-size: 14px;
		color: #333;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.state {
		font-size: 14px;
		color: #333;
		padding:8px 0px;
	}

	.price {
		font-size: 16px;
		font-weight: 600;
		color: #d42f2f;
	}
  .discount{
		font-size: 12px;
		color: #333;
		margin-left: 10px;
	}
	.row-3 {
		display: flex;
		justify-content: flex-end;
	}

	.btn {
		margin: 4px;
	}

	.btnprimary {
		background-color: $uni-color-primary;
	}
	.popBox{
		padding: 10px 10px;
		width: 500rpx;
		min-height: 200px;
	}
	.close{
		font-size: 16px;
		text-align: right;
		line-height: 30px;
	}
	.popup-title{
		font-weight: 600;
		font-size: 14px;
		text-align: center;
		display: block;
	}
</style>
