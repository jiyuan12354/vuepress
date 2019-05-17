<template>
    <div class="ticket">
        <div class='title'>母體應您所需，衆望所歸2</div>
        <div class="subtitle">聯係我們一切將會改變...</div>
        <a class="action-button animated infinite pulse" href="/request-a-quote/">聯係我們</a>
    </div>
</template>

<script>
    export default {
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
    @import './styles/ticketApplication.styl';
</style>