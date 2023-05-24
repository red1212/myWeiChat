<template>
	<view>
		<view class="login-box">
			<view class="tab-bar">
				<view v-for="(item,i) in tabBar" :key="i" :class="['default', i === active ? 'active' :'']"
					@click="tabChange(i)">
					{{item}}
				</view>
			</view>
			<view class="login-account">
				<view class="uni-input-wrapper">
					<input class="uni-input" type="number" maxlength="11" placeholder="请输入手机号" :value="phone"
						@input="(e)=>inputChange(e,'phone')" />
				</view>
				<view class="uni-input-wrapper" v-if="active === 0">
					<input class="uni-input" :password="showPassword" maxlength="11" type="text" :value="password"
						@input="(e)=>inputChange(e,'password')" placeholder="请输入密码" style="flex:1" />
					<view @click="showPass" class="eye-box">
						<uni-icons type="eye-slash" size="20" v-if="showPassword" color="#999"></uni-icons>
						<uni-icons type="eye" size="20" v-else color="#999"></uni-icons>
					</view>
				</view>
				<view class="uni-input-wrapper" v-else>
					<input class="uni-input" maxlength="6" type="text" :value="code" @input="(e)=>inputChange(e,'code')"
						placeholder="请输入验证码" style="flex:1" />
					<view>
						<button type="primary" @click="sendCode()" class="send-code" v-show="!sendCodeState">
							发送验证码
						</button>
						<button type="primary" class="send-code" v-show="sendCodeState" disabled="sendCodeState">{{time}}秒重新获取</button>
					</view>
				</view>
				<button type="primary" @click="submit()" class="btn-submit">登录</button>
			</view>

			<view class="tip-box">
				<view class="tip" @click="toregister">
					没有帐号？请注册
				</view>
			</view>
			<view class="logo-tip">
				登录即代表您已同意
				<text class="tip" @click="page1()">《用户协议》</text>
				和<text class="tip" @click="page2()">《隐私协议》</text>
			</view>
				
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {isSuccess} from '../../util/index.js'
	export default {
		data() {
			return {
				active: 0,
				showPassword: true,
				tabBar: ['账户登录', '短信登录'],
				phone: '',
				password: '',
				code: '',
				time:60,
				sendCodeState:false,
				timer:null,
				url:''
			}
		},
		methods: {
			...mapMutations('m_users',['updateIsLogin','updateToken','updateUserInfo']),
			page1(){
				uni.navigateTo({
					url:'/subpages/pages/userAgreement/index'
				})
			},
			page2(){
				uni.navigateTo({
					url:'/subpages/pages/privacyAgreement/index'
				})
			},
			toregister(){
				this.updateIsLogin(false)
			},
			tabChange(i) {
				if (this.active === i) return
				this.active = i
				this.password = ''
				this.code = ''
			},
			showPass() {
				this.showPassword = !this.showPassword
			},
			inputChange(event, type) {
				this[type] = event.detail.value
			},
			async sendCode(){
				this.timer && clearInterval(this.timer)
				this.sendCodeState = true
				this.timer = setInterval(()=>{
					if(this.time <=0) {
						clearInterval(this.timer)
						this.time = 60
						this.sendCodeState = !true
						return
					}
					this.time = this.time - 1
					
				},1000)
				//走接口
				let params={
						"phone": this.phone,
						"type": 2 // 枚举值参见接口说明 - 枚举 - 短信验证码
					}
				const { data: res }= await uni.$http.post('user/code/send', params);
				if(!isSuccess(res.code)){
					return uni.$showMsg(res.message,1500) 
				}
			},
			submit() {
				let {phone,password,active,code} = this
				let duration = 1500
				if (!phone) return uni.$showMsg('请输入手机号', duration)
				if (phone.length < 11) return uni.$showMsg('请输入正确的手机号', duration)
				if(active === 0){
					if (!password) return uni.$showMsg('请输入密码', duration)
					let params={
						phone,
						password
					}
					this.login('user/login/account', params)
				
				}else{
					if (!code) return uni.$showMsg('请输入验证码', duration)
					let params={phone,code}
					this.login('user/login/sms', params)
				}
			},
			async login(url,param){
				const { data: res }= await uni.$http.post(url, param);
				if(isSuccess(res.code)){
					this.updateToken(res.data.token)
					this.updateUserInfo(res.data.user)
					uni.switchTab({
						url:'/pages/my/index'
					})
				}else{
					return uni.$showMsg(res.message,1500) 
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
	}

	.default {
		font-size: 14px;
		color: #333;
		border-bottom: 2px solid transparent;
		padding-bottom: 4px;
	}

	.active {
		color: $uni-color-primary;
		border-bottom: 2px solid $uni-color-primary;
	}

	.tab-bar {
		display: flex;
		width: 200px;
		justify-content: space-around;
		margin-bottom: 20rpx;
		font-size: 14px;
	}

	.uni-input-wrapper {
		width: 500rpx;
		border: 1px solid #ccc;
		padding: 6px 10px;
		border-radius: 6px;
		margin-top: 20px;
		font-size: 14px;
		display: flex;
		height: 45px;
		box-sizing: border-box;
		align-items: center;
	}
	.eye-box {
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-submit {
		background-color: $uni-color-primary;
		margin-top: 20px;
		font-size: 14px;
		line-height: 40px;
	}

	.tip-box {
		display: flex;
		justify-content: flex-end;
		width: 500rpx;
	}

	.tip {
		color: $uni-color-primary;
		font-size: 12px;
		margin-top: 10px;
	}

	.logo-tip {
		font-size: 12px;
		color: #666;
		margin-top: 40rpx;
	}

	.send-code {
		background-color: $uni-color-primary;
		font-size: 10px;
		padding: 3px 4px;
	  width: 80px;
	}
</style>
