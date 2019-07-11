<template>
  <div class="ruzhu-container">
    <div class="ruzhu-ad">
      <transition name="right-fade">
        <div class="swiper-text" v-if="show1">
          <div class="text2">与500万实体零售门店做邻居</div>
          <div class="text2">在线领补助、提现即刻到账</div>
          <div class="text1">更快速、更安全</div>
          <div class="btns">
            <a href="#ruzhu">
              <component-button value="便利店超市 店长入驻"/>
            </a>
          </div>
        </div>
      </transition>
    </div>
    <div class="content">
      <div class="main">
        <div class="mart">
          <div class="title">
            <span>这</span>
            <transition name="big-fade">
              <img width="186" height="95" src="~assets/img/home_text500.png" alt v-if="show2">
            </transition>
            <div>
              <div>万家便利店</div>
              <div>都领到了陈列补助费</div>
            </div>
          </div>
          <div class="marts-box">
            <div
              class="mart-item"
              :style="{borderRadius: '20px',backgroundImage:`url(${item.path})`}"
              v-for="item in marts"
              :key="item.id"
            ></div>
          </div>
          <div class="text">
            便利店超市作为快消品销售的终端市场，商品货架一直是各个品牌商的首要战场，确保品牌和商品能陈列于
            货架的显眼位置并立即抓住消费者的目光，是相当重要又直接影响商品销量的重要指标。
            加入“卖更多”的超商店长只要每日按品牌商规则，满足“品类齐全、摆放整齐、面向消费者、与竞品有区隔”
            等基本陈列要求即可获得品牌商的陈列补助费。费用按日结算，提现快速到账，每月都可为店面增加不菲的
            定向收入。
          </div>
        </div>
      </div>

      <div class="photo-image">
        <transition name="right-fade">
          <div v-if="show3">店长通过上传照⽚</div>
        </transition>
        <transition name="right-fade">
          <div v-if="show3">直观反映商品陈列表现</div>
        </transition>
        <transition name="right-fade">
          <div v-if="show3">通过达标机制</div>
        </transition>
        <transition name="right-fade">
          <div v-if="show3">获得品牌商现⾦奖励</div>
        </transition>
      </div>

      <div class="photo">
        <div class="stair">
          <transition name="right-fade">
            <img width="598px" height="591px" src="~assets/img/entering_pic006.jpg" v-if="show4">
          </transition>
          <transition name="left-fade">
            <div class="text" style="width:537px" v-if="show4">
              <div class="sub">
                <div class="sub-text">
                  1、只需要一部手机登录“卖更多”平台，一键拍照，极简的操作步骤和拍照上
                  传流程，让更多零售人员使用无门槛零压力。
                </div>
              </div>
              <div class="sub">
                <div class="sub-text">
                  2、最快几分钟后，终端零售商即可查看到此次陈列展示得分，及对应的补助
                  金收入。
                </div>
              </div>
              <div class="sub">
                <div class="sub-text">3、对审核不满意的照片有一次申诉机会，不让任何上传结果有争议。</div>
              </div>
              <div class="sub">
                <div class="sub-text">
                  4、每日获得陈助补助费用明晰准确，按月满额即可提现，到账快速安全，每
                  月都可为店面增加不菲的定向收。
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="process-board">
        <div class="title">超商店长 入驻流程</div>
        <img src="~assets/img/entering_pic007.png" alt>
      </div>
      <div>
        <a id="ruzhu"></a>
      </div>
      <div class="join">
        <div class="title">便利店超市 店长入驻</div>
        <div class="forms">
          <div class="form">
            <div class="label">门店位置</div>
            <div class="address">
              <component-select
                :model="form.province"
                :options="options1"
                @onselect="(val)=>form.province=val"
                placeholder="请选择省"
              />
              <component-select
                :model="form.city"
                :options="options2"
                @onselect="(val)=>form.city=val"
                placeholder="请选择市"
              />
              <component-select
                :model="form.area"
                :options="options3"
                @onselect="(val)=>form.area=val"
                placeholder="请选择区"
              />
              <component-input
                :model="form.address"
                @oninput="(val)=>form.address=val"
                placeholder="请输入详细地址"
              />
            </div>
          </div>
          <div class="form-areage">
            <div class="form">
              <div class="label">门店面积</div>
              <div>
                <component-input
                  :model="form.acreage"
                  @oninput="(val)=>form.acreage=val"
                  placeholder="请输入面积"
                />
              </div>
            </div>
            <div class="form">
              <div class="label">姓名</div>
              <div>
                <component-input
                  :model="form.name"
                  @oninput="(val)=>form.name=val"
                  placeholder="请输入姓名"
                />
              </div>
            </div>
            <div class="form">
              <div class="label">手机号码</div>
              <div>
                <component-input
                  :model="form.number"
                  @oninput="(val)=>form.number=val"
                  placeholder="请输入电话"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="submit">
          <component-button value="提交信息" @onclick="onSubmit"/>
        </div>
        <div class="tips">收到您的提交申请后，我们将有工作人员与您联系</div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
import ComponentInput from '@/components/Input'
import ComponentSelect from '@/components/Select'
import pic002 from '@/assets/img/entering_pic002.jpg'
import pic003 from '@/assets/img/entering_pic003.jpg'
import pic004 from '@/assets/img/entering_pic004.jpg'
export default {
  data () {
    return {
      form: {
        province: '',
        city: '',
        area: '',
        address: '',
        acreage: '',
        name: '',
        number: ''
      },
      marts: [{
        id: 0,
        path: pic002
      }, {
        id: 1,
        path: pic003
      }, {
        id: 2,
        path: pic004
      },],
      options1: [{ name: '辽宁省' }],
      options2: [{ name: '沈阳市' }],
      options3: [{ name: '和平区' }, { name: '沈河区' }, { name: '于洪区' }, { name: '浑南区' }, { name: '沈北区' },],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }
  },
  components: {
    ComponentButton,
    ComponentInput,
    ComponentSelect
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    },
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let height = document.documentElement.clientHeight
      console.log("滚动距离" + scrollTop);
      if (scrollTop > 200) {
        this.show2 === false && (this.show2 = true)
      }
      if (scrollTop > height / 2 + 900) {
        this.show3 === false && (this.show3 = true)
      }
      if (scrollTop > height / 2 + 900 + 650) {
        this.show4 === false && (this.show4 = true)
      }

    },
  },
  mounted () {
    this.show1 = true
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="less">
@import "../assets/less/translate.less";
.ruzhu-container {
  margin: 0 auto;
  .ruzhu-ad {
    width: 100%;
    height: 100vh;
    background-image: url("~assets/img/entering_pic001.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 44vh 0 0 20vw;
    .swiper-text {
      .text1 {
        font-size: 70px;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 70px;
      }
      .text2 {
        font-size: 46px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
      }
      .btns {
        div {
          margin: 45px 12px;
        }
      }
    }
  }
  .content {
    width: 100%;
    // background-image: url("~assets/img/home_bg.jpg");
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
      width: 1180px;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      padding-top: 54px;
      padding-bottom: 73px;
      .mart {
        .title {
          font-size: 42px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 137, 0, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            margin: 0 12px;
          }
          & > div {
            margin-top: 76px;
          }
        }
        .marts-box {
          width: 100%;
          height: 300px;
          display: flex;
          margin: 65px 0 82px 0;
          .mart-item {
            width: 300px;
            height: 300px;
            border-radius: 20px;
            margin: 0 12px;
            img {
              object-fit: cover;
            }
          }
        }
        .text {
          width: 753px;
          font-size: 16px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(124, 124, 124, 1);
          line-height: 30px;
          margin: 0 auto;
        }
      }
    }
    .photo-image {
      width: 100%;
      height: 635px;
      background-image: url("~assets/img/entering_pic005.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20vw;
      div {
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .photo {
      min-height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 49px;
      margin-top: 116px;
      .stair {
        display: flex;
        width: 1180px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 35px;
        .text {
          .title {
            font-size: 42px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 137, 0, 1);
          }
          .sub {
            margin-top: 44px;
            .sub-title {
              font-size: 24px;
              font-family: PingFangSC-Regular;
              font-weight: bold;
              color: rgba(124, 124, 124, 1);
            }
            .sub-text {
              font-size: 16px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(124, 124, 124, 1);
            }
          }
        }
      }
    }
    .process-board {
      width: 100%;
      background-image: url("~assets/img/brand_bg_02.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 1022px;
      padding-top: 174px;
      text-align: center;
      .title {
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 137, 0, 1);
        text-align: center;
        margin-bottom: 72px;
      }
    }
    .join {
      width: 100%;
      height: 663px;
      background-image: url("~assets/img/entering_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-rows: 188px 1fr 165px 80px;
      .title {
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
      .forms {
        width: 925px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 20px;
        .form-areage {
          width: 925px;
          display: grid;
          grid-template-columns: 256px 256px 1fr;
          grid-column-gap: 20px;
        }
        .label {
          font-size: 24px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 20px;
        }
        .address {
          display: grid;
          grid-template-columns: 164px 164px 164px 1fr;
          grid-column-gap: 24px;
        }
      }
      .tips {
        text-align: center;
        font-size: 22px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 209, 130, 1);
        align-self: start;
      }
    }
  }
}
</style>
