<template>
	<view>
		<view v-for="(item,i) in couponList" :key="i">
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
		props: {
			couponList: {
				type: Array,
				default: []
			},
		},
	}
</script>

<style>

</style>