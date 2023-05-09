<template>
	<view class="wrap mh-100 bg-write">
		<view class="flex-center flex-column">
			<view v-for="(item,i) in teamList" :key="i" class=" flex-column team-item">
				<view class="row flex-between">
					<view class="flex">
						<label class="label">姓名:</label><text>{{item.Name}}</text>
					</view>
					<view class="default radius4" v-if="item.IsDefault">默认</view>
				</view>
				<view class="row">
					<label class="label">手机号:</label><text>{{item.Mobile}}</text>
				</view>
				<view class="row">
					<label class="label">邮箱:</label><text>{{item.Email}}</text>
				</view>
				<view class="row">
					<label class="label">学校/公司名称:</label><text>{{item.Corp}}</text>
				</view>
				<view class="row">
					<label class="label">所在区域:</label><text>{{item.Area}}</text>
				</view>
				<view class="flex-end btnItem">
					<button type="primary" size="mini" v-if="!item.IsDefault" @click="change(item,true)" >设为默认</button>
					<button type="default" size="mini"  @click="change(item)">修改</button>
					<button type="default" size="mini" @click="del(item.ID)">删除</button>
				</view>
			</view>
			<button type="primary" size="mini" class="addBtn" @click="clickBtn" v-if="!loading">新增委托人+</button>
			<addTeamer ref="popRef" @closePopUp="(val)=>closePopUp(val)" :type="type"/>
		
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {isSuccess,errorTip} from '../../../util/index.js'
	export default {
		data() {
			return {
				loading:false,
				type:'add',
				queryObj:{
					page:1,
					size:10,
				},
				total:0
			}
		},
		computed:{
		...mapState('m_client',['teamList','clientForm'])	
		},
		onLoad(){
				this.getEntrusterList()
		},
		onReachBottom() {
			let {page,size} = this.queryObj
			if (size * page >= this.total) return uni.$showMsg('数据加载完毕！', 1000)
			if (this.loading) return
			this.queryObj.page += 1
			this.getEntrusterList()
		},
		//上拉刷新
		onPullDownRefresh() {
			this.queryObj.page = 1
			this.updateTeamList([])
			this.getEntrusterList(() => uni.stopPullDownRefresh())
		},
		methods: {
			...mapMutations('m_client',['updateClientForm','updateTeamList',]),
			clickBtn(){
				this.type = 'add'
				this.$refs.popRef.$refs.parentRef.$refs.popup.open()
			},
			async change(item,IsDefault){
				let obj={
					...item,
					IsDefault,
				}
				if(IsDefault){
					this.edit('modify',obj)
				}else{
					this.type = 'modify'
					this.updateClientForm(item)
					this.$refs.popRef.$refs.parentRef.$refs.popup.open()
				}
				
			},
			async closePopUp(val){
				this.item={}
				this.$refs.popRef.$refs.parentRef.$refs.popup.close()
				if(val){
					this.edit(this.type,this.clientForm)
				}
			},
			async edit(type,param){
				const {data: res} = await uni.$http.post(`user/entruster/${type}`,param);
				if (isSuccess(res.code)) {
					this.updateTeamList([])
					this.queryObj.page = 1
					this.getEntrusterList()
				} else {
					return uni.$showMsg(res.message, 1500)
				}
			},
			async del(ID){
				this.edit('del',{ID})
			},
			async getEntrusterList(cb){
				uni.showLoading({
					title: '数据加载中...',
				})
				this.loading = true
				const {data: res} = await uni.$http.post('user/entruster/list', this.queryObj);
				this.loading = false
				cb && cb()
				uni.hideLoading()
				if (isSuccess(res.code)) {
					this.total = res.data.total || 0
					this.updateTeamList(res?.data?.extra)
				} else {
					return uni.$showMsg(res.message, 1500)
				}
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		padding:0px 10px;
	}
	.team-item{
		width: 100%;
		border-bottom: 1px dashed $uni-border-color;
		padding-top:10px;
	}
	.row{
		margin-bottom: 10px;
		display: flex;
		font-size: 12px;
	}
	.label{
		width: 118px;
		color: $uni-textlabel-color;
	}
	.default{
	 background-color: $uni-color-primary;
		color: $uni-color-write;
		padding:2px 6px;
		font-size: 12px;
	}
	.addBtn{
		margin: 20px 0px;
	}
	.btnItem{
		margin-bottom: 10px;
		button{
			margin:0px 0px 0px 6px;
			
		}
	}
</style>
