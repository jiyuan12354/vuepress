<template>
  <div class="vuecarousel">
    <div
      class="contain"
      @mouseenter="stop"
      @mouseleave="start"
    >
      <ul class="ul">
        <li class="items" v-for="(img, index) in imgs" :key="index" v-show="index == showIndex">
          <!-- <div
            :style="{height: imgHeight + 'px', background: 'url(' + img.src + ') center 0px no-repeat'}"
            style="width: 100%"
          ></div> -->
          <ClientOnly>
            <VueLazyBackgroundImage
              :image-source="img.src"
              image-class="cam-viewport">
            </VueLazyBackgroundImage>
          </ClientOnly>
        </li>
      </ul>
      <ul
        class="dots"
        :style="{width: imgs.length * (dotWidth + 10) + 'px',  height: dotWidth + 'px'}"
      >
        <li
          v-for="(img, index) in imgs"
          :key="index"
          :class="index == showIndex ? 'active' : ''"
          @click="showIndex = index"
          :style="{width: dotWidth + 'px', height: dotWidth + 'px'}"
        ></li>
      </ul>
      <div class="control" v-show="show">
        <span class="left" @click="previous">

        </span>
        <span class="right" @click="next">

        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VueLazyBackgroundImage from './VueLazyBackgroundImage'
export default {
  components: {
    VueLazyBackgroundImage
  },
  created() {
    this.timer = setInterval(() => {
      this.next();
    }, this.delay);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  props: {
    imgs: {
      type: Array,
      required: true
    },
    delay: {
      type: Number,
      default: function() {
        return 2000;
      }
    },
    imgWidth: {
      default: function() {
        return 400;
      }
    },
    imgHeight: {
      default: function() {
        return 302;
      }
    },
    dotWidth: {
      default: function() {
        return 20;
      }
    }
  },
  data() {
    return {
      showIndex: 0, //显示第几个图片
      timer: null, // 定时器
      show: false // 前后按钮显示
    };
  },
  methods: {
    previous() {
      if (this.showIndex <= 0) {
        this.showIndex = this.imgs.length - 1;
      } else {
        this.showIndex--;
      }
    },
    next() {
      if (this.showIndex >= this.imgs.length - 1) {
        this.showIndex = 0;
      } else {
        this.showIndex++;
      }
    },
    start() {
      this.show = false;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.next();
      }, this.delay);
    },
    stop() {
      this.show = true;
      clearInterval(this.timer);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" scoped>
@import './styles/carousel.styl';
</style>