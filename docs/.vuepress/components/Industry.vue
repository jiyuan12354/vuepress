<template>
    <div class="industry">
        <div class="page_title">
            <h1>APP开发</h1>
        </div>
        <div class="clear"></div>
        <div class="service_list">
            <a href="">
                <li class="ios"><img src="http://www.kubikeji.com/templets/KuBiKeJi/img_new/ios-ico.png">
                    <span>IOS APP开发</span>
                </li>
            </a>
            <a href="">
                <li class="andr">
                    <img src="http://www.kubikeji.com/templets/KuBiKeJi/img_new/android-ico.png">
                    <span>Android APP开发</span>
                </li>
            </a>
            <a href="">
                <li class="html5">
                    <img src="http://www.kubikeji.com/templets/KuBiKeJi/img_new/html5-ico.png">
                    <span>HTML5开发</span>
                </li>
            </a>
        </div>
        <div class="video-contain">
            <div class="title">
                科技券計劃
            </div>
            <div class="video">
                <VueLazyYoutubeVideo url="https://www.youtube.com/watch?v=mMboBdbWACc" />
            </div>
        </div>
    </div>
</template>

<script>
    import VueLazyYoutubeVideo from "./VueLazyYoutubeVideo.vue";
    export default {
        component: {
            VueLazyYoutubeVideo
        },
        data() {
            return {
            };
        },
        computed: {
            data() {
                return {
                    ...this.$page.frontmatter,
                };
            },
        },
        watch: {
        },
        methods: {
        }
    };
</script>

<style lang="stylus">
    @import './styles/config.styl';
    @import './styles/industry.styl';
</style>