<template>
	<view class="logo">
		<image src="http://47.97.216.6/www/images/logo-2.png" 
		:style="{'width':width + 'rpx','height':height + 'rpx'}"></image>
	</view>
</template>

<script>
	export default {
		name:"logo",
		props:{
			width:{
				type:Number,
				default:42
			},
			height:{
				type:Number,
				default:10
			}
		}
	}
</script>

<style scoped>

</style>