<template>
	<view>
		<uni-popup ref="popup" type="center" :mask-click="false">
			<view class="popup-box">
				<view class="popup-text">
					<view class="title-box">
						<view class="title">{{title}}</view>
						<view class="close" @click="close"><uni-icons type="closeempty" size="20" color="#999"></uni-icons></view>
					</view>
					<slot></slot>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"pay",
		data() {
			return {
			}
		},
		methods: {
			close() {
				this.$emit('closePopUp')
				// this.$refs.popup.close()
			},
		},
		props:{
			title:{
				type:String,
				default:''
			},
		}
	}
</script>

<style lang="scss" scoped>
	.popup-text {
		padding: 20px 10px;
		max-height: 500rpx;
		overflow: auto;
	}

	.popup-box {
		font-size: 14px;
		color: #4d4d4d;
		width: 580rpx;
		background-color: #fff;
		border-radius: 8px;
		overflow: hidden;
		padding-bottom: 10px;
		display: flex;
		flex-direction: column;
	}
	.title{
		margin-right: 194rpx;
		font-weight: bold;
	}
	.title-box{
		display: flex;
		justify-content: flex-end;
		margin-bottom: 10px;
	}
</style>