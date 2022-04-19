<template>
	<view>
		<image class="top-bg" src="../../static/bg.png"></image>
		<image @click="addUser" class="scan" src="../../static/scan.png"></image>
		<view class="title">动态验证器</view>
		<image class="logo" src="../../static/logo.png"></image>
		<view class="list">
			<view class="item" v-for="(item,index) in arr" :key="item.num">
				<uni-swipe-action>
					<!-- 基础用法 -->
					<uni-swipe-action-item :right-options="options" @click="onClick(index)">
						<view style="width: 100%;">
							<view class="item-title">{{decodeURIComponent(item.username)}}</view>
							<view class="text-xxl padding-top-sm padding-bottom-sm">
								<text class="l-num">
									{{item.num}}
								</text>
								<text class="r-num" style="float: right;">
									{{30-width}}s
								</text>
							</view>
							<view class="cu-progress round">
								<view class="bg-jianbian" :style="[{ width:`${Math.floor(((30-width)/30)*100)}%`}]"></view>
							</view>
						</view>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
		</view>
		<!-- <basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	const jsotp = require('jsotp');
	import qs from 'qs'
	import uniSwipeAction from '../../components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '../../components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				width: 30,
				arr: [],
				options: [{
					text: '删除',
					style: {
						backgroundColor: 'rgba(245, 108, 108, 1)',
						color: 'rgba(255, 255, 255, 1)',
						borderRadius:'20rpx'
					}
				}],
			}
		},
		onLoad(opt) {
			console.log(opt)
			let arr = [];
			let that = this;
			if (opt.q) {
				// 对url进行解码
				let url = decodeURIComponent(opt.q)
				let paramstr = url.split("?")[2];
				let getUser = url.split("?")[1];
				let username = getUser.split(':')[2];
				let params = this.parseUrl(paramstr);
				params.username = username;
				// 获取缓存里的数组
				uni.getStorage({
					key: 'arr',
					success: function(res) {
						arr = JSON.parse(res.data);
					}
				});
				let newArr = arr.concat([params])
				// 去重
				let arr2 = this.quchong(newArr)
				uni.setStorage({
					key: 'arr',
					data: JSON.stringify(arr2),
					success:function(res){
						console.log('结果',res)
					}
				});
				//  wx.login({
				//   success: function (res) {
				// 	var code = res.code;//发送给服务器的code
				// 	console.log(code)
				// 	uni.request({
				// 		url:'',
				// 	})
				//   },
				//   fail: function (error) {
				// 	console.log('login failed ' + error);
				//   }
				// })    
			}
			uni.getStorage({
				key: 'arr',
				success: function(res) {
					console.log('结果',res.data)
					that.arr = JSON.parse(res.data);
					let array = [];
					if (that.arr.length > 0) {
						that.arr.map((item, index) => {
							array.push(
								Object.assign(item, {
									num: jsotp.TOTP(item.secret).now()
								})
							)
						});
					}
				}
			});
			// 定时器倒计时，倒计时结束刷新动态验证码
			setInterval(() => {
				if (that.width < 30) {
					that.width += 1;
				} else {
					that.arr.forEach((item, index) => {
						that.$set(that.arr[index], `num`, jsotp.TOTP(item.secret).now())
					})
					that.width = 0;
				}
			}, 1000)
		},
		methods: {
			// 数组去重
			quchong(arr){
				console.log(arr)
				let map = new Map();
				for (let item of arr) {
				    if (!map.has(item.username)) {
				        map.set(item.username, item);
				    };
				};
				console.log([...map.values()])
				return [...map.values()]
			},
			// 扫一扫添加
			addUser(){
				let that = this;
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						let paramstr = res.result.split("?")[2];
						let getUser = res.result.split("?")[1];
						let username = getUser.split(':')[2];
						let params = that.parseUrl(paramstr);
						params.username = username;
						let newArr = that.arr.concat([params])
						// 去重
						that.arr = that.quchong(newArr)
						that.arr.forEach((item, index) => {
							that.$set(that.arr[index], `num`, jsotp.TOTP(item.secret).now())
						})
						uni.setStorage({
							key: 'arr',
							data: JSON.stringify(that.arr),
							success:function(res){
								console.log('结果',res)
							}
						});
				    }
				});
			},
			// 右滑删除
			onClick(e) {
				// console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
				console.log(e)
				let that = this;
				uni.showModal({
					title: '提示',
					content: '确定删除当前账号动态验证码 ？',
					success: function(res) {
						// 确认删除
						if (res.confirm) {
							that.arr.splice(e,1)
							uni.setStorage({
								key: 'arr',
								data: JSON.stringify(that.arr),
								success:function(res){
									console.log('结果',res)
								}
							});
						}
					}
				});

			},
			// 解析路径
			parseUrl(query) {
				// if (url.indexOf("?") === -1) {
				// 	return {};
				// }
				// url = decodeURIComponent(url);
				// var query = url.split("?")[1];
				var queryArr = query.split("&");
				var obj = {};
				queryArr.forEach(function(item) {
					var key = item.split("=")[0];
					var value = item.split("=")[1];
					obj[key] = decodeURIComponent(value);
				});
				return obj;
			}
		}
	}
</script>

<style>
.top-bg{
	width: 100%;
	height: 540rpx;
	position: relative;
	z-index: 1;
}
.scan{
	width: 48rpx;
	height: 48rpx;
	position: absolute;
	top: calc(60rpx + var(--status-bar-height));
	left: 40rpx;
	z-index: 2;
}
.title{
	color: #FFFFFF;
	font-size: 36rpx;
	font-weight: 500;
	transform: translateX(-50%);
	position: absolute;
	top: calc(60rpx + var(--status-bar-height));
	left: 50%;
	z-index: 2;
}
.logo{
	width: 390rpx;
	height: 110rpx;
	transform: translateX(-50%);
	position: absolute;
	top: calc(180rpx + var(--status-bar-height));
	left: 50%;
	z-index: 2;
}
.list{
	width: 686rpx;
	margin: 0 auto;
	position: absolute;
	top: calc(360rpx + var(--status-bar-height));
	left: 32rpx;
	z-index: 2;
}
.item{
	padding: 30rpx 40rpx;
	margin-bottom: 20rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	box-shadow: 0 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
}
.bg-green{
	background: linear-gradient(270deg, rgba(61, 206, 235, 1) 0%, rgba(76, 89, 255, 1) 100%);
}
.item-title{
	font-size: 32rpx;
	color: rgba(0, 30, 77, 1);
	font-weight: bold;
}
.l-num{
	color: rgba(1, 129, 254, 1);
}
.r-num{
	color: rgba(103, 194, 58, 1);
}
.bg-jianbian{
	background: linear-gradient(270deg, rgba(61, 206, 235, 1) 0%, rgba(76, 89, 255, 1) 100%);
}
</style>
