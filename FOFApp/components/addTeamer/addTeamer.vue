<template>
	<my-popup ref="parentRef" title="新增委托人" btnText="保存" @closePopUp="closePopUp" @clickBtnItem="submit">
		<view class="container bg-write">
			<view class="uni-input-wrapper">
				<input class="uni-input" type="text" placeholder="姓名" :value="clientForm.Name"
					@input="(e)=>inputChange(e,'Name')" />
			</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="number" maxlength="11" placeholder="请输入手机号" :value="clientForm.Mobile"
					@input="(e)=>inputChange(e,'Mobile')" />
			</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="email" placeholder="邮箱" :value="clientForm.Email"
					@input="(e)=>inputChange(e,'Email')" />
			</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="text" placeholder="学校/公司名称" :value="clientForm.Corp"
					@input="(e)=>inputChange(e,'Corp')" />
			</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" type="text" placeholder="所在区域" :value="clientForm.Area"
					@input="(e)=>inputChange(e,'Area')" />
			</view>
		</view>
	</my-popup>
</template>

<script>
	import {mapMutations,mapState} from 'vuex'
	import {checkMap} from '../../util/index.js'
	export default {
		name: "addTeamer",
		data() {
			return {

			};
		},
		props:{
				type:{
					type:String,
					default:'add'
				}
		},
		computed:{
		...mapState('m_client',['clientForm','errorMap'])	
		},
		methods: {
			...mapMutations('m_client',['updateClientForm','cleanForm']),
			closePopUp() {
				this.cleanForm()
				this.$emit('closePopUp')
			},
			inputChange(event, type) {
				let obj={
					[type]:event.detail.value
				}
				this.updateClientForm(obj)
			},
			async submit() {
				let duration = 1500
				let {Mobile,Email,Name} = this.clientForm
				if(!checkMap(this.clientForm,this.errorMap)) return
				if (Mobile.length < 11) return uni.$showMsg('请输入正确的手机号', duration)
				this.$emit('closePopUp',true)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 10px;
	}

	.uni-input-wrapper {
		width: 100%;
		border: 1px solid #ccc;
		padding: 6px 10px;
		border-radius: 6px;
		font-size: 14px;
		display: flex;
		margin-bottom: 10px;
		height: 45px;
		box-sizing: border-box;
		align-items: center;
	}
</style>
