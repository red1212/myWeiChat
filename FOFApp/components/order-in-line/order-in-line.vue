<template>
	<!-- 在线下单 -->
	<view class="subscribe-wrap">
		在线下单
		<view class="title">
		  检测样品 <text class="tip"><text class="color-red">*</text>以下均为必填选项，请认真填写</text>
		</view>
		<view class="content">
			<view class="item">
				<view class="label">主要成分：</view>
				<input class="uni-input" placeholder="请输入主要成分" :value="baseFrom.chenfeng" :disabled="disable" @input="(e)=>inputChange(e,'chenfeng')"/>
			</view>
			<view class="item">
				<view class="label">预约时长（小时）：</view>
				<input class="uni-input" type="digit" :value="baseFrom.time" :disabled="disable" @input="(e)=>inputChange(e,'time')"/>
			</view>
			<view class="item">
				<view class="label" style="width: 80px;">开始时间：</view>
				<uni-datetime-picker v-model="startTime" :disabled="disable" @change="(e)=>inputChange(e,'startTime')" />
			</view>
		<view class="item">
			<view class="label" style="width: 80px;">结束时间：</view>
			<uni-datetime-picker v-model="endTime" :disabled="disable" @change="(e)=>inputChange(e,'endTime')" />
		</view>
		</view>
		<view>
			<view class="title">预约须知</view>
			<view class="content" v-html="productDetail.product.Content3"></view>
		</view>
		
		<view>
			<view class="title">使用优惠券</view>
			<view class="content">
				<my-couponid :couponList="couponList"/>
			</view>
		</view>
		
		<view>
			<view class="title">明细菜单</view>
			<view class="content">
				<text>预约费用：</text><text class="price">￥500</text>
			</view>
			<view class="content" style="font-size: 16px;">
				<text>费用总计：</text><text class="countPrice">500元</text>
			</view>
		</view>
		<view class="btn-group" v-if="!clickCountPrice">
			<button @click="countPrice" class="submit">计算价格</button>
		</view>
		<view class="btn-group" v-else>
			<button @click="changeInfo" class="submit default" v-show="showConfirm">修改信息</button>
			<button @click="submit" class="submit" v-show="!payState">确认下单</button>
			<button @click="clickPay('','open')" class="submit" v-show="payState">完成支付</button>
		</view>
		<my-pay @closePopUp="clickPay('close')" ref="payRef" @comfirmPay="comfirmPay"/>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {checkMap,isSuccess,errorTip} from '../../util/index.js'
	export default {
		name:"order-in-line",
		data() {
			return {
				checkMap,
				disable:false,
				showConfirm:false,
				payState:false,
				baseFrom:{
					chenfeng:'',
					time:'',
					startTime:'',
					endTime:''
				},
				tip:{
					chenfeng:'请输入成分',
					time:'请输入预约时长',
					startTime:'请选择开始时间',
					endTime:'请选择结束时间'
				},
				clickTime:0,
				couponList:[
					{name:'无可用优惠券',id:0},
					{name:'优惠券',id:2},
					{name:'优惠券',id:3},
				],
				clickCountPrice:false
			};
		},
		computed:{
		...mapState('m_purchase',['purchaseInfo','disable'])	
		},
		props:{
			productDetail:{
				type: Object,
				default: {}
			}	
		},
		methods:{
			inputChange(e,type){
				if(type === 'startTime' || type === 'endTime'){
					this.baseFrom[type] = e
				}else{
					this.baseFrom[type] = e.detail.value
				}
			},
			changeInfo(){
				//重置按钮状态
				this.clickCountPrice=false
				this.disable = false
				this.showConfirm = false
				this.clickTime = 0
			},
			
			//计算价格
			countPrice(){
				console.log(this.productDetail)
				console.log('--计算价格3-')
				let result = this.checkMap(this.baseFrom,this.tip)
				if(!result) return
				//先走计算价格的接口
				this.clickCountPrice=true
			},
			
			async submit(){
				this.clickTime = this.clickTime + 1 //点击次数
				this.showConfirm = true  //修改信息按钮
				this.disable = true   //确认信息
				if(this.clickTime === 2){
				let {Code} = this.productDetail.product
				let {chenfeng,time,startTime,endTime} = this.baseFrom
				let param={
					Item:{
						ProductCode:Code,
						SampleComponent:chenfeng,
						SampleNumber:Number(time),  //预约时长
						StartTime:startTime,
						EndTime:endTime
					},
					TotalPrice:100,  //这里后期需要计算
					CouponID: 0, //优惠券id  如果没有优惠券传 0
					
				}
				console.log(param)
				const { data: res }= await uni.$http.post('user/order/book',param);
				if(isSuccess(res.code)){
					this.showConfirm = false
					if(!this.showConfirm && this.disable){
						this.payState = true
					}else{
						this.payState = false
					}
				}else{
					this.clickTime = 0
					return uni.$showMsg(res.message,1500) 
				}
				}
			},
			//完成支付
			clickPay(item,type){
				if(type === 'open'){
					this.$refs.payRef.$refs.popup.open()
				}else{
					this.$refs.payRef.$refs.popup.close()
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
.subscribe-wrap{
	background-color: #fff;
}
.content{
	padding:10px;
	font-size: 14px;
}
.title{
	color: $uni-color-primary;
	font-weight: bold;
	background-color:$uni-bg-primary;
	padding:10px;
}
.item{
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}
.tip{
	font-size: 12px;
	margin-left: 40rpx;
}
.color-red{
	color: $uni-color-price;
}
.label{
	width: 126px;
}
.uni-input{
	border-bottom: 1px solid $uni-border-color;
	line-height: 30px;
	height: 30px;
	flex:1;
}

.btn-group{
	display: flex;
	justify-content: center;
	width: 50%;
	margin: 0 auto;
}
.submit{
	background-color: $uni-color-primary;
	color: #fff;
	font-size: 14px;
}
.default{
	background-color: $uni-border-color;
	color: #333;
}
.price{
	background-color: $uni-color-price;
	color: #fff;
	border-radius: 50px;
	padding:2px 10px;
}
.countPrice{
	color: $uni-color-price;
}
</style>