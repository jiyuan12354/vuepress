<template>
    <div class="home">
        <VueCarousel :imgs="data.banner" :delay="2000" :imgWidth="960" :imgHeight="606" :dotWidth="10" />
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
            <div class="feature fadeIn" v-for="item in data.features">
                <h2>{{ item.title }}</h2>
                <p>{{ item.details }}</p>
            </div>
        </div>
        <div class="content custom"></div>
        <div class="footer">
            {{data.footer}}
        </div>
    </div>
</template>

<script>
    // import { swiper, swiperSlide } from "vue-awesome-swiper";
    // import 'swiper/dist/css/swiper.css';
    // import '../rem.js';
    import VueCarousel from './VueCarousel.vue'
    export default {
        components: {
            VueCarousel
        },
        computed: {
            background() {
                return this.$site.themeConfig.homeBackgroundUrl
            },
            data() {
                return {
                    ...this.$page.frontmatter,
                    banner: [
                        { src: '/muti/banner/d_index_content_bg1.jpg' },
                        { src: '/muti/banner/d_index_content_bg2.jpg' },
                        { src: '/muti/banner/technology1.jpg' },
                    ]
                };
            },
            homeStyle() {
                return {
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'background-attachment': 'scroll',
                    'background-image': `url(${this.background})`,
                }
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