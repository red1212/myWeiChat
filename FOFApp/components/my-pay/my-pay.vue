<template>
	<view>
		<uni-popup ref="popup" type="center" :mask-click="false">
			<view class="popup-box">
				<view class="popup-text">
					<view class="title-box">
						<view class="close" @click="close">
							<uni-icons type="closeempty" size="20" color="#999"></uni-icons>
						</view>
						<view class="title">选择支付方式</view>
					</view>
					<view class="pay-list">
						<view class="pay-item" v-for="(item,i) in payStyle" :key="i" @click="choosePay(item)">
							<view class="icon">
								<uni-icons :type="item.icon" size="30" color="#fff"></uni-icons>
							</view>
							<view>{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
			<my-popup title="填写验证码" ref="vertiyRef" btnText="确认支付" @closePopUp="clickVertiy('close')"
				@clickBtnItem="comfirmPay" :disabled="disable">
				<view class="uni-input-wrapper">
					<input class="uni-input" maxlength="6" type="text" :value="code"
						@input="(e)=>{this.code = e.detail.value}" placeholder="请输入验证码" style="flex:1" />
					<view>
						<button type="primary" @click="sendCode()" class="send-code" v-show="!sendCodeState">
							发送验证码
						</button>
						<button type="primary" class="send-code" v-show="sendCodeState">{{time}}秒重新获取</button>
					</view>
				</view>
			</my-popup>
		</uni-popup>

	</view>
</template>

<script>
	export default {
		name: "my-pay",
		data() {
			return {
				code: '',
				time: 60,
				sendCodeState: false,
				timer: null,
				payStyle: [{
						name: '余额支付',
						icon: 'wallet',
					},
					{
						name: '信用支付',
						icon: 'shop',
					},
					{
						name: '微信支付',
						icon: 'weixin',
					}
				],
				disable: true
			}
		},
		watch: {
			code: function(val) {
				this.disable = val ? false : true
			}
		},
		methods: {
			sendCode() {
				this.timer && clearInterval(this.timer)
				this.sendCodeState = true
				this.timer = setInterval(() => {
					if (this.time <= 0) {
						clearInterval(this.timer)
						this.time = 60
						this.sendCodeState = !true
						return
					}
					this.time = this.time - 1

				}, 1000)
			},
			close() {
				this.$emit('closePopUp')
				// this.$refs.popup.close()
			},
			choosePay(item) {
				if(item.name !='微信支付'){
					this.$refs.vertiyRef.$refs.popup.open()
				}else{
					//这里调用微信支付
				}
				
			},
			clickVertiy(type) {
				this.$refs.vertiyRef.$refs.popup.close()
				this.code = ''
				this.timer && clearInterval(this.timer)
				this.time = 60
				this.sendCodeState= false
			},
			//确认支付
			comfirmPay() {
				console.log(this.code)
				this.$emit('comfirmPay')
				this.clickVertiy()
			}
		},
	}
</script>

<style lang="scss" scoped>
	.popup-text {
		padding: 10px 10px 20px 10px;
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

	.btn-know {
		font-size: 12px;
		background-color: $uni-color-primary;
		border-radius: 0px;
		padding: 8px;
		color: #fff;
		min-width: 60px;
		border-radius: 6px;
	}

	.close {
		text-align: right;
	}

	.title {
		font-weight: bold;
		text-align: center;
	}

	.title-box {
		margin-bottom: 10px;
	}

	.pay-list {
		display: flex;
		justify-content: space-between;
		padding: 0px 10px;
	}

	.pay-item {
		text-align: center;
		color: #333;
		font-size: 12px;
		margin-top: 10px;
	}

	.icon {
		background-color: #1169aa;
		border-radius: 50%;
		width: 60px;
		height: 60px;
		line-height: 60px;
		margin-bottom: 8px;
	}

	.pay-item:last-child .icon {
		background-color: green;
	}

	.uni-input {
		padding: 12px 0px;
		height: 22px;
		line-height: 22px;
	}

	.uni-input-wrapper {
		border: 1px solid #ccc;
		padding: 0px 10px;
		border-radius: 6px;
		margin-top: 20px;
		font-size: 14px;
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}

	.send-code {
		background-color: $uni-color-primary;
		background-color: #0e67a9;
		font-size: 10px;
		padding: 3px 4px;
		width: 80px;
	}
</style>
