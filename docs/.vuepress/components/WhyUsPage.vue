<template>
    <div class="whyUs">
        <div class="features animated fadeIn">
            <div class="feature fadeIn" v-for="item in data.features">
                <h2>{{ item.title }}</h2>
                <p>{{ item.details }}</p>
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
        computed: {
            xxxx() {
            }
        },
        watch: {
        },
        methods: {
        }
    };
</script>

<style lang="stylus">
    @import './styles/config.styl';
    @import './styles/contact.styl';
</style>