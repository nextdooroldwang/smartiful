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
            <img src="~assets/img/entering_pic006.jpg" v-if="show4">
          </transition>
          <transition name="left-fade">
            <div class="text" v-if="show4">
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
            <component-city-picker @onchange="(obj)=>city=obj"/>
          </div>
          <div class="form-areage">
            <div class="form">
              <div class="label">门店面积</div>
              <div>
                <component-input
                  :model="form.area"
                  @oninput="(val)=>form.area=val"
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
                  :model="form.phone"
                  @oninput="(val)=>form.phone=val"
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
import ComponentCityPicker from '@/components/CityPicker'
import pic002 from '@/assets/img/entering_pic002.jpg'
import pic003 from '@/assets/img/entering_pic003.jpg'
import pic004 from '@/assets/img/entering_pic004.jpg'
export default {
  data () {
    return {
      city: {},
      form: {
        area: '',
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
      // options1: [{ name: '辽宁省' }],
      // options2: [{ name: '沈阳市' }],
      // options3: [{ name: '和平区' }, { name: '沈河区' }, { name: '于洪区' }, { name: '浑南区' }, { name: '沈北区' },],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      state: true
    }
  },
  components: {
    ComponentButton,
    ComponentInput,
    ComponentSelect,
    ComponentCityPicker
  },
  methods: {
    async onSubmit () {
      if (this.state) {
        if (this.checkPhone(this.form.phone) && this.form.area && this.form.name && this.city.province && this.city.city && this.city.area && this.city.address) {
          this.state = false
          await this.postData('http://192.168.1.59:8184/shop', { ...this.form, province: this.city.province, city: this.city.city, region: this.city.area, address: this.city.address })
            .then(data => {
              alert('提交成功！')
            }) // JSON from `response.json()` call
            .catch(error => console.error(error))
          setTimeout(() => {
            this.state = true
          }, 3000);
        } else {
          alert('请填写完整的信息和正确的手机号！')
        }
      }
    },
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let height = document.documentElement.clientHeight
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
    checkPhone (phone) {
      if (!(/^1[3456789]\d{9}$/.test(phone))) {
        return false;
      }
      return true
    },
    postData (url, data) {
      // Default options are marked with *
      return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(response => response.json()) // parses response to JSON
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
        font-size: 2.5925925925925926rem;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 2.5925925925925926rem;
      }
      .text2 {
        font-size: 1.7037037037037037rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 2.2222222222222223rem;
      }
      .btns {
        div {
          margin: 1.6666666666666667rem 0.4444444444444444rem;
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
        font-size: 1.5555555555555556rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .photo {
      min-height: 22.22222222222222rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.8148148148148149rem;
      margin-top: 4.296296296296297rem;
      .stair {
        display: flex;
        width: 43.7037037037037rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.2962962962962963rem;
        img {
          width: 22.14814814814815rem;
          height: 21.88888888888889rem;
          margin-right: 2rem;
        }
        .text {
          width: 19.88888888888889rem;
          .title {
            font-size: 1.5555555555555556rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 137, 0, 1);
          }
          .sub {
            margin-top: 1.6296296296296295rem;
            .sub-title {
              font-size: 0.8888888888888888rem;
              font-family: PingFangSC-Regular;
              font-weight: bold;
              color: rgba(124, 124, 124, 1);
            }
            .sub-text {
              font-size: 0.5925925925925926rem;
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
      height: 37.851851851851855rem;
      padding-top: 6.444444444444445rem;
      text-align: center;
      .title {
        font-size: 1.5555555555555556rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 137, 0, 1);
        text-align: center;
        margin-bottom: 2.6666666666666665rem;
      }
      img {
        width: 41.111111111111114rem;
        height: 17.37037037037037rem;
      }
    }
    .join {
      width: 100%;
      height: 24.555555555555557rem;
      background-image: url("~assets/img/entering_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-rows: 6.962962962962963rem 1fr 6.111111111111111rem 2.962962962962963rem;
      .title {
        font-size: 1.5555555555555556rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
      .forms {
        width: 34.25925925925926rem;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 0.7407407407407407rem;
        .form-areage {
          width: 34.25925925925926rem;
          display: grid;
          grid-template-columns: 9.481481481481481rem 9.481481481481481rem 1fr;
          grid-column-gap: 0.7407407407407407rem;
        }
        .label {
          font-size: 0.8888888888888888rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 0.7407407407407407rem;
        }
        .address {
          display: grid;
          grid-template-columns: 9.481481481481481rem 6.074074074074074rem 6.074074074074074rem 1fr;
          grid-column-gap: 0.8888888888888888rem;
        }
      }
      .tips {
        text-align: center;
        font-size: 0.8148148148148148rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 209, 130, 1);
        align-self: start;
      }
    }
  }
}
</style>
