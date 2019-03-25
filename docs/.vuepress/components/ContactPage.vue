<template>
    <div class="contact">
        联系我们
        <form @submit.prevent="showData">
            <div>
                <label for="name">您的名称</label>
                <input type="text" id="name" v-model="data.formObj.name">
            </div>
            <div>
                <label for="email">您的邮箱</label>
                <input type="text" id="email" v-model="data.formObj.email">
            </div>
            <div>
                <label for="requirement">您需要我们为您做什么</label>
                <input type="text" id="requirement" v-model="data.formObj.requirement">
            </div>
            <div>
                <input type="submit" value="提交" />
            </div>
        </form>
    </div>
</template>

<!-- <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script> -->
<script>
    var emailjs = require("emailjs-com");
    export default {
        computed: {
            data() {
                return {
                    ...this.$page.frontmatter,
                    formObj: {
                        name: "",
                        email: "",
                        requirement: ""
                    }
                };
            },
        },
        methods: {
            showData(e) {
                console.log(e);
                console.log(this.data.formObj);
                var templateParams = {
                    reply_to: 'jiyuan12354@163.com',
                    message_html: "123456789"
                };
                emailjs.send('dengjyqq_smtp_server', 'muti', templateParams, "user_58xuBLVRAeK86bIgt56Xy")
                    .then(function (response) {
                        alert("SECCUSS");
                    }, function (error) {
                        alert("Failed");
                    });
            }
        },
    };
</script>

<style lang="stylus">
    @import './styles/config.styl'
    @import './styles/contact.styl'
</style>