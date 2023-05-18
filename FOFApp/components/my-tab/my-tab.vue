<template>
		<view class="flex flex-wrap wrap">
			<view v-for="(item,i) in List" :key="i" :class="['row', item == select ? 'select' :'']" @click="tabChange(item)">
				{{item}}
			</view>
		</view>

</template>

<script>
	export default {
		name:"my-tab",
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
			tabChange(item){
				this.$emit('tabChange',item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row{
		border:1px solid #ccc;
		padding:4px 6px;
		width: 27%;
		text-align: center;
		margin-bottom: 4px;
		font-size: 12px;
		margin-right: 8rpx;
	}
	.select{
		border:1px solid #0e67a9;
		color:#0e67a9
	}
	.wrap .row:nth-child(3n+3) {
        margin-right: 0;
    }
	// .wrap::after{
	// 	content: '';
    //     flex: auto; // 或者1
	// }
</style>