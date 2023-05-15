<template>
	<view class="flex flex-wrap flex-start">
		<view v-for="(item,i) in List" v-if="List.length > 0" :key="i" :class="['row', item.ID == purchaseInfo.CouponID ? 'active' :'']" @click="tabChange(item)">
			{{item.Price}}
		</view>
		<view v-else :class="['row', 'active']">
			无优惠券可用
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		name:"my-couponid",
		data() {
			return {
			};
		},
		computed:{
		...mapState('m_purchase',['purchaseInfo'])	
		},
		props:{
			List:{
				type: Array,
				default: []
			},
			select:{
				type: String,
				default: ''
			}
		},
		methods:{
			...mapMutations('m_purchase',['updatePurchaseInfo',]),
			tabChange(item){
				if(this.purchaseInfo.CouponID == item.ID) return
				this.updatePurchaseInfo(item.ID)
				console.log(item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row{
		border:1px solid #ccc;
		padding:6px 10px;
		min-width: 106px;
		text-align: center;
	}
	.active{
		border:1px solid #0e67a9;
		color:#0e67a9
	}
</style>