<template>
	<view class="flex flex-wrap flex-between wrap">
		<view v-for="(item,i) in List" :key="i" :class="['row', item.ID == CouponID ? 'active' :'']" @click="tabChange(item)">
			{{item.Price}}
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
			CouponID:{
				type: Number,
				default: ''
			}
		},
		methods:{
			tabChange(item){
				if(this.purchaseInfo.CouponID == item.ID) return
				this.$emit('changeCouponID',item.ID)
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
	.wrap::after{
		content: '';
        flex: auto; // 或者1
	}
</style>