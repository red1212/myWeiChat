<template>
	<view class="flex flex-wrap flex-start">
		<view v-for="(item,i) in List" :key="i" class="row" @click="tabChange(item)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-tab",
		data() {
			return {
				select:''
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
</style>