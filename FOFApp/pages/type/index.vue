<template>
	<view class="cart">
		<view class="scroll-item">
			<view class="scroll-he">
				<scroll-view scroll-x="true" class="scroll-X" show-scrollbar="false">
					<view class="tabBar">
						<view class="tab-item" v-for="(item) in catesList" :key="item.ID">
							<view :class="['text',item.ID === active ? 'active' : '']" @click="tabChange(item)">{{item.Name}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
<!-- 			<view class="drop" @click="open">
				<uni-icons type="top" size="16" color="#999" v-show="showPop"></uni-icons>
				<uni-icons type="bottom" size="16" color="#999" v-show="!showPop"></uni-icons>
			</view> -->
<!-- 			<view class="pop-item" @click="showPop = false" v-show="showPop">
				<view class="child-tabBar">
					<view class="child-tab-item" v-for="(item) in catesList" :key="item.ID">
						<view :class="['child-text',item.ID === active ? 'child-active' : '']" @click="tabChange(item)">
							{{item.Name}}
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<scroll-view>
			<view class="my-order">
				<view class="order-item" v-for="(item,i) in List" :key="item.ID" @click="goDetail(item)">
					<view class="row-2">
						<view class="left-item">
							<image :src="item.Cover" class="pd-img" mode="widthFix"></image>
						</view>
						<view class="right-item">
							<view class="name">{{item.Name}}</view>
							<view class="price">¥{{item.Price}}</view>
							<view class="state">服务次数：{{item.ServiceNum}}次</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {isSuccess} from '../../util/index.js'
	export default {
		data() {
			return {
				showPop: false,	
				active: 'all',
				queryObj: {
					page: 1,
					size: 10,
					"extra": {
					
					}
				},
				total: 0,
				loading: false,
				catesList: [],
				// '理化性能', '元素组成', '力学性能', '样品制备', '其他']
				List: []
			}
		},
		async onLoad() {
			await this.getcates()
			this.getList()
		},
		onReachBottom() {
			let {page,size} = this.queryObj
			if (size * page >= this.total) return uni.$showMsg('数据加载完毕！', 1000)
			if (this.loading) return
			this.queryObj.page += 1
			this.getList()
		},
		//上拉刷新
		onPullDownRefresh() {
			this.queryObj.page = 1
			this.List = []
			this.getList(() => uni.stopPullDownRefresh())
		},
		methods: {
			async getcates(){
				const {data: res} = await uni.$http.post('product/cates');
				if (isSuccess(res.code)){
					let all = [{Name:'全部',ID:'all'}]
					this.catesList =[...all,...res?.data || []] 
				}
				
			},
			async getList(cb) {
				uni.showLoading({
					title: '数据加载中...',
				})
				this.loading = true
				const {
					data: res
				} = await uni.$http.post('product', this.queryObj);
				this.loading = false
				cb && cb()
				uni.hideLoading()
				if (isSuccess(res.code)) {
					this.total = res.data.total || 0
					this.List = [...this.List, ...res?.data?.extra?.list || []]
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			},
			//tab切换
			tabChange(item) {
				let ID = item.ID
				if (this.active === ID) return
				this.active = ID
				if(ID === 'all'){
					this.queryObj.extra ={}
				}else{
					this.queryObj.extra.cateid = ID
				}
				this.List = []
				this.queryObj.page = 1
				this.getList()
			},
			goDetail(item) {
				uni.navigateTo({
					url: `/subpages/pages/productDetail/index?id=${item.ID}`,
				})
			},
			open() {
				this.showPop = !this.showPop
			},
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-item {
		display: flex;
		width: 100%;
		position: relative;
	}

	.scroll-he {
		overflow: hidden;
		height: 48px;
	}

	.pop-item {
		position: absolute;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .1);
		z-index: 100;
	}

	.child-tabBar {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 10px;
		font-size: 12px;
		text-align: center;
		justify-content: space-between;
		background: $uni-color-write
	}

	.child-tabBar:after {
		// 使用伪类元素占据单位，不影响页面
		content: "";
		height: 0;
		min-width: 60px;
	}

	.child-text {
		min-width: 60px;
		padding: 4px 2px;
		margin-bottom: 6px;
		background-color: #f5f3f3;
		border-radius: 20px;
		margin-right: 4px;
		border: 1px solid transparent;
	}

	.child-active {
		border: 1px solid $uni-color-primary;
		color: $uni-color-primary;
		border-radius: 20px;
		background-color: $uni-color-write;
	}

	.drop {
		width: 30px;
		height: 30px;
		position: absolute;
		right: 0px;
		top: 13px;
		background: #fff;
		text-align: center;
		line-height: 30px;
		box-shadow: 2px 2px 2px 2px #f1ebec;
	}

	.scroll-X {
		white-space: nowrap;
		width: 100%;
		margin-right: 30px;
		height: 56px;
	}

	.cart {
		min-height: 100vh;
		background: $uni-color-write;
	}

	.tabBar {
		display: flex;
		font-size: 14px;
		color: #787878;
		padding: 20px 0px 0px 10px;
		justify-content: space-between;
	}

	.tab-item {
		width: 80px;
	}

	.text {
		border-bottom: 2px solid transparent;
		padding: 0px 10px 6px 10px;
	}

	.tab-item:last-child .text {
		margin-right: 36px;
	}

	.active {
		color: $uni-color-primary;
		border-bottom: 2px solid $uni-color-primary;
	}

	.order-item {
		background-color: #fff;
		margin-bottom: 10px;
		padding: 10px;
		border-bottom: 1px solid #eae8e8;
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
		font-size: 12px;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.state {
		font-size: 12px;
		color: #888;
	}

	.price {
		font-size: 16px;
		font-weight: 600;
		color: #d42f2f;
		padding: 8px 0px;
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
</style>
