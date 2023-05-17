<template>
	<view class="buy-wrap">
		<uni-section>
			<view class="buy-box">
				<weituo :disabled="disable"/>
				<view style="margin-bottom: 10px;">邮寄地址：{{productDetail.product.MailingAddress || '--'}}</view>
			</view>
		</uni-section>
		<!-- 普通下单 -->
		<view class="subscribe-wrap">
			<view v-for="(item,i) in renderSampleArr" :key="i">
				<view class="title">
					{{NumberToFormat[i]}}检测样品 <text class="tip"><text class="color-red">*</text>以下均为必填选项，请认真填写</text>
				</view>
				<view class="content">
					<view class="item">
						<view class="label">1.样品名称：</view>
						<input class="uni-input" placeholder="请输入样品名称" :value="SampleArr[i].sample_name" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_name')" />
					</view>
					<view class="item">
						<view class="label">2.主要成分：</view>
						<input class="uni-input" placeholder="请输入主要成分" :value="SampleArr[i].sample_component" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_component')" />
					</view>
					<view class="item">
						<view class="label">3.样品形态：</view>
						<view class="flex flex1"><my-tab :List="productDetail.sample_form || []" :select="SampleArr[i].sample_form" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_form')"/></view>
					</view>
					<view class="item">
						<view class="label">4.样品性质：</view>
						<view class="flex flex1 flex-column">
							<view><my-tab :List="productDetail.sample_nature || [] " :select="SampleArr[i].sample_nature" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_nature')"/></view>
							<view class="sample_nature_tip"><span style="color: red;">*</span>如因隐瞒样品属性对检测仪器或人员造成危害，后果由委托方承担</view>
						</view>
					</view>
					<view class="item">
						<view class="label">5.保存条件：</view>
						<view class="flex flex1 flex-column">
							<view><my-tab :List="productDetail.sample_storage_condition || [] " :select="SampleArr[i].sample_storage_condition" @tabChange="(sampleFormItem)=>sampleArrChange(sampleFormItem,i,'sample_storage_condition')"/></view>
						</view>
					</view>
					<view class="item">
						<view class="label">6.测试明细：</view>
						<view class="flex flex1 flex-column">
							<view>
								<view class="flex flex-wrap wrap">
									<view v-for="(item,skus_list_index) in productDetail.skus || [] " :key="skus_list_index" :class="['row', skusComputed(item,i) ? 'select' :'']" @click="()=>skustabChange(item,i)">
										{{item.Name}}
									</view>
								</view>

							</view>
						</view>
					</view>
					<view class="item">
						<view class="label">7.样品是否回收：</view>
							<radio-group @change="(e)=>inputChange(e,i,'sample_recycle')" class="flex">
								<label v-for="(sample_recycle, index) in sample_recycle_list" :key="sample_recycle.key" class="flex" style="margin-right: 8px;">
									<view>
										<radio :value="sample_recycle.key" :checked="sample_recycle.key === SampleArr[i].sample_recycle" />
									</view>
									<view>{{sample_recycle.key}}</view>
								</label>
							</radio-group>
					</view>
					<view class="item">
						<view class="label">8.是否加急：</view>
						<view :class="['row', isUrgent(i) ? 'select' :'']" @click="handleUrgent(i)">加急</view>
					</view>
					<view class="item">
						<view class="label">9.检测样品数：</view>
						<input class="uni-input" type="digit" :value="SampleArr[i].sample_number" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_number')"/>
					</view>
					<view class="item">
						<view class="label" style="width:102px">请为样品排序：</view>
						<view>
							<input class="uni-input" :value="SampleArr[i].sample_sort" :disabled="disable" @input="(e)=>inputChange(e,i,'sample_sort')"/>
							<view class="sample_nature_tip"><span style="color: red;">*</span>如“ 1, 2…”，便于标记，以防混乱。</view>
						</view>
					</view>
					<view class="item">
						<view class="label">10.实验要求及目的：</view>
						<textarea class="textarea" placeholder-style="color:#ccc" v-model="SampleArr[i].test_purpose" :disabled="disable" @input="(e)=>inputChange(e,i,'test_purpose')" placeholder="请填写具体的测试要求，如果有参考图或者参考文献，请上传附件以备参考，如果您对此实验不太了解，请与客服沟通后再下单。"></textarea>
					</view>
				</view>
			</view>
			<view class="item content flex-column">
				<button @click="addProd" class="submit" style="width:158px;margin:0px">增加一个样品组</button>
				<view class="sample_nature_tip"><span style="color: red;">*</span>当您的检测要求或样品类型不一样时，可以再增加一组样品。</view>
			</view>
			<view>
				<view class="title">使用优惠券</view>
				<view class="content">
					<my-couponid :List="productDetail.coupons" :CouponID="CouponID" @changeCouponID="(ID)=>changeCouponID(ID)"/>
				</view>
			</view>

			<view class="content">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
					@success="success" @fail="fail" file-extname="png,jpg" :limit="1" :list-styles="listStyles">
					<button class="submit">上传附件</button>
				</uni-file-picker>
			</view>


			<view class="menu">
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

		<view style="height: 20px;"></view>
		
		<!-- 是否加急弹窗 -->
		<my-popup ref="urgentRef" @closePopUp="urgentclosePopUp" @clickBtnItem="urgentclosePopUp" btnText="确定">
			<view class="flex flex-wrap wrap">
				<view v-for="(urgentItem,urgent_list_i) in productDetail.urgents || [] " :key="urgent_list_i" :class="['row', urgentComputed(urgentItem) ? 'select' :'']" style="width: 114px;" @click="()=>urgent_listtabChange(urgentItem)">
					{{urgentItem.Name}}
				</view>
			</view>
		</my-popup>
		
		<!-- 明细弹窗 -->
		<my-popup ref="skusRef" @closePopUp="skusclosePopUp" @clickBtnItem="skusclosePopUp" btnText="确定">
			<view class="flex flex-wrap wrap">
				<view v-for="(skusList,skus_list_i) in skus_item.List || [] " :key="skus_list_i" :class="['row', skusItemComputed(skusList) ? 'select' :'']" style="width: 114px;" @click="()=>skus_listtabChange(skusList)">
					{{skusList.Name}}
				</view>
			</view>
		</my-popup>
		
		<!-- 弹窗 -->
		<my-popup ref="parentRef" :content="content" @closePopUp="closePopUp" @clickBtnItem="closePopUp" btnText="立即下单"></my-popup>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {isSuccess,errorTip,checkMap,NumberToFormat} from '../../../util/index.js'
	import { isEmpty } from 'lodash';
	export default {
		data() {
			return {
				NumberToFormat,
				content: '',
				productDetail: {},
				listStyles: {
					// 是否显示边框
					border: false,
					// 是否显示分隔线
					dividline: false,
					// 线条样式
					borderStyle: {
						width: 0,
						color: 'blue',
						radius: 2
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
				clickCountPrice: false,
				imageValue: [],
				CouponID:0,
				File:"",    //文件上传路径
				skus_index:0,
				skus_item:{},
				select_skus:[],
				obj_index:0,
				renderSampleArr:[
					{},
				],
				SampleArr:[
					{
						"sampleNum": "A",
						"sample_name": "", //样品名称
						"sample_component": "", //主要成分
						"sample_recycle": "否",  //是否回收
						"urgent_name": "", //加急项目
						"urgent_price_per": "", //加急价格
						"sample_number":'',   // 检测样品数
						"sample_sort":'',    //样品排序
						"test_purpose":'',   //实验要求及目的
						sample_sku:[
							{
								name: "XAFS硬线中能",
								price: '0',
								list:{
									'0':{
										item_id: '999',
										item_name: "含量大于5%",
										item_price: '4000',
									}
								}		
							}
						]
					},
					// {
					// 	"sampleNum": "B",
					// 	sample_sku:[
					// 		{
					// 			name: "XAFS硬---线中能",
					// 			price: 0,
					// 			list:{
					// 				'0':{
					// 					item_id: 1000,
					// 					item_name: "含量大于1%",
					// 					item_price: 4000,
					// 				}
					// 			}		
					// 		}
					// 	]
					// }
				],
				sample_recycle_list:[
					{key:'是'},
					{key:'否'}
				]

			}
		},
		computed: {
			...mapState('m_client', ['teamList']),
			...mapState('m_purchase', ['purchaseInfo']),
			//计算明细是否选中--大项
			skusComputed: function () {
				return (item,i)=>{
					let Name = item.Name
					let sampleNum = this.NumberToFormat[i]
					let isActive = false
					let res = this.SampleArr.filter((item)=>{
						return item.sampleNum == sampleNum
					})
					if(!isEmpty(res)){
						let sample_sku_item = res[0].sample_sku.filter((item)=>{
						return item.name == Name
						})
						if(!isEmpty(sample_sku_item)){
							isActive = true
						}else{
							isActive = false
						}

					}
					return isActive
				} 
			},
			//计算明细项列表样式
			skusItemComputed: function () {
				return (item)=>{
					let isActive = false
					if(this.skus_item.List){
						let Name = this.skus_item.Name
						let res = this.isCurrentItem(this.skus_index)
						if(!isEmpty(res)){
							let sample_sku_item = res[0].sample_sku.filter((item)=>{
							return item.name == Name
							})

							if(!isEmpty(sample_sku_item)){
								let sample_sku_item_child = sample_sku_item[0].list[0] || {}
								if(!isEmpty(sample_sku_item_child)){
									isActive = sample_sku_item_child.item_id == item.ID ? true : false
								}

							}
						}
					}
					return isActive
				} 
			},
			//是否加急
			isUrgent:function(){
				return (i)=>{
					let isCurrentItem_res = this.isCurrentItem(i)
					console.log(isCurrentItem_res,'--isCurrentItem_res--')
					if(!isEmpty(isCurrentItem_res)){
						let  row_item= isCurrentItem_res[0]
						if(row_item.urgent_name && row_item.urgent_price_per){
							return true
						}else{
							return false
						}
					}
				}
			},
			urgentComputed:function(){
				return (item)=>{
					let fil_sample = this.isCurrentItem(this.obj_index)
					if(!isEmpty(fil_sample)){
						if(fil_sample[0].urgent_name == item.Name && fil_sample[0].urgent_price_per == item.PricePer){
							return true
						}else{
							return false
						}
					}
				}
			}
		},

		async onLoad(option) {
			uni.showLoading({title: '数据加载中...',})
			let param = {
				ID: parseInt(option.ID)
			}
			const {data: res} = await uni.$http.post('user/order/view', param);
			uni.hideLoading()
			if (isSuccess(res.code)) {
				this.productDetail = res.data
				this.content  = res.data.product.Content2 || ''
				let coupons = res.data.coupons || []
				if (coupons.length > 0) {
					this.CouponID = coupons[0].ID
				} else {
					coupons = [{ID:0,Price:'无优惠券可用'}]
					this.CouponID = coupons[0].ID
				}
				this.SampleArr[0].sample_form = res?.data?.sample_form ? res.data.sample_form[0] : ''  //提交 样品形态

				this.SampleArr[0].sample_nature = res?.data?.sample_nature ? res.data.sample_nature[0] : ''  //提交 样品性质

				this.SampleArr[0].sample_storage_condition = res?.data?.sample_storage_condition ? res.data.sample_storage_condition[0] : ''  //提交 保存条件

				//let sample_sku = res.data?.skus || []  //提交 保存条件

				// if(sample_sku.length > 0){
				// 	let fist_sample_sku =  sample_sku[0]
				// 	let fist_list = fist_sample_sku.List[0]
				// 	this.SampleArr[0].sample_sku[0] ={
				// 		name:fist_sample_sku.Name,
				// 		price:fist_sample_sku.Price,
				// 		list:{
				// 			'0':{
				// 				item_id:fist_list.ID,
				// 				item_price:fist_list.Price,
				// 				item_name:fist_list.Name,
				// 			}
				// 		}
				// 	}
				// }
				console.log(this.SampleArr,'--------')

			
				console.log(this.renderSampleArr,'----',res.data.sample_form[0])
				this.productDetail.coupons = coupons
				// this.$refs.parentRef.$refs.popup.open()   //-----后期放开

			} else {
				return uni.$showMsg(res.message, 1500)
			}

		},
		methods: {
			...mapMutations('m_purchase', ['updatePurchaseInfo',]),
			//是否操作的当前项 ---明细
			isCurrentItem(i){
				let sampleNum = this.NumberToFormat[i]
				let res = this.SampleArr.filter((item)=>{
					return item.sampleNum == sampleNum
				})
				return res
			},
			closePopUp() {
				this.$refs.parentRef.$refs.popup.close()
			},
			changeCouponID(ID){
				this.CouponID = ID
			},
			//点击加急
			handleUrgent(i){
				if(this.disable) return 
				let isCurrentItem_res = this.isCurrentItem(i)
				this.obj_index = i
				this.$refs.urgentRef.$refs.popup.open()
					console.log(i,'------',isCurrentItem_res)
			},
			//操作加急
			urgent_listtabChange(item){
				let fil_sample = this.isCurrentItem(this.obj_index)
				if(!isEmpty(fil_sample)){
					let urgent_name = fil_sample[0].urgent_name
					let urgent_price_per = fil_sample[0].urgent_price_per
					if(urgent_name == item.Name && urgent_price_per == item.PricePer){
						//删除
						fil_sample[0].urgent_name = '',
						fil_sample[0].urgent_price_per = ''
					}else{
						//添加/修改
						fil_sample[0].urgent_name = item.Name
						fil_sample[0].urgent_price_per = item.PricePer
					}
					
					console.log(this.SampleArr,'---SampleArr---')
					this.$forceUpdate()
				}
				console.log(fil_sample)
			},
			urgentclosePopUp(){
				this.$refs.urgentRef.$refs.popup.close()
			},
			//检测明细
			skustabChange(item,i){
				this.skus_item = item
				this.skus_index = i
				this.$refs.skusRef.$refs.popup.open()
				console.log(item,i)
			},
			//添加明细
			addSkus(is_cur_opt,item){
				is_cur_opt[0].sample_sku.push({
					name:this.skus_item.Name,
					price:this.skus_item.Price +'',
					list:{
						"0":{
							item_id:item.ID +'',
							item_price:item.Price +'',
							item_name:item.Name,
							}
					}
				})
			},
			skus_listtabChange(item){
				if(this.disable) return 
				//第一 先判断点击的当前项之前知否选中
				let is_cur_opt = this.isCurrentItem(this.skus_index)
				let is_cur_id = false

				// 如果 明细选项不为空
				if(!isEmpty(is_cur_opt)){
					if(!isEmpty(is_cur_opt[0].sample_sku)){
						//如果当前操作的和已有的一样则删除
						let cur_id = is_cur_opt[0].sample_sku[0].list[0].item_id || ''
						is_cur_id = cur_id == item.ID
						if(is_cur_id){
							is_cur_opt[0].sample_sku = is_cur_opt[0].sample_sku.filter((item)=>{
								return item.name !== this.skus_item.Name
							})
						}else{
							let is_cur_opt_item = is_cur_opt[0].sample_sku.filter((item)=>{
								return item.name === this.skus_item.Name
							})
							//修改
							if(!isEmpty(is_cur_opt_item)){
								is_cur_opt_item[0].list={
									"0":{
										item_id:item.ID + '',
										item_price:item.Price +'',
										item_name:item.Name,
									}
								}
							}else{
								//添加
								this.addSkus(is_cur_opt,item)
							}
						}
						this.$forceUpdate()
					}else{
						//添加
						this.addSkus(is_cur_opt,item)
						this.$forceUpdate()
					}
				}
				console.log(this.SampleArr,'---SampleArr---')
			},
			skusclosePopUp(){
				this.$refs.skusRef.$refs.popup.close()
			},
			//tab 区域选择
			sampleArrChange(sampleFormItem,i,type){
				this.SampleArr[i][type] = sampleFormItem
				this.$forceUpdate()
			},
			inputChange(e,i,type) {
				let _is_CurrentItem = this.isCurrentItem(i)
				if(!isEmpty(_is_CurrentItem)){
					_is_CurrentItem[0][type] = e.detail.value
				}
				console.log(this.SampleArr,'---SampleArr---')
				this.$forceUpdate()
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
				// console.log(this.productDetail)
				// console.log('--计算价格3-')
				// console.log(this.SampleArr)
				// let _SampleArr = [...this.SampleArr]
				// console.log(Object.assign({},_SampleArr),'---_SampleArr---')

				// let _val_SampleArr = _SampleArr.map(item=>{
				// 	return {
				// 		...item,
				// 		sample_sku:Object.assign({},item.sample_sku)
				// 	}
				// })
				// _val_SampleArr = Object.assign({},_val_SampleArr)

				// console.log(_val_SampleArr,'---bb---')
				// let result = this.checkMap(this.baseFrom, this.tip)
				// if (!result) return
				// //先走计算价格的接口
				this.clickCountPrice = true

			},

			async submit() {
				this.clickTime = this.clickTime + 1 //点击次数
				this.showConfirm = true //修改信息按钮
				this.disable = true //确认信息
				if (this.clickTime === 2) {
					let {Code} = this.productDetail.product
					let _SampleArr = [...this.SampleArr]
					let _val_SampleArr = _SampleArr.map(item=>{
						return {
							...item,
							sample_sku:Object.assign({},item.sample_sku)
						}
					})
					_val_SampleArr = Object.assign({},_val_SampleArr)

					let param = {
						Item: {
							ProductCode: Code,
							"File": this.File, //上传的附件路径，可选
							SampleArr: _val_SampleArr,
						},
						TotalPrice: 100, //这里后期需要计算
						CouponID: this.CouponID, //优惠券id  如果没有优惠券传 0

					}
					console.log(param)

					const {data: res} = await uni.$http.post('user/order/add', param);
					
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

			//增加一个样品组
			addProd(){
				this.renderSampleArr.push({})
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
				const tempFilePaths = e.tempFilePaths;
				//获取图片临时路径
				const imgUrl = tempFilePaths[0]
				uni.uploadFile({
					//图片上传地址
					url: 'http://47.97.216.6/admin/api.upload/file.html',
					filePath: imgUrl,
					//上传名字，注意与后台接收的参数名一致
					name: 'imgUrl',
					formData: {
						safe: 0,
						uptype: 'local'
					},

					//设置请求头
					header: {
						"Content-Type": "multipart/form-data"
					},
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
	.buy-wrap {
		background-color: #fff;
		min-height: 100vh;
	}
	.buy-box {
		padding: 0px 10px;
	}

	.radio-item {
		display: flex;
		align-items: center;
	}
	.label {
		width: 90px;
	}

	.color {
		color: $uni-color-primary;
	}

	.service-box {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
	}

	.service-base {
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid $uni-border-color;
		box-sizing: border-box;
		border-radius: 6px;
		margin-bottom: 10px;
		font-size: 12px;
		margin-right: 6px;
	}

	.service-act {
		border: 1px solid $uni-color-primary;
		color: $uni-color-primary;
	}
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
		// align-items: baseline;
		margin-bottom: 10px;
	}
	.tip {
		font-size: 12px;
		margin-left: 40rpx;
	}
	
	.color-red {
		color: $uni-color-price;
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
	.sample_nature_tip{
		font-size: 12px;
		color:#ccc
	}
	.row{
		border:1px solid #ccc;
		padding:4px 6px;
		width: 60px;
		text-align: center;
		margin-bottom: 4px;
		font-size: 12px;
		margin-right: 8px;
	}
	.select{
		border:1px solid #0e67a9;
		color:#0e67a9
	}
	.textarea{
		color:#333;
		font-size: 12px;
		background-color: #f4f4f4;
		padding:4px;
		height: 60px;
	}
	.wrap::after{
		content: '';
        flex: auto; // 或者1
	}
</style>