(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{173:function(t,e,i){},174:function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){a(t,e,i[e])})}return t}i.d(e,"a",function(){return n})},181:function(t,e,i){"use strict";var a=i(173);i.n(a).a},182:function(t,e,i){},184:function(t,e,i){"use strict";i.r(e);i(94);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],a=!0,n=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);a=!0);}catch(t){n=!0,r=t}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}i(52);var n={name:"VueLazyYoutubeVideo",props:{url:{type:String,required:!0,validator:function(t){return 1!==t.indexOf("https://www.youtube.com/watch?")}},alt:{type:String,default:"Video alternative image"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:function(t){return/^\d+:\d+$/.test(t)}}},data:function(){return{isVideoLoaded:!1}},computed:{id:function(){return/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/.exec(this.url)[1]},styleObj:function(){return{paddingBottom:this.getPaddingBottom()}}},methods:{generateURL:function(){return"https://www.youtube.com/embed/".concat(this.id).concat("?rel=0&showinfo=0&autoplay=1")},clickHandler:function(){this.isVideoLoaded=!0,this.$emit("videoLoaded")},getPaddingBottom:function(){var t=a(this.aspectRatio.split(":"),2),e=t[0],i=t[1];return"".concat(i/e*100,"%")}}},r=(i(181),i(0)),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"y-video",on:{click:t.clickHandler}},[i("div",{staticClass:"y-video__inner",style:t.styleObj},[t.isVideoLoaded?i("iframe",{staticClass:"y-video__media",attrs:{src:t.generateURL(),allowfullscreen:"",allow:"autoplay"}}):[i("picture",[i("source",{attrs:{srcset:"https://i.ytimg.com/vi_webp/"+t.id+"/maxresdefault.webp",type:"image/webp"}}),t._v(" "),i("img",{staticClass:"y-video__media",attrs:{src:"https://i.ytimg.com/vi/4JS70KB9GS0/maxresdefault.jpg",alt:t.alt}})]),t._v(" "),i("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":t.buttonLabel}},[i("svg",{attrs:{viewBox:"0 0 68 48",version:"1.1",width:"100%",height:"100%"}},[i("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t._v(" "),i("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]],2)])},[],!1,null,"337d492d",null);e.default=s.exports},192:function(t,e,i){"use strict";var a=i(182);i.n(a).a},197:function(t,e,i){"use strict";i.r(e);var a=i(174),n={component:{VueLazyYoutubeVideo:i(184).default},data:function(){return{}},computed:{data:function(){return Object(a.a)({},this.$page.frontmatter)}},watch:{},methods:{}},r=(i(192),i(0)),s=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"industry"},[this._m(0),this._v(" "),e("div",{staticClass:"clear"}),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"video-contain"},[e("div",{staticClass:"title"},[this._v("\n            科技券計劃\n        ")]),this._v(" "),e("div",{staticClass:"video"},[e("VueLazyYoutubeVideo",{attrs:{url:"https://www.youtube.com/watch?v=mMboBdbWACc"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page_title"},[e("h1",[this._v("APP开发")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"service_list"},[i("a",{attrs:{href:""}},[i("li",{staticClass:"ios"},[i("img",{attrs:{src:"http://www.kubikeji.com/templets/KuBiKeJi/img_new/ios-ico.png"}}),t._v(" "),i("span",[t._v("IOS APP开发")])])]),t._v(" "),i("a",{attrs:{href:""}},[i("li",{staticClass:"andr"},[i("img",{attrs:{src:"http://www.kubikeji.com/templets/KuBiKeJi/img_new/android-ico.png"}}),t._v(" "),i("span",[t._v("Android APP开发")])])]),t._v(" "),i("a",{attrs:{href:""}},[i("li",{staticClass:"html5"},[i("img",{attrs:{src:"http://www.kubikeji.com/templets/KuBiKeJi/img_new/html5-ico.png"}}),t._v(" "),i("span",[t._v("HTML5开发")])])])])}],!1,null,null,null);e.default=s.exports}}]);