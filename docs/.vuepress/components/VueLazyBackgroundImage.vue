<template>
  <div :class="[imageClass, imageState]" :style="computedStyle" :data-width="imageWidth" :data-height="imageHeight" :data-state="imageState"></div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      required: false,
      default: ''
    },
    loadingImage: {
      type: String,
      required: false,
      default: '#'
    },
    errorImage: {
      type: String,
      required: false,
      default: '#'
    },
    imageErrorCallback: {
      type: Function,
      required: false,
      default: function() {}
    },
    imageSuccessCallback: {
      type: Function,
      required: false,
      default: function() {}
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover'
    }
  },
  data() {
    return {
      imageWidth: 0,
      imageHeight: 0,
      imageState: 'loading',
      asyncImage: new Image()
    }
  },
  computed: {
    computedStyle() {
      // if (this.imageState === 'loading') {
      //   return 'background-image: url(' + this.loadingImage + ');'
      // }

      // if (this.imageState === 'error') {
      //   return 'background-image: url(' + this.errorImage + ');'
      // }

      if (this.imageState === 'loaded') {
        return 'background-image: url(' + this.asyncImage.src + ');'
      }

      // return '';
      return `
      background: rgb(54,67,89);
      background: linear-gradient(45deg, rgba(54,67,89,0.5) 0%, rgba(54,67,89,1) 100%), url(${this.imageSource}) center;
      `
    }
  },
  methods: {
    fetchImage(url) {
      this.asyncImage.onload = this.imageOnLoad
      this.asyncImage.onerror = this.imageOnError
      this.imageState = 'loading'
      this.asyncImage.src = this.imageSource
    },
    imageOnLoad() {
      this.imageState = 'loaded'
      this.imageWidth =  this.asyncImage.naturalWidth
      this.imageHeight = this.asyncImage.naturalHeight
      this.imageSuccessCallback()
    },
    imageOnError(error) {
      this.imageState = 'error'
      this.imageErrorCallback()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchImage()
    })
  }
}
</script>
