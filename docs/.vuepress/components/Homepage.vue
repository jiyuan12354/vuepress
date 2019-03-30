<template>
    <ClientOnly>
        <div class="home">
            <ClientOnly>
                <VueCarousel :imgs="data.banner" :delay="2000" :imgWidth="960" :imgHeight="450" :dotWidth="10" />
            </ClientOnly>

            <div class="hero animated fadeIn">
                <img :src="$withBase(data.heroImage)" alt="hero">
                <div id='intro'>
                    <p>与我们</p>
                    <!-- <img src="/muti/banner/d_index_content_bg1.jpg" alt=""> -->
                    <p>一起创建您的移动应用程序</p>
                    <p>我们设计和开发了多款应用产品，包括网站，小程序，手机app</p>
                    <p>我们构思和创建成功软件的基础就是以用户为中心的互动设计和体验</p>
                </div>
                <!-- <h1>{{ data.siteTitle }}</h1> -->
                <p class="description">
                    {{ data.description }}
                </p>
                <p class="action"><a href="/muti/guide/" class="nav-link action-button">{{ data.actionText }}</a></p>
            </div>
            <div class="features animated fadeIn">
                <div class="feature fadeIn" v-for="item in data.features" :key="item.title">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.details }}</p>
                </div>
            </div>
            <div class="content custom"></div>
            <div class="footer">
                {{data.footer}}
            </div>
        </div>
    </ClientOnly>
</template>

<script>
    import VueCarousel from './VueCarousel.vue'
    export default {
        components: {
            "VueCarousel": VueCarousel,
        },
        computed: {
            background() {
                return this.$site.themeConfig.homeBackgroundUrl
            },
            data() {
                return {
                    ...this.$page.frontmatter,
                    banner: [
                        { src: '/muti/banner/banner1.jpg' },
                        { src: '/muti/banner/banner2.jpg' },
                    ]
                };
            },
        },
        methods: {
        },
    };
</script>

<style lang="stylus" scoped>
    @import './styles/config.styl'
    @import './styles/home.styl'
</style>