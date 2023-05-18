<template>
	<view class="flex flex-start">
		<radio value="r1" color="#0e67a9" :checked="checked" @click="radioChange" :disabled="disabled" style="transform:scale(0.7)"></radio>
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		name: "my-radio",
		props: {
			checked: {
				type: Boolean,
				default: false
			},
			text:{
				type:String,
				default:''
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			radioChange() {
				this.$emit('radioChange')
			}
		}
	}
</script>

<style>

</style>
