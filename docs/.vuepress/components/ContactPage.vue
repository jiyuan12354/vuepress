<template>
  <div class="bodyWrap">
    <div class="topBanner">
      <h3 class="center mb0">聯絡我們</h3>
    </div>
    <div class="block p40 bg grey contactBlock2">
      <div class="contentWrap">
        <div class="gWrap">
          <div class="gWrap1-3 gWrap-xs-1">
            <div class="miniBlock bg white">
              <div class="descr list">
                <ul>
                  <li class="addressIcon">{{contact.address}}</li>
                  <li class="telIcon">
                    電話:
                    <a href="tel:+85227813472">{{contact.phone}}</a>
                  </li>
                  <li class="mailIcon">
                    <a href="mailto:info@codefreesoft.com">{{contact.email}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="gWrap2-3 gWrap-xs-1">
            <div class="miniBlock bg white contact_msg_form" v-if="!showMessage" key="1">
              <h3 class="title">請告訴我們您需要解決的問題</h3>
              <form @submit.prevent="showData">
                <div class="miniiSet">
                  <label for="msg_name">
                    姓名
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <input type="text" id="msg_name" class="simpleStyle" v-model="formObj.name">
                  </div>
                </div>
                <div class="miniiSet">
                  <label for="msg_email">
                    聯絡電郵
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <input type="text" id="msg_email" class="simpleStyle" v-model="formObj.email"
                      @change="validateEmail(formObj.email)">
                  </div>
                  <div class="error" v-if="emailInValid">請輸入正確的郵箱地址</div>
                </div>
                <div class="miniiSet">
                  <label for="msg_tel">聯絡電話 (可選填)</label>
                  <div class="inputWrap inputFull">
                    <input type="text" id="msg_tel" class="simpleStyle onlyPhone" v-model="formObj.phone">
                  </div>
                </div>
                <div class="miniiSet">
                  <label for="msg_msg">
                    妳的訊息
                    <span class="validMsg red validMsg_email">*</span>
                  </label>
                  <div class="inputWrap inputFull">
                    <textarea id="msg_msg" class="simpleStyle" v-model="formObj.requirement"></textarea>
                  </div>
                </div>

                <div class="footerBar">
                  <input class="cmnBtn blueStyle popBtn_send" type="submit" value="發送" v-bind:disabled="formInValid">
                </div>
              </form>
            </div>
            <div class="miniBlock bg white popup_msg_ok" v-else key="2">
              <div class="popupContent">
                <div class="iconMessage">
                  <div class="iconMessageWrap">
                    <div class="imgPart float_left">
                      <img src="/contact/popup_tick.png" alt>
                    </div>
                    <div class="textPart">
                      <div class="title bottomBorder">謝謝</div>
                    </div>
                    <div class="message_content">
                      妳的訊息已在處理中。
                      <br>
                      <br>如果就我們的服務有任何疑問，
                      <br>請電(852) 2781 3472 或發送電郵給我們
                      <a href="mailto:mother.technology.limited@gmail.com">mother.technology.limited@gmail.com</a>。
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

<script>
  var emailjs = require("emailjs-com");
  const debounce = (function () {
    let timer = 0;
    return function (func, delay) {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  })();
  export default {
    data() {
      return {
        formObj: {
          name: "",
          email: "",
          requirement: ""
        },
        showMessage: false,
        emailInValid: false,
        formInValid: true,
      };
    },
    // mounted() {
    //   let sidebar = document.querySelector('.sidebar');
    //   sidebar.style.display = "none";
    // },
    computed: {
      contact() {
        return {
          ...this.$page.frontmatter
        };
      }
    },
    watch: {
      // email() {
      //   debounce(() => {
      //     this.validateEmail();
      //   }, 200);
      // },
      formObj: {
        //深度監聽，可監聽到對象、數組的變化
        handler(val, oldVal) {
          this.validateEmail();
        },
        deep: true
      }
    },
    methods: {
      validateEmail() {
        if (
          this.formObj.email &&
          this.formObj.email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          this.emailInValid = false;
          this.formInValid = false;
        } else {
          this.emailInValid = true;
          this.formInValid = true;
        }
      },
      showData(e) {
        console.log(e);
        console.log(this.formObj);
        var templateParams = {
          reply_to: "jiyuan12354@163.com",
          message_html:
            "來自[" +
            this.formObj.name +
            "]的消息：<br />" +
            this.formObj.requirement +
            "<br />" +
            "郵件:" +
            this.formObj.email +
            "<br />" +
            "電話:" +
            this.formObj.phone
        };
        if (this.formObj.name && this.formObj.requirement && this.formObj.email) {
          var that = this;
          emailjs
            .send(
              "dengjyqq_smtp_server",
              "muti",
              templateParams,
              "user_58xuBLVRAeK86bIgt56Xy"
            )
            .then(
              function (response) {
                that.showMessage = true;
              },
              function (error) {
                alert("發送失敗,請檢查網絡後重試!");
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