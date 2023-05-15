<template>
	<view class="flex flex-wrap flex-start">
		<view v-for="(item,i) in List" :key="i" :class="['row', item.id == select ? 'active' :'']" @click="tabChange(item)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-couponid",
		data() {
			return {
			};
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
			tabChange(item){
				this.$emit('tabChange',item)
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
		border:1px solid red
	}
</style>