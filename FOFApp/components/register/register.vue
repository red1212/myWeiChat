<template>
	<view class="wrap">
		<view class="login-box">
			<view class="tab-bar">
				<view class="active">
					注册
				</view>
			</view>
			<view class="login-account">
				<view class="uni-input-wrapper">
					<input class="uni-input" type="number" maxlength="11" placeholder="请输入手机号" :value="baseFrom.phone" @input="(e)=>inputChange(e,'phone')" />
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="text" placeholder="姓名" :value="baseFrom.username" @input="(e)=>inputChange(e,'username')" />
				</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="email" placeholder="邮箱" :value="baseFrom.email" @input="(e)=>inputChange(e,'email')" />
			</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="text" placeholder="单位名称" :value="baseFrom.companyAddr" @input="(e)=>inputChange(e,'companyAddr')" />
			</view>
			<view>
				<radio-group @change="groupRadioChange" class="radioItem">
					 <view v-for="(item,index) in typeList" :key="index">
						 <radio :value="item.value" :checked="index == companyType"  class="radio" color="#0e67a9"/>
						 <text class="radio-name">{{item.name}}</text>
					 </view>
				 </radio-group>
			 </view>
			 <view class="uni-input-wrapper">
			 	<input class="uni-input" password placeholder="请设置密码" :value="baseFrom.password" @input="(e)=>inputChange(e,'password')" />
			 </view>
			 <view class="uni-input-wrapper">
			 	<input class="uni-input" password placeholder="请确认密码" :value="baseFrom.confirmpassword" @input="(e)=>inputChange(e,'confirmpassword')" />
			 </view>
			 <view class="user-agree">
			 	<my-radio :checked="baseFrom.checked"  @radioChange="(e)=>radioChange(e)"></my-radio>
			 	<navigator url="/subpages/pages/login/userAgree">同意用户注册协议</navigator>
			 </view>
				<button type="primary" @click="submit()" class="btn-submit">注册</button>
			</view>
			<view class="tip-box">
				<view class="tip" @click="goLogin">
					已有帐号？请登录
				</view>
			</view>
			<view class="logo-tip">登录即代表您已同意<text class="tip">《服务协议和隐私政策》</text></view>
		</view>
	</view>
</template>
<script>
	import {mapMutations} from 'vuex'
	import {isSuccess,errorTip} from '../../util/index.js'
	export default {
		name:"register",
		data() {
			return {
				companyType: '0',
				showPassword: true,
				typeList: [
					{
						value:'0',
						name:'高校',
						checked:true
					},
					{
						value:'1',
						name:'企业',
					},
					{
						value:'2',
						name:'科研',
					}
				],
				baseFrom:{
					phone: '',
					password: '',
					confirmpassword:'',
					username: '',
					email:'',
					companyAddr:'',
					checked:true,
				},
				map:{
					'phone':'请输入手机号',
					'username':'请输入姓名',
					'email':'请输入邮箱',
					'password':'请输入密码',
					"confirmpassword":'请输入确认密码',
					"checked":"请勾选用户注册协议"
				}
			}
		},
		methods: {
			...mapMutations('m_users',['updateIsLogin','updateUserInfo','updateToken']),
			goLogin(){
				this.updateIsLogin(true)
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
				this.baseFrom[type] = event.detail.value
			},
			groupRadioChange(evt){
				this.companyType = evt.detail.value
			},
			radioChange(){
				this.checked = !this.checked
			},
			async submit() {
				let {phone,confirmpassword,password} = this.baseFrom
				let duration = 1500
				for ( let i in this.baseFrom) {
					if(this.baseFrom[i] ===''){
						return uni.$showMsg(this.map[i], duration)
					}
				}
				
				if (phone.length < 11) return uni.$showMsg('请输入正确的手机号', duration)
				if(password.length < 8) return uni.$showMsg('请设置不少于八位的密码', duration)
				if(password != confirmpassword) return uni.$showMsg('两次密码不一致', duration)
				let companyName = this.typeList.filter(item=>item.value === this.companyType)
				let params = {
					...this.baseFrom,
					companyType:companyName && companyName[0].name,
					"pid1": 0 
				}
				const { data: res }= await uni.$http.post('user/register', params);
				if(isSuccess(res.code)){
					this.updateToken(res.data.token)
					this.updateUserInfo(res.data.user)
					uni.switchTab({
						url:'/pages/my/index'
					})
				}else{
					return uni.$showMsg(res.message,1500) 
				}
			},
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
		padding-bottom: 20px;
	}

	.active {
		padding-bottom: 4px;
		font-size: 14px;
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

	.radioItem{
		display: flex;
		justify-content: space-between;
	}
	.radio{
		margin-top:20px;
	}
	.radio-name{
		font-size: 12px;
		margin-left: 4px;
	}
	.user-agree{
		display: flex;
		font-size: 12px;
		align-items: center;
		margin-top:20px;
		color: $uni-color-primary;
	}
</style>
