<template>
	<!-- 在线下单 -->
	<view class="subscribe-wrap">
		<view class="title">
			检测样品 <text class="tip"><text class="color-red">*</text>以下均为必填选项，请认真填写</text>
		</view>
		<view class="content">
			<view class="item">
				<view class="label">样品名称：</view>
				<input class="uni-input" placeholder="请输入样品名称" :value="baseFrom.sample_name" :disabled="disable"
					@input="(e)=>inputChange(e,'sample_name')" />
			</view>
			<view class="item">
				<view class="label">主要成分：</view>
				<input class="uni-input" placeholder="请输入主要成分" :value="baseFrom.chenfeng" :disabled="disable"
					@input="(e)=>inputChange(e,'chenfeng')" />
			</view>
		</view>
		<view>
			<view class="title">使用优惠券</view>
			<view class="content">
				<my-couponid :List="couponList" select="0" @tabChange="tabChange"/>
			</view>
		</view>

		<view class="content">
			<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
        @success="success" @fail="fail" file-extname="png,jpg" :limit="1" :list-styles="listStyles">
				<button class="submit">上传附件</button>
			</uni-file-picker>
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
		<my-pay @closePopUp="clickPay('close')" ref="payRef" @comfirmPay="comfirmPay" />
	</view>
</template>

<script>
	import { mapState,mapMutations} from 'vuex'
	import { checkMap,isSuccess,errorTip} from '../../util/index.js'
	export default {
		name: "order-in-line",
		data() {
			return {
				listStyles:{
					// 是否显示边框
					border: false,
					// 是否显示分隔线
					dividline: false,
					// 线条样式
					borderStyle: {
						width:0,
						color:'blue',
						radius:2
					}
				},
				checkMap,
				disable: false,
				showConfirm: false,
				payState: false,
				baseFrom: {
					sample_name: '',
					chenfeng: '',
				},
				tip: {
					sample_name: '请输入样品名称',
					chenfeng: '请输入成分',
				},
				clickTime: 0,
				couponList: [{
						name: '无可用优惠券',
						id: 0
					},
					{
						name: '优惠券',
						id: 2
					},
					{
						name: '优惠券',
						id: 3
					},
				],
				clickCountPrice: false,
				imageValue: []
			};
		},
		computed: {
			...mapState('m_purchase', ['purchaseInfo', 'disable'])
		},
		props: {
			productDetail: {
				type: Object,
				default: {}
			}
		},
		methods: {
			inputChange(e, type) {
				this.baseFrom[type] = e.detail.value
			},
			changeInfo() {
				//重置按钮状态
				this.clickCountPrice = false
				this.disable = false
				this.showConfirm = false
				this.clickTime = 0
			},

			//计算价格
			countPrice() {
				console.log(this.productDetail)
				console.log('--计算价格3-')
				let result = this.checkMap(this.baseFrom, this.tip)
				if (!result) return
				//先走计算价格的接口
				this.clickCountPrice = true
			},

			async submit() {
				this.clickTime = this.clickTime + 1 //点击次数
				this.showConfirm = true //修改信息按钮
				this.disable = true //确认信息
				if (this.clickTime === 2) {
					let { Code } = this.productDetail.product
					let { chenfeng,time,startTime,endTime} = this.baseFrom
					let param = {
						Item: {
							ProductCode: Code,
							SampleComponent: chenfeng,
						},
						TotalPrice: 100, //这里后期需要计算
						CouponID: 0, //优惠券id  如果没有优惠券传 0

					}
					console.log(param)
					const { data: res } = await uni.$http.post('user/order/add', param);
					if (isSuccess(res.code)) {
						this.showConfirm = false
						if (!this.showConfirm && this.disable) {
							this.payState = true
						} else {
							this.payState = false
						}
					} else {
						this.clickTime = 0
						return uni.$showMsg(res.message, 1500)
					}
				}
			},
			//完成支付
			clickPay(item, type) {
				if (type === 'open') {
					this.$refs.payRef.$refs.popup.open()
				} else {
					this.$refs.payRef.$refs.popup.close()
				}

			},
			// 获取上传状态
			   select(e){
					 	console.log('选择文件：', e)
			        const tempFilePaths = e.tempFilePaths;
			        //获取图片临时路径
			        const imgUrl=tempFilePaths[0]
			        uni.uploadFile({
			          //图片上传地址
			          url: 'https://story.nabaiyu.com/apitest/admin/api.upload/file.html', 
			          filePath: imgUrl,
			          //上传名字，注意与后台接收的参数名一致
			          name: 'imgUrl',
								formData: {
									uptype:'',
									safe:'0',
								},
								
			          //设置请求头
			          header:{"Content-Type": "multipart/form-data"},
			          //请求成功，后台返回自己服务器上的图片地址
			          success: (uploadFileRes) => {
									console.log(uploadFileRes)
			            // console.log('uploadFileRes',JSON.parse(uploadFileRes.data));   
			            // //处理数据
			            // const path=JSON.parse(uploadFileRes.data)
			            // //赋值，前端渲染
			            // this.baseFormData.photo=path.imgUrl
			          }
			        });
			      },
			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.subscribe-wrap {
		background-color: #fff;
	}

	.content {
		padding: 10px;
		font-size: 14px;
	}

	.title {
		color: $uni-color-primary;
		font-weight: bold;
		background-color: $uni-bg-primary;
		padding: 10px;
	}

	.item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.tip {
		font-size: 12px;
		margin-left: 40rpx;
	}

	.color-red {
		color: $uni-color-price;
	}

	.label {
		width: 100px;
	}

	.uni-input {
		border-bottom: 1px solid $uni-border-color;
		line-height: 30px;
		height: 30px;
		flex: 1;
	}

	.btn-group {
		display: flex;
		justify-content: center;
		width: 50%;
		margin: 0 auto;
	}

	.submit {
		background-color: $uni-color-primary;
		color: #fff;
		font-size: 14px;
	}

	.default {
		background-color: $uni-border-color;
		color: #333;
	}

	.price {
		background-color: $uni-color-price;
		color: #fff;
		border-radius: 50px;
		padding: 2px 10px;
	}

	.countPrice {
		color: $uni-color-price;
	}
</style>
