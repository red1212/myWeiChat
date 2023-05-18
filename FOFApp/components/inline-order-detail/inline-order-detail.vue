<template>
	<view>
		<view v-if="orderInfo.Item.SampleArr != null">
			<uni-card type="line" v-for="(item,i) in orderInfo.Item.SampleArr" :key="i">
				<view class="info-item">
					<text class="info-label" style="font-weight: bold;">{{item.sampleNum}}组样品</text>
				</view>
				<view class="info-item">
					<text class="info-label">样品名称：</text>
					<text class="info-value">{{item.sample_name}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">主要成分：</text>
					<text class="info-value">{{item.sample_component}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">样品形态：</text>
					<text class="info-value">{{item.sample_form}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">样品性质：</text>
					<text class="info-value">{{item.sample_nature}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">保存条件：</text>
					<text class="info-value">{{item.sample_storage_condition}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">测试明细：</text>
					<text class="info-value">
						<text v-for="(v,k) in item.sample_sku" :key="k">
							{{v.name}}:{{v.list[0].item_name}};
						</text>
					</text> 
				</view>
				<view class="info-item">
					<text class="info-label">样品回收：</text>
					<text class="info-value">{{item.sample_recycle}}</text>
				</view>
				<view class="info-item">
					<text class="info-label">是否加急：</text>
					<text class="info-value" v-if="item.urgent_name == ''">否</text>
					<text class="info-value" v-else>{{item.urgent_name}}</text>
				</view>
				<view class="info-item">
					<text class="info-label width120">被检样品数量：</text>
					<text class="info-value">{{item.sample_number}}</text>
				</view>
				<view class="info-item">
					<text class="info-label width120">被检样品排序：</text>
					<text class="info-value">{{item.sample_sort || '无'}}</text>
				</view>
				<view class="info-item">
					<text class="info-label width120">实验要求及目的：</text>
					<text class="info-value">{{item.test_purpose}}</text>
				</view>
				
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		name:"inline-order-detail",
		data() {
			return {

			};
		},
		props:{
			orderInfo:{
				type:Object,
				default:{}
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
.info-item{
		margin-bottom: 4px;
	}
	.label{
		color: #333;
		font-weight: 600;
		width: 80px;
		display: inline-block;
	}
	.order-info{
		padding:0px 10px;
	}
	.info-item{
		margin-bottom: 10px;
		display: flex;
	}
	.info-value{
		flex:1;
	}
	.info-label{
		width: 90px;
		color: #333;
	}
	.width120{
		width:120px
	}
</style>