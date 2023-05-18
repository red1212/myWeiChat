<template>
	<view>
		<view class="top">
			<view class="tabBar typeBar">
				<view class="tab-item" v-for="(item,i) in typeList" :key="i">
					<text :class="['text',item.key === typeActive ? 'active' : '']"
						@click="typeChange(item,i)">{{item.name}}</text>
				</view>
			</view>
			<view class="tabBar" style="background-color: #fff;">
				<view class="tab-item" v-for="(item,i) in tabList" :key="i">
					<text :class="['text',i === active ? 'active' : '']" @click="tabChange(item,i)">{{item.name}}</text>
				</view>
			</view>
		</view>

		<view class="my-order">
			<view class="order-item" v-for="(item,i) in List" :key="i" v-if="item.ProductInfo">
				<view class="row-1">
					<text class="orderId">{{item.ProductInfo.Code || '---'}}</text>
					<text class="payState">{{isPayFn[item.IsPay] || '---'}}</text>
				</view>
				<view class="row-2">
					<view class="left-item">
						<image :src="item.ProductInfo.Cover" class="pd-img" mode="widthFix"></image>
					</view>
					<view class="right-item">
						<view class="name">{{item.ProductInfo.Name || '---'}}</view>
						<view class="state">{{orderStatus[item.TestStatus] || '--'}}</view>
						<view class="price">¥{{item.PayMoney || '---'}} <text class="discount">折扣优惠: ￥{{item.CouponFee}}</text></view>
					</view>
				</view>
				<view class="row-1">
					<text>下单时间：{{dayjs(item.CreatTime).format('YYYY-MM-DD HH:mm:ss')}}</text>
				</view>
				<view class="row-3">
					<button type="primary" size="mini" class="btn btnprimary"
						@click="clickResult(item,'open')">检测说明</button>
					<button type="primary" size="mini" class="btn btnprimary" v-if="item.IsPay !== 1"
						@click="clickPay(item,'open')">去支付</button>
					<button type="default" size="mini" class="btn" @click="goDetail(item)">订单详情</button>
				</view>
			</view>
		</view>
		<view v-if="List.length === 0">
			<no-data />
		</view>
		<view>
			<!-- 普通弹窗 -->
			<my-popup title="检测结果说明" ref="resultRef" @closePopUp="clickResult('close')" :content="item.ResultNote" ></my-popup>
			<my-pay @closePopUp="clickPay('close')" ref="payRef" @comfirmPay="comfirmPay" :Orderno="Orderno"/>
		</view>
	</view>
</template>

<script>
	import dayjs from "dayjs"
	import {isSuccess,isPayFn,orderStatus} from '../../../util/index.js'
	export default {
		data() {
			return {
				dayjs,
				orderStatus,
				isPayFn,
				loading: false,
				typeActive: 3,
				active: 0,
				isPaying: [1, 2, 3],
				isPay: '', //是否支付
				status: '', //订单状态
				type: 'statu', //默认订单类型
				Orderno:'',   //订单ID
				typeList: [
					{
						name: '材料检测',
						key: 3
					},
					{
						name: '预约检测',
						key: 4
					}
				],
				tabList: [
					{
						name: '全部订单',
						key: 'statu',
						val: 0
					},
					{
						name: '未支付',
						key: 'pay',
						val: 0
					},
					{
						name: '已支付',
						key: 'pay',
						val: 1
					},
					{
						name: '检测中',
						key: 'statu',
						val: 1
					},
					{
						name: '检测完成',
						key: 'statu',
						val: 2
					},
					{
						name: '已完成',
						key: 'statu',
						val: 3
					},
				],
				List: [],
				paging: {
					page: 1,
					size: 10
				},
				total: 0,

			}
		},
		onLoad() {
			this.getOrderDeetail()
			// this.$refs.payRef.$refs.popup.open()
		},
		onReachBottom() {
			let { page,size } = this.paging
			if (size * page >= this.total) return uni.$showMsg('数据加载完毕！', 1000)
			if (this.loading) return
			this.paging.page += 1
			this.getOrderDeetail(this.paramFn())
		},
		//上拉刷新
		onPullDownRefresh() {
			this.resetPage()
			this.List = []
			this.getOrderDeetail(this.paramFn(), () => uni.stopPullDownRefresh())
		},
		methods: {
			paramFn() {
				//根据订单类型判断：订单状态和支付支付
				let { status,isPay,type,isPaying} = this
				let params = {}
				if (type === 'pay') {
					params.isPay = isPay
				} else {
					if(status !=''){
						params.status = status
					}
					if (isPaying.includes(status)) {
						params.isPay = 1 //如果是检测中，检测完成，已完成。则代表已支付
					}
				}
				return params
			},
			async getOrderDeetail(params = {}, cb) {
				uni.showLoading({title: '数据加载中...',})
				let {page,size} = this.paging
				let param = {
					page: page,
					size: size,
					"extra": {
						"type": this.typeActive, //类型 
						...params
					},
				}
				this.loading = true
				const {data: res} = await uni.$http.post('user/order/list', param);
				this.loading = false
				uni.hideLoading()
				cb && cb()
				if (isSuccess(res.code)) {
					this.List = [...this.List, ...res?.data.extra || []]
					this.total = res?.data?.total || 0
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			},
			//tab切换
			tabChange(item, i) {
				if (this.active === i) return
				this.active = i
				this.resetPage()
				this.List = []
				this.type = item.key
			
				//判断订单状态和支付状态
				if (item.key === "pay") {
					this.isPay = item.val
				} else {
					//如果是全部则清空支付状态
					if(item.val == 0){
						this.isPay = ''
						this.status = ''
					}else{
						this.status = item.val
					}

				}
				this.getOrderDeetail(this.paramFn())
			},
			typeChange(item) {
				if (this.typeActive === item.key) return
				this.typeActive = item.key
				this.List = []
				this.active = 0
				this.resetPage()
				this.getOrderDeetail()
			},

			goDetail(item) {
				uni.navigateTo({
					url: `/subpages/pages/orderDetail/index?id=${item.Orderno}`,
				})
			},
			//预测结果
			clickResult(item, type) {
				if (type === 'open') {
					this.$refs.resultRef.$refs.popup.open()
				} else {
					this.$refs.resultRef.$refs.popup.close()
				}
			},
			//支付
			clickPay(item, type) {
				this.Orderno = item.Orderno

				if (type === 'open') {
					this.$refs.payRef.$refs.popup.open()
				} else {
					this.$refs.payRef.$refs.popup.close()
				}

			},
			//支付
			comfirmPay() {
				this.$refs.payRef.$refs.popup.close()
				this.List = []
				this.resetPage()
				this.getOrderDeetail(this.paramFn())
			},
			//重置分页
			resetPage(){
				this.paging.page = 1
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

	.top {
		position: sticky;
		top: 0px;
		z-index: 10;
		background-color: $uni-border-color;
	}

	.typeBar {
		justify-content: space-between;
		width: 300rpx;
		margin: 0 auto;
		padding: 10px;
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
		padding: 8px 0px;
	}

	.price {
		font-size: 16px;
		font-weight: 600;
		color: #d42f2f;
	}

	.discount {
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

	.popBox {
		padding: 10px 10px;
		width: 500rpx;
		min-height: 200px;
	}

	.close {
		font-size: 16px;
		text-align: right;
		line-height: 30px;
	}

	.popup-title {
		font-weight: 600;
		font-size: 14px;
		text-align: center;
		display: block;
	}
</style>