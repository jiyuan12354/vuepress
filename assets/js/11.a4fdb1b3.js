(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{176:function(e,t,a){"use strict";a.r(t);var i={props:{imageSource:{type:String,required:!0},imageClass:{type:String,required:!1,default:""},loadingImage:{type:String,required:!0},errorImage:{type:String,required:!0},imageErrorCallback:{type:Function,required:!1,default:function(){}},imageSuccessCallback:{type:Function,required:!1,default:function(){}},backgroundSize:{type:String,required:!1,default:"cover"}},data:function(){return{imageWidth:0,imageHeight:0,imageState:"loading",asyncImage:new Image}},computed:{computedStyle:function(){return"loading"===this.imageState?"background-image: url("+this.loadingImage+");":"error"===this.imageState?"background-image: url("+this.errorImage+");":"loaded"===this.imageState?"background-image: url("+this.asyncImage.src+"); background-size: "+this.backgroundSize:""}},methods:{fetchImage:function(e){this.asyncImage.onload=this.imageOnLoad,this.asyncImage.onerror=this.imageOnError,this.imageState="loading",this.asyncImage.src=this.imageSource},imageOnLoad:function(){this.imageState="loaded",this.imageWidth=this.asyncImage.naturalWidth,this.imageHeight=this.asyncImage.naturalHeight,this.imageSuccessCallback()},imageOnError:function(e){this.imageState="error",this.imageErrorCallback()}},mounted:function(){var e=this;this.$nextTick(function(){e.fetchImage()})}},r=a(0),n=Object(r.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:[this.imageClass,this.imageState],style:this.computedStyle,attrs:{"data-width":this.imageWidth,"data-height":this.imageHeight,"data-state":this.imageState}})},[],!1,null,null,null);t.default=n.exports}}]);