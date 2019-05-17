<template>
    <div class="whyUs">
        <div class="features animated fadeIn">
            <div class="feature fadeIn" v-for="(item, index) in data.features">
                <div class="title">
                    <h3>
                        <span class="index">0{{ index + 1 }}/</span>
                        {{ item.title }}
                        <img :src="$withBase(item.icon)" alt="">
                    </h3>
                    <p v-for="p in item.details">{{ p }}</p>
                </div>
                <div class="icon">
                    <img :src="$withBase(item.icon)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        // mounted(){
        //     let sidebar=document.querySelector('.sidebar');
        //     sidebar.style.display="none";
        // },
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
    @import './styles/reason.styl';
</style>