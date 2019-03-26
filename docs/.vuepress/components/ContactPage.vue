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
  </div>-->
  <div class="bodyWrap">
    <div class="topBanner">
      <h2 class="center mb0">聯絡我們</h2>
    </div>
    <div class="block p40 bg grey contactBlock2">
      <div class="contentWrap">
        <div class="gWrap">
          <div class="gWrap1-3 gWrap-xs-1">
            <div class="miniBlock bg white">
              <div class="descr list">
                <ul>
                  <li class="addressIcon">香港九龍觀塘開源道45號有利中心7樓全層</li>
                  <li class="telIcon">
                    電話:
                    <a href="tel:+85239526488">(852) 3952 6488</a>
                  </li>
                  <li class="faxIcon">
                    傳真:
                    <a href="fax:+85230169713">(852) 3016 9713</a>
                  </li>
                  <li class="mailIcon">
                    <a href="mailto:info@codefreesoft.com">info@codefreesoft.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="gWrap2-3 gWrap-xs-1">
            <div class="miniBlock bg white contact_msg_form" v-if="!data.showMessage" key="1">
              <h3 class="title">请告诉我们您需要解决的问题</h3>
              <form @submit.prevent="showData">
                <div class="miniiSet">
                  <label for="msg_name">
                    姓名
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <input
                      type="text"
                      id="msg_name"
                      class="simpleStyle"
                      v-model="data.formObj.name"
                    >
                  </div>
                </div>
                <div class="miniiSet">
                  <label for="msg_email">
                    聯絡電郵
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <input
                      type="text"
                      id="msg_email"
                      class="simpleStyle"
                      v-model="data.formObj.email"
                      @change="validateEmail(data.formObj.email)"
                    >
                  </div>
                  <div class="error" v-if="data.emailInValid">请输入正确的邮箱地址</div>
                </div>
                <div class="miniiSet">
                  <label for="msg_tel">聯絡電話 (可選填)</label>
                  <div class="inputWrap inputFull">
                    <input
                      type="text"
                      id="msg_tel"
                      class="simpleStyle onlyPhone"
                      v-model="data.formObj.phone"
                    >
                  </div>
                </div>
                <div class="miniiSet">
                  <label for="msg_msg">
                    你的訊息
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <textarea id="msg_msg" class="simpleStyle" v-model="data.formObj.requirement"></textarea>
                  </div>
                </div>

                <div class="footerBar">
                  <!--  :disabled="!data.emailInValid" -->
                  <input class="cmnBtn blueStyle popBtn_send" type="submit" value="發送">
                </div>
              </form>
            </div>
            <div class="miniBlock bg white popup_msg_ok" v-else key="2">
              <div class="popupContent">
                <div class="iconMessage">
                  <div class="iconMessageWrap">
                    <div class="imgPart float_left">
                      <img src="/muti/contact/popup_tick.png" alt>
                    </div>
                    <div class="textPart">
                      <div class="title bottomBorder">謝謝</div>
                    </div>
                    <div class="message_content">
                      你的訊息已在處理中。
                      <br>
                      <br>如果就我們的服務有任何疑問，
                      <br>請電(852) 3952 6488 或發送電郵給我們
                      <a
                        href="mailto:info@codefreesoft.com"
                      >info@codefreesoft.com</a>。
                      <br>
                      <br>謝謝
                    </div>
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
        },
        showMessage: false,
        emailInValid: false
      };
    }
  },
  methods: {
    validateEmail(email) {
      if (
        email &&
        email.match(
          "^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[.][a-z]{2,3}([.][a-z]{2})?$"
        )
      ) {
        this.data.emailInValid = false;
      } else {
        this.data.emailInValid = true;
      }
    },
    showData(e) {
      console.log(e);
      console.log(this.data.formObj);
      var templateParams = {
        reply_to: "jiyuan12354@163.com",
        message_html:
          "来自[" +
          this.data.formObj.name +
          "]的消息：<br />" +
          this.data.formObj.requirement +
          "<br />" +
          "邮件:" +
          this.data.formObj.email +
          "<br />" +
          "电话:" +
          this.data.formObj.phone
      };
      if (
        this.data.formObj.name &&
        this.data.formObj.requirement &&
        this.data.formObj.email
      ) {
        var that = this;
        emailjs
          .send(
            "dengjyqq_smtp_server",
            "muti",
            templateParams,
            "user_58xuBLVRAeK86bIgt56Xy"
          )
          .then(
            function(response) {
              that.data.showMessage = true;
              that.$forceUpdate();
            },
            function(error) {
              alert("发送失败,请检查网络后重试!");
            }
          );
      }
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';
@import './styles/contact.styl';
</style>