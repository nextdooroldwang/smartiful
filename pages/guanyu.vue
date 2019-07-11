<template>
  <div class="ruzhu-container">
    <div class="ruzhu-ad">
      <transition name="right-fade">
        <div class="swiper-text" v-if="show1">
          <div class="text2">智能化、数据化、精细化管理</div>
          <div class="text1">从“卖更多”开始</div>
        </div>
      </transition>
    </div>
    <div class="content">
      <div class="compared">
        <div class="title">
          <div>区别于传统货架识别工具</div>
          <div>“卖更多”将打造B2S货架督导全生态平台</div>
        </div>
        <transition name="top-fade">
          <div class="img" v-if="show2">
            <img src="~assets/img/about_pic002.png" alt>
            <div class="img-text-box">
              <div class="img-text1">
                <div>⾼频率稳定的终端店⻓拍照。</div>
                <div>无额外成本、代发陈列费，SaaS模式⻓期稳定</div>
              </div>
              <div class="img-text2">
                <div>需稽查员、第三⽅、众包等额外成本</div>
                <div>竞争强烈，⻓期付费意愿不强</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="ruzhu-image">
        <div class="title">超商店长 入驻流程</div>
        <div class="items">
          <div class="item">
            <transition name="bottom-fade">
              <img src="~assets/img/about_ico001.png" v-if="show3">
            </transition>
            <span>深度学习</span>
          </div>
          <div class="item">
            <transition name="bottom-fade">
              <img src="~assets/img/about_ico002.png" v-if="show3">
            </transition>
            <span>机器视觉</span>
          </div>
          <div class="item">
            <transition name="bottom-fade">
              <img src="~assets/img/about_ico003.png" v-if="show3">
            </transition>
            <span>数据科学</span>
          </div>
          <div class="item">
            <transition name="bottom-fade">
              <img src="~assets/img/about_ico004.png" v-if="show3">
            </transition>
            <span>资金安全</span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-title">主要功能</div>
        <div class="box-grid">
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico005.png" alt>
              </div>
            </transition>
            <div class="title">AI智能图像识别</div>

            <div class="line-row"></div>
            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico006.png" alt>
              </div>
            </transition>
            <div class="title">智能云端</div>

            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico007.png" alt>
              </div>
            </transition>
            <div class="title">多终端适配 操作方便</div>

            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico008.png" alt>
              </div>
            </transition>
            <div class="title">货架、地堆均可识别</div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico009.png" alt>
              </div>
            </transition>
            <div class="title">多重核验 确保真实</div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico010.png" alt>
              </div>
            </transition>
            <div class="title">人工复验 申诉重审</div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico011.png" alt>
              </div>
            </transition>
            <div class="title">报表统计 清晰全面</div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show4">
                <img src="~assets/img/about_ico012.png" alt>
              </div>
            </transition>
            <div class="title">未来可扩展性</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
import ComponentInput from '@/components/Input'
import ComponentSelect from '@/components/Select'
import pic002 from '@/assets/img/home_pic002.jpg'
import pic003 from '@/assets/img/home_pic003.jpg'
import pic004 from '@/assets/img/home_pic004.jpg'
export default {
  data () {
    return {
      form: {
        classify: '',
        brand: '',
        name: '',
        phone: ''
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
      options: [{
        id: 0,
        name: '包装食品饮料'
      }, {
        id: 1,
        name: '烟、酒'
      }, {
        id: 2,
        name: '个人清洁护理品'
      }, {
        id: 3,
        name: '家庭清洁品'
      }, {
        id: 4,
        name: '其他'
      },],
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
      if (scrollTop > 500) {
        this.show2 === false && (this.show2 = true)
      }
      if (scrollTop > height / 2 + 500) {
        this.show3 === false && (this.show3 = true)
      }
      if (scrollTop > height / 2 + 500 + 550) {
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
    background-image: url("~assets/img/about_pic001.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    padding: 44vh 0 0 20vw;
    .swiper-text {
      .text1 {
        font-size: 84px;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
      }
      .text2 {
        font-size: 48px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 82px;
      }
    }
  }
  .content {
    width: 100%;
    .compared {
      width: 100%;
      height: 828px;
      display: grid;
      grid-template-rows: 274px 1fr;
      align-items: center;
      justify-items: center;
      .title {
        div {
          font-size: 42px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 137, 0, 1);
          text-align: center;
        }
      }
      .img {
        align-self: flex-start;
        // display: grid;
        width: 1180px;
        text-align: center;
        justify-items: center;
        .img-text-box {
          display: grid;
          grid-template-columns: 410px 322px;
          justify-content: space-between;
          padding: 61px 70px 0 40px;
          .img-text1 {
            div {
              text-align: center;
              font-size: 20px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(255, 137, 0, 1);
            }
          }
          .img-text2 {
            div {
              text-align: center;
              font-size: 20px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(54, 54, 54, 1);
            }
          }
        }
      }
    }
    .ruzhu-image {
      width: 100%;
      height: 547px;
      background: #ff8900;
      display: grid;
      grid-template-rows: 152px 1fr;
      justify-items: center;
      justify-content: center;
      .title {
        align-self: center;
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .items {
        width: 1180px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-evenly;
        .item {
          display: grid;
          grid-template-rows: 248px 1fr;
          justify-items: center;
          span {
            display: block;
            font-size: 28px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    .box {
      height: 681px;
      display: grid;
      justify-items: center;
      grid-template-rows: 93px 1fr;
      .box-title {
        font-size: 42px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 137, 0, 1);
        text-align: center;
        align-self: center;
      }
      .box-grid {
        width: 1180px;
        height: 586px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        .grid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          .line-row {
            width: 1180px;
            height: 2px;
            background: linear-gradient(
              to right,
              rgba(222, 222, 222, 0.1),
              rgba(222, 222, 222),
              rgba(222, 222, 222, 0.1)
            );
            position: absolute;
            bottom: -1px;
            left: 0;
          }
          .line-column {
            width: 2px;
            height: 586px;
            background: linear-gradient(
              rgba(222, 222, 222, 0.1),
              rgba(222, 222, 222),
              rgba(222, 222, 222, 0.1)
            );
            position: absolute;
            top: 0;
            right: -1px;
          }
          .icon {
            height: 98px;
            text-align: center;
            img {
              height: 100%;
            }
          }
          .title {
            font-size: 24px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(124, 124, 124, 1);
            text-align: center;
            padding-bottom: 22px;
          }
          .sub-title {
            span {
              display: block;
              text-align: center;
              font-size: 16px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(124, 124, 124, 1);
            }
          }
        }
      }
    }
    .photo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 49px;
      margin-top: 116px;
    }
  }
}
</style>
