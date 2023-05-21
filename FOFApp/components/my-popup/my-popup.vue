<template>
	<view>
		<uni-popup ref="popup" type="center" :mask-click="false">
			<view class="popup-box">
				<view class="popup-text">
					<view class="title-box">
						<view class="close" @click="close"><uni-icons type="closeempty" size="20" color="#999"></uni-icons></view>
						<view class="title">{{title}}</view>
					</view>
					<view v-html="content" style="max-height: 600rpx;"></view>
					<slot></slot>
				</view>
				<button @click="clickBtnItem" class="btn-know" :disabled="disabled" v-if="btnText">{{btnText}}</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"my-popup",
		data() {
			return {
			}
		},
		methods: {
			close() {
				this.$emit('closePopUp')
			},
			clickBtnItem(){
				this.$emit('clickBtnItem')
			}
		},
		props:{
			content:{
				type:String,
				default:''
			},
			disabled:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:''
			},
			btnText:{
				type:String,
				default:''
			},
		}
	}
</script>

<style lang="scss" scoped>
	.popup-text {
		padding: 10px 10px 20px 10px;
		overflow: auto;
	}

	.popup-box {
		font-size: 14px;
		color: #4d4d4d;
		width: 600rpx;
		background-color: #fff;
		border-radius: 8px;
		overflow: hidden;
		padding-bottom: 20px;
		display: flex;
		flex-direction: column;
	}
	.btn-know{
		font-size: 12px;
		background-color: $uni-color-primary;
		border-radius: 0px;
		padding: 2px;
		color: #fff;
		min-width:70px;
		border-radius: 6px;
	}
	.close{
		text-align: right;
	}
	.title{
		font-weight: bold;
		text-align: center;
	}
	.title-box{
		margin-bottom: 10px;
	}
</style>