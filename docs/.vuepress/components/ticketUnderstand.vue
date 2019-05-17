<template>
    <div>
        <div class="ticket">
            <h1 class="subject">母體科技支援香港科技券(TVP)計劃</h1>
            <h2 class="title">TVP香港科技券計劃</h2>
            <div class="description">香港科技券計劃 (TVP) 由創新科技署於 2016 年 11 月推出，旨在資助本地非上市企業使用科技服務和方案，以提高生產力或就其業務流程升級轉型。
                創新及科技基金將會為每家合資格的企業提供高達港幣 $400,000 的數碼轉型資金。</div>
            <div class="top-button">
                <a class="action-button" href="/request-a-quote/">立即聯係我們</a>
                <a class="action-button" href="application.html">如何申請？</a>
            </div>
        </div>

        <div class="video-contain">
            <div class="title">
                哪些人可以得到資助？
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
            return {};
        },
        computed: {
            data() {
                return {
                    ...this.$page.frontmatter
                };
            }
        },
        // mounted(){
        //     let sidebar=document.querySelector('.sidebar');
        //     sidebar.style.display="block";
        // },
        watch: {},
        methods: {}
    };
</script>

<style lang="stylus" scoped>
    @import './styles/config.styl';
    @import './styles/ticketUnderstand.styl';
</style>