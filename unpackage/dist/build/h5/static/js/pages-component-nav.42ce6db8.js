(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-nav"],{"177f":function(t,a,i){"use strict";i.r(a);var e=i("5358"),s=i("ccf2");for(var c in s)"default"!==c&&function(t){i.d(a,t,(function(){return s[t]}))}(c);var n,l=i("f0c5"),u=Object(l["a"])(s["default"],e["b"],e["c"],!1,null,"7534ff80",null,!1,e["a"],n);a["default"]=u.exports},5358:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return c})),i.d(a,"a",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("导航栏")])],2),t._l(10,(function(a,e){return e==t.TabCur?i("v-uni-view",{key:e,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(e))]):t._e()})),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(10,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-item",class:e==t.TabCur?"text-green cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(e))])})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-item",class:e==t.TabCur?"text-blue cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(e))])})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")],1)],1),i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"flex text-center"},t._l(4,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-item flex-sub",class:e==t.TabCur?"text-orange cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(e))])})),1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")],1)],1),i("v-uni-scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(a,e){return i("v-uni-view",{key:e,staticClass:"cu-item",class:e==t.TabCur?"text-white cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(e))])})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")],1)],1),i("v-uni-scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-camerafill"}),t._v("数码")],1),i("v-uni-view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")],1),i("v-uni-view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")],1)],1)],2)},c=[]},"6dcf":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=e},ccf2:function(t,a,i){"use strict";i.r(a);var e=i("6dcf"),s=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(a,t,(function(){return e[t]}))}(c);a["default"]=s.a}}]);