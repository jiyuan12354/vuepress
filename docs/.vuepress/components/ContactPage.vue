<template>
    <!-- <div class="contact">
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
    </div> -->
    <div class="block p40 bg grey contactBlock2">
        <div class="contentWrap">
            <div class="gWrap">
                <div class="gWrap1-3 gWrap-xs-1">
                    <div class="miniBlock bg white">
                        <div class="descr list">
                            <ul>
                                <li class="addressIcon">香港九龍觀塘開源道45號有利中心7樓全層</li>
                                <li class="telIcon">電話: <a href="tel:+85239526488">(852) 3952 6488</a></li>
                                <li class="faxIcon">傳真: <a href="fax:+85230169713">(852) 3016 9713</a></li>
                                <li class="mailIcon"><a href="mailto:info@codefreesoft.com">info@codefreesoft.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gWrap2-3 gWrap-xs-1">
                    <div class="miniBlock bg white contact_msg_form">
                        <h3 class="title">请告诉我们您遇到的问题</h3>
                        <div class="miniiSet">
                            <label for="msg_name">姓名 <span class="validMsg  red  validMsg_email ">*</span></label>
                            <div class="inputWrap inputFull">
                                <input type="text" id="msg_name" class="simpleStyle">
                            </div>
                        </div>
                        <div class="miniiSet">
                            <label for="msg_email">聯絡電郵<span class="validMsg  red  validMsg_email ">*</span></label>
                            <div class="inputWrap inputFull">
                                <input type="text" id="msg_email" class="simpleStyle">
                            </div>
                        </div>
                        <div class="miniiSet">
                            <label for="msg_tel">聯絡電話 (可選填)</label>
                            <div class="inputWrap inputFull">
                                <input type="text" id="msg_tel" class="simpleStyle onlyPhone">
                            </div>
                        </div>
                        <div class="miniiSet">
                            <label for="msg_msg">你的訊息<span class="validMsg  red  validMsg_email ">*</span></label>
                            <div class="inputWrap inputFull">
                                <textarea id="msg_msg" class="simpleStyle"></textarea>
                            </div>
                        </div>


                        <div class="footerBar">
                            <div class="cmnBtn blueStyle popBtn_send">發送</div>
                        </div>
                    </div>
                    <div class="miniBlock bg white popup_msg_ok">
                        <div class="popupContent">
                            <div class="iconMessage">
                                <div class="iconMessageWrap">
                                    <div class="imgPart float_left"><img src="/muti/contact/popup_tick.png" alt="">
                                    </div>
                                    <div class="textPart">
                                        <div class="title bottomBorder">謝謝</div>
                                    </div>
                                    <div class="message_content">你的訊息已在處理中。<br><br>如果就我們的服務有任何疑問，<br>請電(852) 3952 6488 或發送電郵給我們
                                        <a href="mailto:info@codefreesoft.com">info@codefreesoft.com</a>。<br><br>謝謝
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                    message_html: "来自[" + this.data.formObj.name + ']的消息：<br />' +
                        this.data.formObj.requirement + '<br />' +
                        "邮件:" + this.data.formObj.email
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