<template>
  <div class="xiazai-container">
    <div class="xiazai-ad">
      <div class="swiper-text">
        <div class="text1">下载“卖更多”</div>
        <div class="text2">手机微信扫一扫左侧二维码，</div>
        <div class="text2">即可登录【卖更多】小程序</div>
        <div class="text3">目前仅对已注册用户开放，请确保您已加入【卖更多】</div>
        <div class="btns">
          <component-button value="品牌商加盟" @onclick="$router.push({path:'/jiameng'})"/>
          <component-button value="便利店超市 店长入驻" @onclick="$router.push({path:'/ruzhu'})"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
export default {
  components: {
    ComponentButton
  },
}
</script>

<style lang="less">
.xiazai-container {
  margin: 0 auto;
  .xiazai-ad {
    width: 100%;
    height: 100vh;
    background-image: url("~assets/img/app_pic01.jpg");
    padding: 304px 0 0 363px;
    .swiper-text {
      .text1 {
        font-size: 80px;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 102px;
      }
      .text2 {
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
      }
      .text3 {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        margin: 30px 0 80px 0;
      }
      .btns {
        div {
          margin: 0 12px;
        }
      }
    }
  }
}
</style>
