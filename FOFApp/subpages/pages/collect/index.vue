<template>
	<view class="collect-wrap">
		<uni-swipe-action class="collect">
			<view v-for="(item,i) in collectList" :key="i" class="block">
				<uni-swipe-action-item :right-options="options" :left-options="options" @click="()=>onClick(item)">
					<view class="collect-item">
						<view class="left-item">
							<image :src="item.Product.Cover" class="left-img" mode="widthFix"></image>
						</view>
						<view class="right-item">
							<view>
								<text class="name">{{item.Product.Name || '---'}}</text>
								<view class="desc">{{item.desc}}</view>
							</view>
							<view class="price">¥ {{item.Product.Price || '---'}}</view>
						</view>
					</view>
				</uni-swipe-action-item>
			</view>
			<view v-if="collectList.length === 0">
				<no-data />
			</view>
		</uni-swipe-action>
	</view>
</template>

<script>
	import {isSuccess} from '../../../util/index.js'
	export default {
		data() {
			return {
				paging:{
					page:1,
					size:10
				},
				total:0,
				options: [{
					text: '取消收藏',
					style: {
						backgroundColor: '#0e67a9'
					}
				}],
				collectList: [],
				loading: false,
			}
		},
		 onLoad(){
			this.getList()
		},
		methods: {
			onReachBottom() {
				let { page,size } = this.paging
				if (size * page >= this.total) return uni.$showMsg('数据加载完毕！', 1000)
				if (this.loading) return
				this.paging.page += 1
				this.getList()
			},
			//上拉刷新
			onPullDownRefresh() {
				this.resetPage()
				this.paging.page = 1
				this.collectList = []
				this.getList(() => uni.stopPullDownRefresh())
			},
			async getList(cb){
				uni.showLoading({
				  title: '数据加载中...',
				})
				this.loading = true
				const { data: res }= await uni.$http.post('user/mark/list',this.paging);
				this.loading = false
				uni.hideLoading()
				cb && cb()
				if(isSuccess(res.code)){
					this.total = res.data.total
					this.collectList = [...this.collectList,...res.data.extra || []]
				}else{
					return uni.$showMsg(res.message,1500) 
				}
			},
			//取消收藏
			async onClick(item) {
				const { data: res }= await uni.$http.post('user/mark/del',{ProductId:item.Product.ID});
				if(isSuccess(res.code)){
					uni.$showMsg('取消成功',1500) 
					this.collectList = []
					this.paging.page = 1
					this.getList()
				}else{
					return uni.$showMsg(res.message,1500) 
				}
			},
		}

	}
</script>

<style scoped>
	.collect-wrap {
		min-height: 100vh;
		background-color: #fff;
	}

	.collect-item {
		display: flex;
		align-items: center;
	}

	.block {
		margin-bottom: 10px;
		border-bottom: 1px dashed #ccc;
		padding-bottom: 10px;
		padding-right: 10px;
	}

	.name {
		color: #333;
		font-weight: bold;
		font-size: 14px;
	}

	.desc {
		font-size: 13px;
		color: #666;
		margin: 8px 0px;
	}

	.price {
		color: #d42f2f;
		font-size: 16px;
		font-weight: 600;
	}

	.left-item {
		width: 105px;
		height: 100px;
		display: flex;
		align-items: center;
	}

	.left-img {
		display: inline-block;
		vertical-align: middle;
		max-height: 100%;
		max-width: 100%;
	}

	.right-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
