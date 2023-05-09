<template>
	<view>
		<radio value="r1" color="#0e67a9" :checked="checked" @click="radioChange" :disabled="disabled">{{text}}</radio>
	</view>
</template>

<script>
	export default {
		name: "my-radio",
		data() {
			return {

			};
		},
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
