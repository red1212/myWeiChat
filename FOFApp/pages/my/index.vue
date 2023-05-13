<template>
	<view class="my-wrap">
		<view class="user-info">
			<view class="logo-box">
				<logo width="254" height="60" />
			</view>
			<view class="phone" v-if="isLogin()">{{userinfo.Username}}</view>
			<view class="phone" v-else @click="toLogin">点击登录</view>
		</view>
		<view class="card">
			<view v-for="(item,i) in infoList" :key="i" class="card-item" @click="goPage(item)">
				<view class="left-item">
					<uni-icons :type="item.icon" size="24" color="#999999" class="card-icon"></uni-icons>
					<!-- 	<image :src="item.icon" class="card-icon"></image> -->
					<button type="default" open-type="contact" class="card-name"
						v-if="item.name === '联系客服'">{{item.name}}</button>
					<view class="card-name" v-else>{{item.name}}</view>
				</view>
				<view class="right-item">
					<uni-icons type="right" size="20" color="#999999"></uni-icons>
				</view>

			</view>
		</view>


	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {isLogin,toLogin} from '../../util/user.js'
	export default {
		data() {
			return {
				toLogin,
				isLogin,
				infoList: [{
						name: '我的订单',
						icon: 'list',
						needLogin:true,
						url: '/subpages/pages/order/index'
					},
					// {
					// 	name: '委托团体',
					// 	icon: 'personadd',
					// 	needLogin:true,
					// 	url: '/subpages/pages/team/index'
					// },
					{
						name: '个人资产',
						icon: 'wallet-filled',
						needLogin:true,
						url: '/subpages/pages/wallet/index'
					},
					{
						name: '商品收藏',
						icon: 'star',
						needLogin:true,
						url: '/subpages/pages/collect/index'
					},
					{
						name: '关于我们',
						icon: 'contact-filled',
						url: '/subpages/pages/aboutUs/index'
					},
					{
						name: '联系我们',
						icon: 'phone',
						url: '/subpages/pages/contactUs/index'
					},
					{
						name: '联系客服',
						icon: 'headphones',
					},
					{
						name: '退出登录',
						icon: 'info',
					}
				]
			}
		},
		computed: {
			...mapState('m_users', ['userinfo'])
		},
		methods:{
			...mapMutations('m_users',['updateUserInfo','updateToken']),
			goPage(item){
				if(item.name === '退出登录'){
					this.updateUserInfo({})
					this.updateToken('')
					return uni.navigateTo({
						url:'/subpages/pages/login/index'
					})
				}
				if(item.needLogin && !this.isLogin()){
					return uni.navigateTo({
						url:'/subpages/pages/login/index'
					})
				}
				return uni.navigateTo({
						url:item.url
					})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.my-wrap {
		/* padding:20px 10px; */
	}

	.user-info {
		display: flex;
		align-items: center;
		background-color: $uni-color-write;
		padding: 30px 20px;
	}

	.logo-box {
		background-color: $uni-color-write;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
	}

	.phone {
		color: #333;
	}

	.card-item {
		display: flex;
		align-items: center;
		margin-top: 10px;
		background-color: $uni-color-write;
		border-radius: 8px;
		padding: 20px;
		justify-content: space-between;
	}

	.card-name {
		font-size: 14px;
		color: #333;
	}

	.card-icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}

	.left-item {
		display: flex;
		align-items: center;
		height: 20px;
		line-height: 20px;
		width: 100%;
	}

	.left-item button {
		background-color: $uni-color-write;
		padding: 0px;
		flex: 1;
		text-align: left;
	}

	.left-item button::after {
		border: none;
	}
</style>
