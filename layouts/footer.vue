<template>
  <div class="foot-container">
    <div class="foot-main">
      <div class="info">
        <img width="95" height="123" src="~assets/img/bottom_logo.png" alt>
        <div class="right">
          <div class="company">
            <div class="text-box">
              <img width="22" height="22" src="~assets/img/ico_fu.png" alt>
              <span class="label">客服电话：</span>
              <span class="value">400-0053-256</span>
            </div>
            <div class="text-box">
              <img width="22" height="22" src="~assets/img/ico_dh.png" alt>
              <span class="label">商家热线：</span>
              <span class="value">024-25895569</span>
            </div>
            <div class="text-box">
              <img width="22" height="22" src="~assets/img/ico_sj.png" alt>
              <span class="label">客服时间：</span>
              <span class="value">8:00-20:00</span>
            </div>
          </div>
          <img width="131" src="~assets/img/bottom_code.png" alt>
        </div>
      </div>
      <div
        class="mark"
      >Copyright ©2019 maigengduo.com 沈阳卓芯数据科技有限公司 辽ICP备0000000 增值电信业务经营许可证：辽B1-00000000 辽公网安备 88888888888号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="less" scoped>
.foot-container {
  width: 100%;
  height: 271px;
  background-image: url("~assets/img/bottom_bg.png");
  display: flex;
  justify-content: center;
  .foot-main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 84px;
    .info {
      width: 1180px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .right {
        display: flex;
        align-items: center;
        .company {
          margin-right: 35px;
          .text-box {
            display: flex;
            align-items: center;
            margin: 8px 0;
            img {
              margin-right: 8px;
            }
            .label {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(124, 124, 124, 1);
            }
            .value {
              font-size: 20px;
              font-family: PingFangSC-Regular;
              font-weight: bold;
              color: rgba(124, 124, 124, 1);
            }
          }
        }
      }
    }
    .mark {
      width: 100%;
      height: 100%;
      line-height: 84px;
      text-align: center;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(166, 166, 166, 1);
    }
  }
}
</style>