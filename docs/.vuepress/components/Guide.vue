<template>
  <div class="guide">
    <div class='title'>母體應您所需，衆望所歸</div>
    <div class="subtitle">聯係我們一切將會改變...</div>
    <a class="action-button animated infinite pulse" href="/request-a-quote/">聯係我們</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      let sidebar = document.querySelector('.sidebar');
      sidebar.style.display = "none";
    },
    computed: {
      data() {
        return {
          ...this.$page.frontmatter
        };
      }
    },
    watch: {},
    methods: {}
  };
</script>

<style lang="stylus" scoped>
  @import './styles/config.styl';
  @import './styles/guide.styl';
</style>