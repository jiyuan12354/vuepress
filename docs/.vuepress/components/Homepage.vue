<template>
    <div class="home">
        <div class="hero animated fadeIn">
            <img :src="$withBase(data.heroImage)" alt="hero">
            <div id='intro'>
                <p>与我们</p>
                <p>一起创建您的移动应用程序</p>
                <p>我们设计和开发了多款应用产品，包括网站，小程序，手机app</p>
                <p>我们构思和创建成功软件的基础就是以用户为中心的互动设计和体验</p>
            </div>
            <!-- <h1>{{ data.siteTitle }}</h1> -->
            <p class="description">
                {{ data.description }}
            </p>
            <p class="action"><a href="/muti/zh/guide/" class="nav-link action-button">{{ data.actionText }}</a></p>
        </div>
        <div class="features">
            <div class="feature" v-for="item in data.features">
                <h2>{{ item.title }}</h2>
                <p>{{ item.details }}</p>
            </div>
        </div>
        <div class="content custom"></div>
        <div class="footer">
            MIT Licensed | Copyright © 2019-present MT
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            data() {
                return this.$page.frontmatter;
            }
        }
    };
</script>

<style lang="stylus">
    @import './styles/config.styl'
    @import './styles/home.styl'
</style>