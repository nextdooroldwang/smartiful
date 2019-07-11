<template>
  <div class="jiameng-container">
    <div class="jiameng-ad">
      <transition name="right-fade">
        <div class="swiper-text" v-if="show1">
          <div class="text1">商品智能识别，</div>
          <div class="text1">直控零售终端</div>
          <div class="text2">帮助品牌商解决陈列督导难题</div>
          <div class="btns">
            <a href="#join">
              <component-button value="品牌商加盟"/>
            </a>
          </div>
        </div>
      </transition>
    </div>
    <div class="content">
      <transition name="top-fade">
        <div class="card" v-if="show2">
          <img src="~assets/img/brand_pic002.png" alt>
        </div>
      </transition>
      <div class="box">
        <div class="box-grid">
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_01.jpg" alt>
              </div>
            </transition>
            <div class="title">减少工人成本</div>
            <div class="sub-title">
              <span>无需专职督导人员</span>
              <span>终端店主通过手机上传</span>
            </div>
            <div class="line-row"></div>
            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_02.jpg" alt>
              </div>
            </transition>
            <div class="title">区域性全覆盖</div>
            <div class="sub-title">
              <span>全区域性覆盖</span>
              <span>不是抽样</span>
              <span>是全部终端门店</span>
            </div>
            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_03.jpg" alt>
              </div>
            </transition>
            <div class="title">集中管理</div>
            <div class="sub-title">
              <span>品牌商集中管理</span>
              <span>第一时间掌握</span>
              <span>终端门店数据</span>
            </div>
            <div class="line-column"></div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_04.jpg" alt>
              </div>
            </transition>
            <div class="title">运营成本低</div>
            <div class="sub-title">
              <span>大幅缩减陈列督导开资</span>
              <span>补助金发放明细一目了然</span>
              <span>一切以实际出发</span>
            </div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_05.jpg" alt>
              </div>
            </transition>
            <div class="title">高效识别</div>
            <div class="sub-title">
              <span>机器视觉识别陈列图片</span>
              <span>提供智能化督导建议</span>
              <span>准确率96%-99%</span>
            </div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_06.jpg" alt>
              </div>
            </transition>
            <div class="title">快速抓取</div>
            <div class="sub-title">
              <span>亿级用户数据日增采集</span>
              <span>包括终端货架、冰柜、</span>
              <span>堆头、物料等</span>
            </div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_07.jpg" alt>
              </div>
            </transition>
            <div class="title">快速报告</div>
            <div class="sub-title">
              <span>单店报告：3-10分钟</span>
              <span>周/月/季/年 全方位统计报告</span>
              <span>高频数据统计</span>
            </div>
          </div>
          <div class="grid-item">
            <transition name="bottom-fade">
              <div class="icon" v-if="show3">
                <img src="~assets/img/brand_ico_08.jpg" alt>
              </div>
            </transition>
            <div class="title">陈列费管理分发</div>
            <div class="sub-title">
              <span>多种灵活结算方式，提现直达</span>
              <span>店长账户。提高店长执行效率</span>
              <span>与积极性，避免品牌陈列费浪费</span>
            </div>
          </div>
        </div>
      </div>
      <div class="stairs">
        <div class="stair">
          <transition name="right-fade">
            <img
              width="485px"
              height="461px"
              src="~assets/img/brand_illustration_01.jpg"
              v-if="show4"
            >
          </transition>
          <transition name="left-fade">
            <div class="text" style="width:528px" v-if="show4">
              <div class="title">商品识别</div>
              <div class="sub">
                <div class="sub-title">数字化货架与数据采集</div>
                <div class="sub-text">通过手机应⽤来捕捉货架图像，通过⼈工智能更加客观且具有⼀致性的⽅式来跟踪商品销售情况。</div>
              </div>
              <div class="sub">
                <div class="sub-title">激励机制</div>
                <div class="sub-text">通过上传照⽚任务使终端店长能够跟踪商品陈列表现，并通达标机制获得品牌商现金奖励。</div>
              </div>
            </div>
          </transition>
        </div>
        <div class="stair">
          <transition name="right-fade">
            <div class="text" style="width:600px" v-if="show5">
              <div class="title">货架管理</div>
              <div class="sub">
                <div class="sub-title">迅速了解货架状况</div>
                <div class="sub-text">根据包括货架占有率、优化货架评分、货架合规性等在内的预设KPI生成优先任务及措施。</div>
              </div>
              <div class="sub">
                <div class="sub-title">多样的货架合规考核</div>
                <div
                  class="sub-text"
                >测量每个货架是否符合陈列合规要求。通过定制有效陈列规则(例如，正确的⾯数)，无效陈列规则(例如，核⼼产品的位置错误)，公司可以迅速采取有针对性的行动。</div>
              </div>
              <div class="sub">
                <div class="sub-title">货架空间规划</div>
                <div class="sub-text">获得关于货架缺⼝的聚合分析，从所有数字化货架图中发掘可利用空间，以便进⾏更合理的陈列空间规划。</div>
              </div>
            </div>
          </transition>
          <transition name="left-fade">
            <img
              width="485px"
              height="461px"
              src="~assets/img/brand_illustration_02.jpg"
              v-if="show5"
            >
          </transition>
        </div>
        <div class="stair">
          <transition name="right-fade">
            <img
              width="485px"
              height="461px"
              src="~assets/img/brand_illustration_03.jpg"
              v-if="show6"
            >
          </transition>
          <transition name="left-fade">
            <div class="text" style="width:532px" v-if="show6">
              <div class="title">大数据</div>
              <div class="sub">
                <div class="sub-title">全市场品类分析</div>
                <div class="sub-text">
                  通过了解区域及各类终端内本品的SKU数量、商品陈列⽔准及货架占有率，实时观测
                  全局动向。
                </div>
              </div>
              <div class="sub">
                <div class="sub-title">竞品⽐对</div>
                <div class="sub-text">⽐较竞争品牌各自的货架份额，通过商品层⾯了解每个货架的竞争⼒。</div>
              </div>
            </div>
          </transition>
        </div>
        <div class="stair">
          <transition name="right-fade">
            <div class="text" style="width:534px" v-if="show7">
              <div class="title">管理面板</div>
              <div class="sub">
                <div class="sub-title">洞察⼤局</div>
                <div class="sub-text">了解所有货架维度数据，包括各个渠道、地区、终端以及业务员的运营表现。</div>
              </div>
            </div>
          </transition>
          <transition name="left-fade">
            <img
              width="485px"
              height="461px"
              src="~assets/img/brand_illustration_04.jpg"
              v-if="show7"
            >
          </transition>
        </div>
        <div class="stair">
          <transition name="right-fade">
            <img
              width="485px"
              height="461px"
              src="~assets/img/brand_illustration_03.jpg"
              v-if="show8"
            >
          </transition>
          <transition name="left-fade">
            <div class="text" style="width:592px" v-if="show8">
              <div class="title">防⽌造假</div>
              <div class="sub">
                <div class="sub-title">开通地理位置</div>
                <div class="sub-text">店主拍照的时候必须同意访问地理位置，程序⾃动与门店地理位置匹配。</div>
              </div>
              <div class="sub">
                <div class="sub-title">只能现场拍摄照片</div>
                <div class="sub-text">
                  小程序只有拍照的功能，店主⽆法上传已存照⽚，同时会读取照⽚的拍摄时间信息进
                  行检查。
                </div>
              </div>
              <div class="sub">
                <div class="sub-title">⼈⼯智能筛查</div>
                <div class="sub-text">平台会⾃动⽐对历史照⽚，避免用户使用假照片反复拍摄。</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="ad">
        <div class="stair">
          <transition name="right-fade">
            <div class="text" style="width:598px;marginRight:29px" v-if="show9">
              <div class="title">
                <div>"卖更多"平台代发品牌陈列费</div>
                <div>KPI绩效管理、多维度管控</div>
              </div>
              <div class="sub">
                <div class="sub-title">
                  <div>品牌商直控终端500万实体零售门店，陈列费及门店KPI考核等多维度管理，</div>
                  <div>平台自动生成丰富可视化的数据报表，满足品牌商线性管理需要。</div>
                </div>
                <div class="sub-text">
                  <div>∙ 陈列费统计：按区域、经销商、门店等分类，查看每月陈列费金额发放情况。</div>
                  <div>∙ 统计分析：按区域、门店、时间段等信息，分类统计上传照片件数和陈列费金额。</div>
                  <div>∙ 合格率统计：统计照片的合格数，不合格数，申诉数。</div>
                  <div>∙ 零售商门店统计：门店分布图、热力图。</div>
                  <div>∙ 品牌终端市场陈列占比分析。</div>
                </div>
              </div>
            </div>
          </transition>
          <transition name="left-fade">
            <img
              width="574px"
              height="677px"
              src="~assets/img/brand_illustration_06.jpg"
              v-if="show9"
            >
          </transition>
        </div>
      </div>
      <div>
        <a id="join"></a>
      </div>
      <div class="join">
        <div class="title">品牌商加盟</div>
        <div class="forms">
          <div class="form">
            <div class="label">品牌类型</div>
            <div class="form-box">
              <component-select
                :model="form.classify"
                :options="options"
                @onselect="(val)=>form.classify=val.name"
                placeholder="请选择品牌类型"
              />
            </div>
          </div>
          <div class="form">
            <div class="label">品牌名称</div>
            <div class="form-box">
              <component-input
                :model="form.brand"
                @oninput="(val)=>form.brand=val"
                placeholder="请输入品牌名称"
              />
            </div>
          </div>
          <div class="form">
            <div class="label label2">您的姓名</div>
            <div class="form-box">
              <component-input
                :model="form.name"
                @oninput="(val)=>form.name=val"
                placeholder="请输入姓名"
              />
            </div>
          </div>
          <div class="form">
            <div class="label label2">手机号码</div>
            <div class="form-box">
              <component-input
                :model="form.phone"
                @oninput="(val)=>form.phone=val"
                placeholder="请输入手机号码"
              />
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
export default {
  data () {
    return {
      form: {
        classify: '',
        brand: '',
        name: '',
        phone: ''
      },
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
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
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
      if (scrollTop > 10) {
        this.show2 === false && (this.show2 = true)
      }
      if (scrollTop > height / 2 + 348) {
        this.show3 === false && (this.show3 = true)
      }
      if (scrollTop > height / 2 + 348 + 586) {
        this.show4 === false && (this.show4 = true)
        this.show5 === false && (this.show5 = true)
        this.show6 === false && (this.show6 = true)
        this.show7 === false && (this.show7 = true)
        this.show8 === false && (this.show8 = true)
      }
      if (scrollTop > height / 2 + 348 + 586 + 1000) {
        this.show9 === false && (this.show9 = true)
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

.jiameng-container {
  margin: 0 auto;
  min-height: 100vh;
  .jiameng-ad {
    width: 100%;
    height: calc(100vh + 123px);
    background-image: url("~assets/img/brand_pic001.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 44vh 0 0 20vw;

    .swiper-text {
      .text1 {
        font-size: 70px;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 84px;
      }
      .text2 {
        font-size: 48px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
        margin: 20px 0 33px 0;
      }
      .btns {
        div {
          margin: 0 12px;
        }
      }
    }
  }
  .content {
    width: 100%;
    position: relative;
    .card {
      width: 100%;
      height: 522px;
      position: absolute;
      top: -174px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
      }
    }
    .box {
      background-image: url("~assets/img/brand_bg_01.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 1104px;
      display: grid;
      align-items: end;
      justify-items: center;
      padding-bottom: 128px;
      .box-grid {
        width: 1180px;
        height: 586px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 390px;
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
              rgba(255, 137, 0, 0.1),
              rgba(255, 137, 0),
              rgba(255, 137, 0, 0.1)
            );
            position: absolute;
            bottom: -1px;
            left: 0;
          }
          .line-column {
            width: 2px;
            height: 586px;
            background: linear-gradient(
              rgba(255, 137, 0, 0.1),
              rgba(255, 137, 0),
              rgba(255, 137, 0, 0.1)
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
    .stairs {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 1000px;
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
    .ad {
      background-image: url("~assets/img/brand_bg_02.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 1022px;
      display: grid;
      align-items: center;
      .stair {
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
          .title {
            font-size: 42px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 137, 0, 1);
            div {
              text-align: center;
            }
          }
          .sub {
            margin-top: 44px;
            .sub-title {
              font-size: 24px;
              font-family: PingFangSC-Regular;
              font-weight: bold;
              color: rgba(124, 124, 124, 1);
              margin-bottom: 79px;
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
    .join {
      height: 663px;
      background-image: url("~assets/img/entering_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-rows: 188px 1fr 165px 80px;
      position: relative;
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
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 20px;
        .label {
          font-size: 24px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 25px;
        }
        .form-box {
          width: 443px;
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
