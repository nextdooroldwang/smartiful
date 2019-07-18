<template>
  <div class="xiazai-container">
    <div class="xiazai-ad">
      <transition name="right-fade">
        <div class="swiper-text" v-if="show1">
          <div class="text1">下载“卖更多”</div>
          <div class="text2">手机微信扫一扫左侧二维码，</div>
          <div class="text2">即可登录【卖更多】小程序</div>
          <div class="text3">目前仅对已注册用户开放，请确保您已加入【卖更多】</div>
          <div class="btns">
            <component-button value="品牌商加盟" @onclick="$router.push({path:'/jiameng'})"/>
            <component-button value="便利店超市 店长入驻" @onclick="$router.push({path:'/ruzhu'})"/>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
export default {
  data () {
    return {
      show1: false
    }
  },
  components: {
    ComponentButton
  },

  mounted () {
    this.show1 = true
  },

}
</script>

<style lang="less">
@import "../assets/less/translate.less";
.xiazai-container {
  margin: 0 auto;
  .xiazai-ad {
    width: 100%;
    height: 100vh;
    background-image: url("~assets/img/app_pic01.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 44vh 0 0 20vw;
    .swiper-text {
      .text1 {
        font-size: 2.962962962962963rem;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 3.7777777777777777rem;
      }
      .text2 {
        font-size: 1.5555555555555556rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 2.2222222222222223rem;
      }
      .text3 {
        font-size: 0.8888888888888888rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.8888888888888888rem;
        margin: 1.1111111111111112rem 0 2.962962962962963rem 0;
      }
      .btns {
        div {
          margin: 0 0.4444444444444444rem;
        }
      }
    }
  }
}
</style>
