<template>
	<view class="wrap">
		<view class="logo">
			<logo width="336" height="80"/>
		</view>
		<phoneLogin v-show="isLogin"></phoneLogin>
		<register v-show="!isLogin"></register>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapState('m_users',['isLogin'])
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		background-color: $uni-color-write;
		padding-top: 100rpx;
	}

	.logo {
		text-align: center;
	}

</style>
