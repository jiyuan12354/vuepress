(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,12],{175:function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){a(t,e,i[e])})}return t}i.d(e,"a",function(){return n})},176:function(t,e,i){},179:function(t,e,i){"use strict";i.r(e);var a={props:{imageSource:{type:String,required:!0},imageClass:{type:String,required:!1,default:""},loadingImage:{type:String,required:!0},errorImage:{type:String,required:!0},imageErrorCallback:{type:Function,required:!1,default:function(){}},imageSuccessCallback:{type:Function,required:!1,default:function(){}},backgroundSize:{type:String,required:!1,default:"cover"}},data:function(){return{imageWidth:0,imageHeight:0,imageState:"loading",asyncImage:new Image}},computed:{computedStyle:function(){return"loading"===this.imageState?"background-image: url("+this.loadingImage+");":"error"===this.imageState?"background-image: url("+this.errorImage+");":"loaded"===this.imageState?"background-image: url("+this.asyncImage.src+"); background-size: "+this.backgroundSize:""}},methods:{fetchImage:function(t){this.asyncImage.onload=this.imageOnLoad,this.asyncImage.onerror=this.imageOnError,this.imageState="loading",this.asyncImage.src=this.imageSource},imageOnLoad:function(){this.imageState="loaded",this.imageWidth=this.asyncImage.naturalWidth,this.imageHeight=this.asyncImage.naturalHeight,this.imageSuccessCallback()},imageOnError:function(t){this.imageState="error",this.imageErrorCallback()}},mounted:function(){var t=this;this.$nextTick(function(){t.fetchImage()})}},n=i(0),s=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:[this.imageClass,this.imageState],style:this.computedStyle,attrs:{"data-width":this.imageWidth,"data-height":this.imageHeight,"data-state":this.imageState}})},[],!1,null,null,null);e.default=s.exports},183:function(t,e,i){"use strict";var a=i(3),n=i(13),s=i(12),r=i(74),o=i(72),c=i(5),u=i(97).f,l=i(96).f,h=i(8).f,d=i(95).trim,g=a.Number,m=g,v=g.prototype,f="Number"==s(i(73)(v)),p="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var i,a,n,s=(e=p?e.trim():d(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if((r=c.charCodeAt(u))<48||r>n)return NaN;return parseInt(c,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(f?c(function(){v.valueOf.call(i)}):"Number"!=s(i))?r(new m(_(e)),i,g):_(e)};for(var P,I=i(7)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;I.length>y;y++)n(m,P=I[y])&&!n(g,P)&&h(g,P,l(m,P));g.prototype=v,v.constructor=g,i(9)(a,"Number",g)}},184:function(t,e,i){"use strict";var a=i(176);i.n(a).a},185:function(t,e,i){},189:function(t,e,i){"use strict";i.r(e);i(183);var a={components:{VueLazyBackgroundImage:i(179).default},created:function(){var t=this;this.timer=setInterval(function(){t.next()},this.delay)},beforeDestroy:function(){clearInterval(this.timer)},props:{imgs:{type:Array,required:!0},delay:{type:Number,default:function(){return 2e3}},imgWidth:{default:function(){return 400}},imgHeight:{default:function(){return 302}},dotWidth:{default:function(){return 20}}},data:function(){return{showIndex:0,timer:null,show:!1}},methods:{previous:function(){this.showIndex<=0?this.showIndex=this.imgs.length-1:this.showIndex--},next:function(){this.showIndex>=this.imgs.length-1?this.showIndex=0:this.showIndex++},start:function(){var t=this;this.show=!1,clearInterval(this.timer),this.timer=setInterval(function(){t.next()},this.delay)},stop:function(){this.show=!0,clearInterval(this.timer)}}},n=(i(184),i(0)),s=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuecarousel"},[i("div",{staticClass:"contain",staticStyle:{width:"100%"},style:{height:t.imgHeight+"px"},on:{mouseenter:t.stop,mouseleave:t.start}},[i("ul",{staticClass:"ul"},t._l(t.imgs,function(e,a){return i("li",{directives:[{name:"show",rawName:"v-show",value:a==t.showIndex,expression:"index == showIndex"}],key:a,staticClass:"items"},[i("ClientOnly",[i("VueLazyBackgroundImage",{attrs:{"image-source":e.src,"loading-image":"http://temp.im/1920x430/4ca6f4/fff","error-image":"/icons/presentation.png","image-class":"cam-viewport","background-size":"cover"}})],1)],1)}),0),t._v(" "),i("ul",{staticClass:"dots",style:{width:t.imgs.length*(t.dotWidth+10)+"px",height:t.dotWidth+"px"}},t._l(t.imgs,function(e,a){return i("li",{key:a,class:a==t.showIndex?"active":"",style:{width:t.dotWidth+"px",height:t.dotWidth+"px"},on:{click:function(e){t.showIndex=a}}})}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"control"},[i("span",{staticClass:"left",on:{click:t.previous}},[i("img",{attrs:{src:"https://img.icons8.com/ios-glyphs/30/eeeeee/chevron-left.png"}})]),t._v(" "),i("span",{staticClass:"right",on:{click:t.next}},[i("img",{attrs:{src:"https://img.icons8.com/ios-glyphs/30/eeeeee/chevron-right.png"}})])])])])},[],!1,null,"c397c714",null);e.default=s.exports},196:function(t,e,i){"use strict";var a=i(185);i.n(a).a},203:function(t,e,i){"use strict";i.r(e);var a=i(175),n={components:{VueCarousel:i(189).default},computed:{background:function(){return this.$site.themeConfig.homeBackgroundUrl},data:function(){return Object(a.a)({},this.$page.frontmatter,{banner:[{src:"/banner/banner1.jpg"},{src:"/banner/banner2.jpg"}]})}},methods:{}},s=(i(196),i(0)),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ClientOnly",[i("div",{staticClass:"home"},[i("ClientOnly",[i("VueCarousel",{attrs:{imgs:t.data.banner,delay:2e3,imgWidth:960,imgHeight:450,dotWidth:10}})],1),t._v(" "),i("div",{staticClass:"hero animated fadeIn"},[i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}),t._v(" "),i("div",{attrs:{id:"intro"}},[i("p",[t._v("與我們")]),t._v(" "),i("p",[t._v("壹起創建您的移動應用程序")]),t._v(" "),i("p",[t._v("我們設計和開發了多款應用產品，包括網站，小程序，手機app")]),t._v(" "),i("p",[t._v("我們構思和創建成功軟件的基礎就是以用戶為中心的互動設計和體驗")])]),t._v(" "),i("p",{staticClass:"description"},[t._v("\n                "+t._s(t.data.description)+"\n            ")]),t._v(" "),i("p",{staticClass:"action"},[i("a",{staticClass:"nav-link action-button",attrs:{href:"/guide/"}},[t._v(t._s(t.data.actionText))])])]),t._v(" "),i("div",{staticClass:"features animated fadeIn"},t._l(t.data.features,function(e){return i("div",{key:e.title,staticClass:"feature fadeIn service_list"},[i("a",{attrs:{href:""}},[i("li",{class:e.tag},[i("img",{attrs:{src:e.icon}}),t._v(" "),i("span",[t._v(t._s(e.title))])])]),t._v(" "),i("p",[t._v(t._s(e.details))])])}),0),t._v(" "),i("div",{staticClass:"intro"},[i("h2",[t._v("手機應用軟件開發能給企業帶來哪些價值")]),t._v(" "),i("ul",{staticClass:"value"},[i("li",[t._v("手機應用軟件開發可以幫助企業實現精準營銷。APP將企業的最新信息，比如公司最近的新產品上市或促銷活動等信息快速精準的傳達給目標客戶。")]),t._v(" "),i("li",[t._v("可以通過手機APP隨時隨地傳達信息給客戶，不時間跟空間等原因受阻。")]),t._v(" "),i("li",[t._v("提高用戶的粘度，留住新老客戶，讓他們成為中最好的口碑傳播者。")]),t._v(" "),i("li",[t._v("企業用最低的廣告成本，獲得最佳的宣傳效果傳統的廣告方式相比，手機APP廣告無需按點擊和次數付費，其圖文並茂、形象生動的廣告表現形式論是費用還是效果方面都比傳統的廣告更勝壹籌。")]),t._v(" "),i("li",[t._v("服務於現有客戶，提升客戶的滿意度，並促成二次消費。")])]),t._v(" "),i("h2",[t._v("開發壹個APP需要多少錢")]),t._v(" "),i("div",{staticClass:"assess-cost"},[i("div",{staticClass:"desc"},[t._v("\n                    要說到開發壹款APP多少錢？這是許多需要制作APP客戶端的企業都會想要知道的問題答案，就APP開發的工作內容來看，APP報價都受到多方面的因素影響，所以相應的蘋果APP的開發價格當然也是受到很多因素影響的。\n                ")]),t._v(" "),i("ul",{staticClass:"cost"},[i("li",[i("h5",[t._v("企業對功能需求影響開發價格")]),t._v(" "),i("div",[t._v("\n                            不同行業的企業主對蘋果APP開發的功能需求有所不同，所以開發公司也是按照不同APP功能需求來進行APP報價的。比如說企業需要壹款簡單的企業蘋果APP展示功能的軟件，那麽在開發上就不需要太復雜的技術就能夠制作出來，那麽APP報價就會低壹些；但是如果是企業需要壹款電商類型的蘋果APP應用，由於電商APP開發比較復雜，因此在蘋果APP的開發上就需要投入比較多的人力和物力，APP報價相應的也會比較高壹些。所以說蘋果APP的價格是針對企業主的不同功能需求來進行報價的，並沒有壹個統壹的具體APP開發價格。\n                        ")])]),t._v(" "),i("li",[i("h5",[t._v("蘋果軟件開發相對於安卓APP報價高壹些")]),t._v(" "),i("div",[t._v("\n                            目前比較主流的APP應用開發就是蘋果APP開發和安卓APP開發，但是因為蘋果APP開發所使用到的Objective-C語言是比較難學習的，在APP開發上也會遇到非常多的難題，所以相較於簡單易學的Java語言開發的安卓APP軟件，在報價上就會高出很多。因此，蘋果IOS\n                            APP開發的報價通常都是高於安卓APP報價。")])])])])]),t._v(" "),i("div",{staticClass:"content custom"}),t._v(" "),i("div",{staticClass:"footer"},[t._v("\n            "+t._s(t.data.footer)+"\n        ")])],1)])},[],!1,null,"7a43b334",null);e.default=r.exports}}]);