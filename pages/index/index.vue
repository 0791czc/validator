<template>
	<view>
		<view style="height: var(--status-bar-height);"></view>
		<view class="text-center" style="line-height: 90rpx;font-size: 48rpx;font-weight: bold;">
			<image style="width: 60rpx;height: 60rpx;vertical-align: middle;margin-right: 20rpx;margin-bottom: 10rpx;"
				src="../../static/logo2.png" mode=""></image>
			<text style="padding-top: 20rpx;">联横利众数字云动态验证</text>
		</view>
		<view v-for="item in arr" :key="item.num">
			<view class="solid-bottom text-xl padding">
				<text class="text-black text-bold">联横利众（{{item.username}}）</text>
			</view>
			<view class="solid-bottom text-xxl padding">
				<text class="text-blue">
					{{item.num}}
				</text>
				<text class="text-red" style="float: right;">
					{{30-width}}s
				</text>
			</view>
			<view class="padding">
				<view class="cu-progress round sm striped active">
					<view class="bg-green" :style="[{ width:`${Math.floor((width/30)*100)}%`}]"></view>
				</view>
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
	export default {
		data() {
			return {
				width: 30,
				num: '',
				username: '',
				arr: [],
			}
		},
		onLoad(opt) {
			// wx.login({
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
			let that = this;
			if (opt.q) {
				let arr = [];
				uni.getStorage({
					key: 'arr',
					success: function(res) {
						console.log(res.data);
						arr = JSON.parse(res.data);
					}
				});
				let url = decodeURIComponent(opt.q)
				let paramstr = url.split("?")[2];
				let getUser = url.split("?")[1];
				let username = getUser.split(':')[2];
				console.log(getUser.split(':'))
				// let paramstr = this.parseUrl(url);
				console.log(paramstr)
				console.log(decodeURIComponent(username))
				console.log(decodeURI(username))
				let params = this.parseUrl(paramstr);
				console.log(params)
				let arr2 = arr.filter(i => i.username == params.username);
				console.log(arr)
				console.log(arr2)
				that.width = params.period;
				params.username = username;
				if (arr2.length == 0) {
					arr.push(params)
					uni.setStorage({
						key: 'arr',
						data: JSON.stringify(arr)
					});
				}
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
			let arr = [{
				secret: 'fe3i5ytwyxa77ijbyxqqwg46kfd2go5e',
				issuer: 'Admin@gmail.com',
				username: 'Admin@gmail.com',
				period: 30
			}]
			uni.setStorage({
				key: 'arr',
				data: JSON.stringify(arr)
			});
			uni.getStorage({
				key: 'arr',
				success: function(res) {
					console.log(res.data);
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
			parseUrl(query) {
				console.log("出发")
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
					console.log('值'+decodeURI(value))
					obj[key] = decodeURIComponent(value);
				});
				return obj;
			}
		}
	}
</script>

<style>

</style>
