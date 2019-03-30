(window.webpackJsonp=window.webpackJsonp||[]).push([[2,5,10],{172:function(t,e,i){},174:function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){a(t,e,i[e])})}return t}i.d(e,"a",function(){return n})},175:function(t,e,i){"use strict";i.r(e);var a={props:{imageSource:{type:String,required:!0},imageClass:{type:String,required:!1,default:""},loadingImage:{type:String,required:!0},errorImage:{type:String,required:!0},imageErrorCallback:{type:Function,required:!1,default:function(){}},imageSuccessCallback:{type:Function,required:!1,default:function(){}},backgroundSize:{type:String,required:!1,default:"cover"}},data:function(){return{imageWidth:0,imageHeight:0,imageState:"loading",asyncImage:new Image}},computed:{computedStyle:function(){return"loading"===this.imageState?"background-image: url("+this.loadingImage+");":"error"===this.imageState?"background-image: url("+this.errorImage+");":"loaded"===this.imageState?"background-image: url("+this.asyncImage.src+"); background-size: "+this.backgroundSize:""}},methods:{fetchImage:function(t){this.asyncImage.onload=this.imageOnLoad,this.asyncImage.onerror=this.imageOnError,this.imageState="loading",this.asyncImage.src=this.imageSource},imageOnLoad:function(){this.imageState="loaded",this.imageWidth=this.asyncImage.naturalWidth,this.imageHeight=this.asyncImage.naturalHeight,this.imageSuccessCallback()},imageOnError:function(t){this.imageState="error",this.imageErrorCallback()}},mounted:function(){var t=this;this.$nextTick(function(){t.fetchImage()})}},n=i(0),r=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:[this.imageClass,this.imageState],style:this.computedStyle,attrs:{"data-width":this.imageWidth,"data-height":this.imageHeight,"data-state":this.imageState}})},[],!1,null,null,null);e.default=r.exports},178:function(t,e,i){"use strict";var a=i(3),n=i(13),r=i(12),s=i(74),o=i(72),c=i(5),u=i(97).f,l=i(96).f,h=i(8).f,d=i(95).trim,g=a.Number,m=g,f=g.prototype,p="Number"==r(i(73)(f)),v="trim"in String.prototype,I=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var i,a,n,r=(e=v?e.trim():d(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if((s=c.charCodeAt(u))<48||s>n)return NaN;return parseInt(c,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(p?c(function(){f.valueOf.call(i)}):"Number"!=r(i))?s(new m(I(e)),i,g):I(e)};for(var y,b=i(7)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)n(m,y=b[_])&&!n(g,y)&&h(g,y,l(m,y));g.prototype=f,f.constructor=g,i(9)(a,"Number",g)}},179:function(t,e,i){"use strict";var a=i(172);i.n(a).a},180:function(t,e,i){},185:function(t,e,i){"use strict";i.r(e);i(178);var a={components:{VueLazyBackgroundImage:i(175).default},created:function(){var t=this;this.timer=setInterval(function(){t.next()},this.delay)},beforeDestroy:function(){clearInterval(this.timer)},props:{imgs:{type:Array,required:!0},delay:{type:Number,default:function(){return 2e3}},imgWidth:{default:function(){return 400}},imgHeight:{default:function(){return 302}},dotWidth:{default:function(){return 20}}},data:function(){return{showIndex:0,timer:null,show:!1}},methods:{previous:function(){this.showIndex<=0?this.showIndex=this.imgs.length-1:this.showIndex--},next:function(){this.showIndex>=this.imgs.length-1?this.showIndex=0:this.showIndex++},start:function(){var t=this;this.show=!1,clearInterval(this.timer),this.timer=setInterval(function(){t.next()},this.delay)},stop:function(){this.show=!0,clearInterval(this.timer)}}},n=(i(179),i(0)),r=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuecarousel"},[i("div",{staticClass:"contain",staticStyle:{width:"100%"},style:{height:t.imgHeight+"px"},on:{mouseenter:t.stop,mouseleave:t.start}},[i("ul",{staticClass:"ul"},t._l(t.imgs,function(e,a){return i("li",{directives:[{name:"show",rawName:"v-show",value:a==t.showIndex,expression:"index == showIndex"}],key:a,staticClass:"items"},[i("ClientOnly",[i("VueLazyBackgroundImage",{attrs:{"image-source":e.src,"loading-image":"http://temp.im/1920x430/4ca6f4/fff","error-image":"/muti/icons/presentation.png","image-class":"cam-viewport","background-size":"cover"}})],1)],1)}),0),t._v(" "),i("ul",{staticClass:"dots",style:{width:t.imgs.length*(t.dotWidth+10)+"px",height:t.dotWidth+"px"}},t._l(t.imgs,function(e,a){return i("li",{key:a,class:a==t.showIndex?"active":"",style:{width:t.dotWidth+"px",height:t.dotWidth+"px"},on:{click:function(e){t.showIndex=a}}})}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"control"},[i("span",{staticClass:"left",on:{click:t.previous}},[i("img",{attrs:{src:"https://img.icons8.com/ios-glyphs/30/eeeeee/chevron-left.png"}})]),t._v(" "),i("span",{staticClass:"right",on:{click:t.next}},[i("img",{attrs:{src:"https://img.icons8.com/ios-glyphs/30/eeeeee/chevron-right.png"}})])])])])},[],!1,null,"d0d25a6c",null);e.default=r.exports},191:function(t,e,i){"use strict";var a=i(180);i.n(a).a},196:function(t,e,i){"use strict";i.r(e);var a=i(174),n={components:{VueCarousel:i(185).default},computed:{background:function(){return this.$site.themeConfig.homeBackgroundUrl},data:function(){return Object(a.a)({},this.$page.frontmatter,{banner:[{src:"/muti/banner/banner1.jpg"},{src:"/muti/banner/banner2.jpg"}]})}},methods:{}},r=(i(191),i(0)),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ClientOnly",[i("div",{staticClass:"home"},[i("ClientOnly",[i("VueCarousel",{attrs:{imgs:t.data.banner,delay:2e3,imgWidth:960,imgHeight:450,dotWidth:10}})],1),t._v(" "),i("div",{staticClass:"hero animated fadeIn"},[i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}),t._v(" "),i("div",{attrs:{id:"intro"}},[i("p",[t._v("与我们")]),t._v(" "),i("p",[t._v("一起创建您的移动应用程序")]),t._v(" "),i("p",[t._v("我们设计和开发了多款应用产品，包括网站，小程序，手机app")]),t._v(" "),i("p",[t._v("我们构思和创建成功软件的基础就是以用户为中心的互动设计和体验")])]),t._v(" "),i("p",{staticClass:"description"},[t._v("\n                "+t._s(t.data.description)+"\n            ")]),t._v(" "),i("p",{staticClass:"action"},[i("a",{staticClass:"nav-link action-button",attrs:{href:"/muti/guide/"}},[t._v(t._s(t.data.actionText))])])]),t._v(" "),i("div",{staticClass:"features animated fadeIn"},t._l(t.data.features,function(e){return i("div",{key:e.title,staticClass:"feature fadeIn"},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.details))])])}),0),t._v(" "),i("div",{staticClass:"content custom"}),t._v(" "),i("div",{staticClass:"footer"},[t._v("\n            "+t._s(t.data.footer)+"\n        ")])],1)])},[],!1,null,"1ad59b52",null);e.default=s.exports}}]);