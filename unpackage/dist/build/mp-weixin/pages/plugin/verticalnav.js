(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/verticalnav"],{"288f":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});for(var i=[{}],n=0;n<26;n++)i[n]={},i[n].name=String.fromCharCode(65+n),i[n].id=n;this.list=i,this.listCur=i[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(i){var n=this,e=0;if(this.load){for(var a=function(i){var a=t.createSelectorQuery().select("#main-"+n.list[i].id);a.fields({size:!0},(function(t){n.list[i].top=e,e+=t.height,n.list[i].bottom=e})).exec()},r=0;r<this.list.length;r++)a(r);this.load=!1}for(var o=i.detail.scrollTop+10,u=0;u<this.list.length;u++)if(o>this.list[u].top&&o<this.list[u].bottom)return this.verticalNavTop=50*(this.list[u].id-1),this.tabCur=this.list[u].id,console.log(o),!1}}};i.default=n}).call(this,n("543d")["default"])},"2fcf":function(t,i,n){"use strict";n.r(i);var e=n("beaf"),a=n("6157");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("3d42");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);i["default"]=c.exports},"3d42":function(t,i,n){"use strict";var e=n("ca91"),a=n.n(e);a.a},6157:function(t,i,n){"use strict";n.r(i);var e=n("288f"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},beaf:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement;t._self._c},r=[]},ca91:function(t,i,n){},dc11:function(t,i,n){"use strict";(function(t){n("6b34");e(n("66fd"));var i=e(n("2fcf"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])}},[["dc11","common/runtime","common/vendor"]]]);