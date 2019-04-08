<template>
    <div class="industry">
        <div class="industry-sidebar" style="dislay: block">
            <ul class="industry-sidebar-links">
                <li>
                    <div class="industry-sidebar-group first">
                        <p class="industry-sidebar-heading open">
                            <span>行业</span>
                        </p>
                        <ul class="industry-sidebar-group-items">
                            <li>
                                <a href="#aaa" class="industry-sidebar-link" @click="activate(1)"
                                    :class="{ active : active_el == 1 }">运输和物流</a>
                            </li>
                            <li>
                                <a href="#bbb" class="industry-sidebar-link" @click="activate(2)"
                                    :class="{ active : active_el == 2 }">运输和物流</a>
                            </li>
                            <li>
                                <a href="#ccc" class="industry-sidebar-link" @click="activate(3)"
                                    :class="{ active : active_el == 3 }">运输和物流</a>
                            </li>
                            <li>
                                <a href="#ddd" class="industry-sidebar-link" @click="activate(4)"
                                    :class="{ active : active_el == 4 }">运输和物流</a>
                            </li>
                            <li>
                                <a href="#eee" class="industry-sidebar-link" @click="activate(5)"
                                    :class="{ active : active_el == 5 }">运输和物流</a>
                            </li>
                            <li>
                                <a href="#fff" class="industry-sidebar-link" @click="activate(6)"
                                    :class="{ active : active_el == 6 }">运输和物流</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="page">
            <div class="content">
            </div>
        </div>
        <!-- <div class="video-contain">
            <div class="title">
                科技券計劃
            </div>
            <div class="video">
                <VueLazyYoutubeVideo url="https://www.youtube.com/watch?v=mMboBdbWACc" />
            </div>
        </div> -->
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
                active_el: 1
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
            activate: function (el) {
                this.active_el = el;
            }
        }
    };
</script>

<style lang="stylus" scoped>
    @import './styles/config.styl';
    @import './styles/industry.styl';
</style>