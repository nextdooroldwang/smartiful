<template>
  <div class="index-container">
    <div id="top"></div>
    <div
      class="menu-box"
      :style="{height:height+'px',background:`rgba(255, 255, 255,${background})`}"
    >
      <img src="~assets/img/logo3.png" alt @click="go('top')">

      <div class="menu-items">
        <div class="menu-item" @click="go('services')">
          <div class="title">01 XXXXXX</div>
          <div class="menu">ITサービス事業</div>
        </div>
        <div class="menu-item" @click="go('services')" @mouseover="openMenu2" @mouseleave="closeMenu2">
          <div class="title">02 XXXXXX</div>
          <div class="menu">コンサルティング事業</div>
          <transition name="menu-animate">
            <div v-show="menu2" class="tips">開発中…</div>
          </transition>
        </div>
      </div>
      <div class="callme" @click="go('callme')">
        <span class="icon">
          <svg-icon icon-class="ico_chat"/>
        </span>
        <span class="text">無料でチャットカウンセリング</span>
      </div>
    </div>
    <div class="ad">
      <transition name="slide-fade">
        <div class="description" v-show="show">
          <h2 class="decp-title">自社サービス開発をsmartifulにしましょう！</h2>
          <div class="decp-content">
            <p class="decp-item"><span class="decp-text">スマート</span><span class="xtag">X</span></p>
            <p class="decp-item"><span class="decp-text">高品質</span><span class="xtag">X</span></p>
            <p class="decp-item"><span class="decp-text">速い</span><span class="xtag">X</span></p>
            <p class="decp-item"><span class="decp-text">コスト削減</span></p>
            </div>
        </div>
      </transition>
      <div class="callrouter">
        <div class="callme" @click="go('callme')">
          <span class="icon">
            <svg-icon icon-class="ico_chat"/>
          </span>
          <span class="text">無料でチャットカウンセリング</span>
        </div>
        <span>クラウド構築からWeb / スマホアプリ開発、リリース後の運用サポートまで対応！</span>
      </div>
    </div>
    <div id="services"></div>
    <div class="content">
      <div class="title">SERVICES</div>
      <div class="line">
        <div class="l"></div>
        <div class="m"></div>
        <div class="r"></div>
      </div>
      <div class="service-items">
        <div class="service-item">
          <div class="title">クラウド移行と保守事業</div>
          <div class="icon">
            <img src="~assets/img/cloud.svg" alt>
          </div>
          <div
            class="text"
          >クラウド環境への最適な移行をプロフェッショナルがサポートまるっとゼロから全部お任せください！
            <p>1. AWS/GCP/Azure の経験豊富なエンジニアがお客様の不明点や懸案事項を解決します。</p>
            <p>2. 安全でスピーディーな移行計画を立案・実行します。</p>
            <p>3. クラウドならではの仕組みで移行後の運用・保守の業務を効率化します。</p>
          </div>
        </div>
        <div class="service-item">
          <div class="title">アプリケーション開発事業</div>
          <div class="icon">
            <img src="~assets/img/application.svg" alt>
          </div>
          <div class="text">Webアプリからネイティブアプリまでにこれまでに蓄積された開発のノウハウを武器に、シームレスな課題解決策を提案。開発規模を問わず、グローバル規模のインサイトと最先端の技術を駆使した効果的な戦略を提供します。</div>
        </div>
        <div class="service-item">
          <div class="title">ブロックチェーン開発事業</div>
          <div class="icon">
            <img src="~assets/img/blockchain.svg" alt>
          </div>
          <div
            class="text"
          >ブロックチェーンの共同研究開発や実証実験などを通じてブロックチェーン技術の実用化を進めています。 また、中国の他の仮想通貨企業ともブロックチェーン分野での業務提携を積極的に行っており、 中国にブロックチェーン技術を集積させブロックチェーン技術の基盤を作ることで、 大規模案件などの需要の高まりに対応できる体制を整え、新たなブロックチェーンプロダクト開発することが出ます。</div>
        </div>
        <div class="service-item">
          <div class="title">AI研究開発事業</div>
          <div class="icon">
            <img src="~assets/img/ai.svg" alt>
          </div>
          <div
            class="text"
          > 
          <p>１、アカデミア（学術研究）での知見を活かし、機械学習アルゴリズムの共同研究・開発にも取り組んでいます。</p>
          <p>2、最新の機械学習技術をベースに、御社ビジネスにジャストフィットするAIモデルをオーダーメイドで開発いたします。</p>
          <p>3、課題の整理や、AI導入ポイントの特定、企画支援など、カスタムAI導入前からサポートさせていただきます。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="qa">
      <h2 class="title">よくあるご質問</h2>
      <div class="qalist">
        <div class="item">
          <div>
            <div class="q">
              <img src="~assets/img/en-q.png" alt>自社のIT担当者がいません。本当に大丈夫ですか？
            </div>
            <transition name="bottom-fade">
              <div class="a" v-show="stateA1">
                <div class="title">
                  <img src="~assets/img/en-a.png" alt>はい、ご安心ください！
                </div>
                <div
                  class="text"
                >冠婚葬祭業やキックボクシングジム、ホームセンターなどIT専任の担当者がいない、エンドユーザーのお客様のサービス開発経験は数多くあります。プロジェクトマネージャーがしっかりプロジェクトを進行いたしますので、すべてお任せください！</div>
              </div>
            </transition>
          </div>
          <div class="btn-box" :class="{'btn-box-active':stateA1}" @click="openAnswer('1')">
            <img src="~assets/img/arrow_c.svg" alt>
          </div>
        </div>
        <div class="item">
          <div>
            <div class="q">
              <img src="~assets/img/en-q.png" alt>まだ要件が固まっていないのですが、見積もりしてもらえますか？
            </div>
            <transition name="bottom-fade">
              <div class="a" v-show="stateA2">
                <div class="title">
                  <img src="~assets/img/en-a.png" alt>概算でお見積もりさせていただきます！
                </div>
                <div
                  class="text"
                >サービスの企画段階の場合は、まずお打ち合わせでヒアリングした結果をもとに、概算でのお見積書を提出させていただきます。企画書や画面イメージ、出力データなどの各種資料をいただけますとスムーズです！</div>
              </div>
            </transition>
          </div>
          <div class="btn-box" :class="{'btn-box-active':stateA2}" @click="openAnswer('2')">
            <img src="~assets/img/arrow_c.svg" alt>
          </div>
        </div>
      </div>
    </div>
    <div id="callme"></div>
    <div class="info">
      <div class="title">
        <h2>
          まずは無料で
          ご相談ください！
        </h2>
        <div class="sub">どのようなサービスを開発されたいか、お気軽にご要望をお聞かせください！チャットカウンセリング、またはご訪問にてご提案させていただきます。</div>
      </div>
      <div class="form">
        <div class="input-box">
          <div class="label">
            <div>会社名</div>
            <span class="tag">必须</span>
          </div>
          <div class="input" @click="$refs.input1.focus()">
            <input
              ref="input1"
              v-model="company_name"
              type="text"
              class="real-input"
              placeholder="会社名をご記入ください"
              @change="rule"
            >
            <div class="rule" v-if="rule1">※必須項目を入力してください</div>
          </div>
        </div>
        <div class="input-box">
          <div class="label">
            <div>お名前</div>
            <span class="tag">必须</span>
          </div>
          <div class="input" @click="$refs.input2.focus()">
            <input
              ref="input2"
              v-model="name"
              type="text"
              class="real-input"
              placeholder="お名前をご記入ください"
              @change="rule"
            >
            <div class="rule" v-if="rule2">※必須項目を入力してください</div>
          </div>
        </div>
        <div class="input-box">
          <div class="label">
            <div>メールアドレス</div>
            <span class="tag">必须</span>
          </div>
          <div class="input" @click="$refs.input3.focus()">
            <input
              ref="input3"
              v-model="mail_address"
              type="text"
              class="real-input"
              placeholder="メールアドレスをご記入ください"
              @change="rule"
            >
            <div class="rule" v-if="rule3">※必須項目を入力してください</div>
            <div class="rule" v-if="rule3">※@を含む形式でご入力ください</div>
          </div>
        </div>
        <div class="input-box">
          <div class="label">
            <div>その他ご質問など</div>
          </div>
          <div class="input" @click="$refs.input4.focus()">
            <textarea
              style="resize:none;height: auto; min-height: 150px"
              ref="input4"
              v-model="content"
              type="text"
              class="real-input"
              placeholder="なんでもお気軽にご相談ください"
              
            />
          </div>
        </div>
        <div style="margin-top: 40px; display:flex; justify-content: flex-end">
          <div class="submit" @click="submit">
            <svg-icon icon-class="ico_send"/>入力内容を送信する
          </div>
        </div>
      </div>
      <!-- <div class="send">
        <div class="text">
          <div class="text1">
            <span class="href">個人情報の取り扱いについて、</span>
            <span>ご同意の上ご送信ください。</span>
          </div>
          <div class="text2">
            <i class="radio" @click="yes=!yes">
              <img src="~assets/img/yes.svg" :class="{'hidden':!yes}" alt>
            </i>
            個人情報の取り扱いについて同意して送信する
          </div>
          <div class="rule" v-if="!yes&&company&&name&&mail">※同意チェックボックスを入力してください</div>
        </div>
        <div class="submit" @click="submit">
          <svg-icon icon-class="ico_send"/>入力内容を送信する
        </div>
      </div> -->
    </div>
    <div class="footer">
      <img src="~assets/img/logo3.png" alt>
      <div>
        <img src="~assets/img/address.svg" alt>東京都港区南青山2-2-15
      </div>
      <div>
        <img src="~assets/img/mail.svg" alt>support@smartiful.jp
      </div>
      <div>
        <img src="~assets/img/phone.svg" alt>+81 03-6868-5186
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default {
  data () {
    return {
      company_name: '',
      name: '',
      mail_address: '',
      content: '',
      state: false,
      height: 90,
      background: 0,
      stateA1: false,
      stateA2: false,
      stateA3: false,
      yes: false,
      rule1: false,
      rule2: false,
      rule3: false,
      show: false,
      menu2: false
    }
  },
  mounted () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    this.show = true
  },
  methods: {
    handleScroll () {

      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 30 && !this.state) {
        TweenLite.to(this.$data, 0.5, { height: 64 });
        TweenLite.to(this.$data, 0.5, { background: 1 });
        this.state = true
      }
      if (scrollTop < 30 && this.state) {
        TweenLite.to(this.$data, 0.5, { height: 90 });
        TweenLite.to(this.$data, 0.5, { background: 0 });
        this.state = false
      }
    },
    openAnswer (k) {
      let key = 'stateA' + k
      this.$data[key] = !this.$data[key]
    },
    submit () {
      console.log(this.$axios.post)
      let { company_name, name, mail_address, content } = this

      if (company_name && name && mail_address && reg.test(mail_address)) {
        // let to = '278188438@qq.com'
        // let cc = 'qq278188438@163.com'
        // let subject = 'まずは無料で ご相談ください'
        // let body = `会社名：${company},お名前：${name},メールアドレス：${mail}`
        // window.location = `mailto:${to}?subject=${subject}&cc=${cc}&subject=${subject}&body=${body}`
        this.$axios.post('https://k8riju8wvk.execute-api.ap-northeast-1.amazonaws.com/prod/email', {
          company_name,
          name,
          mail_address,
          content
        }).then(res => {
          console.log(res)
        }).catch(e => {})

      } else {
        this.rule()
      }
    },
    go (to) {
      document.getElementById(to).scrollIntoView({ behavior: "smooth" });
    },
    rule () {
      if (this.company) {
        this.rule1 = false
      } else {
        this.rule1 = true
      }
      if (this.name) {
        this.rule2 = false
      } else {
        this.rule2 = true
      }
      if (this.mail_address && reg.test(this.mail_address)) {
        this.rule3 = false
      } else {
        this.rule3 = true
      }
    },
    openMenu2() {
      console.log(1)
      this.menu2 = true
    },
    closeMenu2() {
      this.menu2 = false
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/translate.less";
@primary: #22a2c3;
@aider: #91ad70;
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1000px);
  opacity: 0;
}
.menu-animate-enter-active, .menu-animate-leave-active {
  transition: opacity .5s;
}
.menu-animate-enter, .menu-animate-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.index-container {
  .menu-box {
    width: 100%;
    // height: 90px;
    // background: rgba(255, 255, 255, 0);

    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 16px 1fr 16.5vw;
    align-items: center;
    padding: 0 1.5625vw 0 2.08333vw;
    img {
      cursor: pointer;
      height: 28px;
    }
    .menu-items {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .menu-item {
        position: relative;
        margin-right: 2.60417vw;
        cursor: pointer;
        .title {
          font-family: "renner";
          font-weight: 500;
          letter-spacing: normal;
          font-size: 12px;
          font-size: 0.625vw;
        }
        .menu {
          font-size: 0.83333vw;
          font-weight: 400;
        }
        .tips {
          position: absolute;
          left: 0;
          bottom: -40px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: #e4ebe4;
          font-size: 14px;
          color: rgba(0,0,0,0.65);
          text-indent: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
      }
    }
    .callme {
      font-size: 0.83333vw;
      border-radius: 1.30208vw;
      border: 3px solid @primary;
      padding: 0.3vw 0.1vw;
      color: #fff;
      font-weight: 700;
      background: @primary;
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        padding: 0 0.5vw 0 1.30208vw;
        .svg-icon {
          width: 1.5625vw;
          height: 1.45833vw;
        }
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0);
        color: @primary;
        transition: all 0.5s;
        .svg-icon {
          color: @primary;
          transition: all 0.5s;
        }
      }
    }
  }
  .ad {
    width: 100%;
    height: calc(100vh - 3.4375vw);
    background-image: url("~assets/img/mv_bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .description {
      position: absolute;
      top: 23%;
      width: 100%;
      height: auto;
      text-align: center;
      .decp-title {
        font-size: 60px
      }
      .decp-item {
        display: flex;
        align-items: center
        // padding: 0 10px
      }
      .xtag {
        width: 50px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 28px;
      }
      .decp-content {
        margin-top: 6%;
        display: flex;
        justify-content: center;
      }
      .decp-text {
        display: block;
        width: 200px;
        height: 60px;
        line-height: 60px;
        border-radius: 25px;
        border: 1px solid #000;
        text-align: center;
        font-size: 28px;
      }
    }
    .callrouter {
      position: absolute;
      padding: 7.8125vw 0 2.1875vw 4.16667vw;
      left: 0;
      bottom: -3.4375vw;
      width: 61.71875vw;
      height: 12.39583vw;
      background: url("~assets/img/mv_chat_bg.png") top center no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      font-size: 1.04167vw;
      color: #ffffff;
      .callme {
        font-size: 0.72917vw;
        padding: 0.3vw 0.1vw;
        width: 14.94792vw;
        height: 2.34375vw;
        border-radius: 1.17188vw;
        border: 3px solid @primary;
        margin: 0 0.625vw 0 0;
        color: #fff;
        font-weight: 700;
        background: @primary;
        display: flex;
        align-items: center;
        cursor: pointer;
        .icon {
          padding: 0 0.5vw 0 1.30208vw;
          .svg-icon {
            width: 1.5625vw;
            height: 1.45833vw;
          }
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0);
          color: @primary;
          transition: all 0.5s;
          .svg-icon {
            color: @primary;
            transition: all 0.5s;
          }
        }
      }
    }
  }
  .content {
    padding: 7.8125vw 0 6.25vw;
    background: url("~assets/img/bg2.jpg");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position-y: 26vw;
    .title {
      text-align: center;
      font-size: 2.08333vw;
      padding-top: 24px;
      font-family: "Josefin Sans", sans-serif;
    }
    .line {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1vw 0 3vw 0;
      .l {
        width: 3vw;
        height: 2px;
        background: #ddd;
        // background: linear-gradient(270deg, #ddd, #fff);
      }
      .m {
        width: 0.3vw;
        height: 0.3vw;
        border-radius: 50%;
        background: #ddd;
        margin: 0 0.5vw;
      }
      .r {
        width: 3vw;
        height: 2px;
        background: #ddd;
        // background: linear-gradient(90deg, #ddd, #fff);
      }
    }

    .service-items {
      display: grid;
      width: 90vw;
      margin: 0 auto;
      grid-template-columns: 22% 22% 22% 22%;
      justify-content: space-between;

      .service-item {
        padding: 1.5625vw;
        background-color: rgba(255, 255, 255, 0.85);
        border: 1px solid #ffffff;
        box-shadow: 0 0 0.83333vw 0.20833vw rgba(110, 110, 110, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 1.25vw;
          line-height: 1.417;
          text-align: center;
          margin: 0 0 0.9375vw;
        }
        .icon {
          width: 7.8125vw;
          height: 7.8125vw;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0 0.78125vw 1.5625vw 0 rgba(110, 110, 110, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.52083vw;
          color: @primary;
          img {
            width: 5.05208vw;
            height: 3.75vw;
          }
        }
        .text {
          font-size: 0.83333vw;
          font-weight: 300;
          line-height: 2;
        }
      }
    }
  }
  .qa {
    padding: 7.8125vw 0 6.25vw;
    > .title {
      text-align: center;
      padding-bottom: 48px;
    }
    .qalist {
      width: 62.5vw;
      margin: 0 auto;
      border-top: 1px solid #cccccc;
      .item {
        border-bottom: 1px solid #cccccc;
        padding: 1.5625vw 0 1.5625vw 1.5625vw;
        display: flex;
        > div {
          flex: 1;
          img {
            width: 1.40625vw;
            height: 1.19792vw;
            margin: 0 0.67708vw 0 0;
          }
          .q {
            font-size: 0.9375vw;
            color: @primary;
            font-weight: 700;
            padding: 1.5625vw 0;
            display: flex;
            align-items: center;
          }
          .a {
            border-top: 1px dashed #cccccc;
            .title {
              font-size: 0.9375vw;
              color: @aider;
              padding: 0.875vw 0;
              font-weight: 700;
              display: flex;
              align-items: center;
            }
            .text {
              font-size: 0.72917vw;
              font-weight: 300;
              line-height: 2;
              text-align: justify;
              font-weight: 400;
            }
          }
        }

        .btn-box {
          flex: 0;
          display: flex;
          padding: 0 1.5625vw;
          align-items: center;
          img {
            cursor: pointer;
            width: 1.97917vw;
            height: 1.97917vw;
            transform: rotate(0deg);
            transition: transform 0.4s;
          }
        }
        .btn-box-active {
          img {
            transform: rotate(180deg);
            transition: all 0.4s;
          }
        }
      }
    }
  }
  .info {
    margin: 0 6.25vw;
    background: linear-gradient(270deg, #dae6d7 0%, #d2f1f1 60%, #bee3ec 100%);
    padding: 5.3125vw 7.8125vw 9.375vw;
    width: 87.5vw;
    display: grid;
    grid-template-columns: 17.39583vw 1fr;
    grid-column-gap: 54px;
    position: relative;
    .title {
      .sub {
        font-size: 0.83333vw;
        font-weight: 300;
        line-height: 2;
        text-align: justify;
        margin-top: 24px;
      }
    }
    .form {
      .input-box {
        display: flex;
        .label {
          width: 13.02083vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.72917vw;
          border-bottom: 2px solid @aider;
          padding: 0 0 0 1.45833vw;
          margin-right: 24px;
          .tag {
            font-size: 0.52083vw;
            color: #ffffff;
            font-weight: 600;
            width: 2.29167vw;
            height: 0.9375vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url("~assets/img/contact_required_bg.png");
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
        .input {
          flex: 1;
          padding: 1.35417vw 1.45833vw;
          border-bottom: 1px solid #cccccc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:hover {
            cursor: text;
          }
          .real-input {
            background-color: transparent;
            border: 0;
            outline: none;
            width: 100%;
            height: 100%;
            font-weight: 500;
            font-size: 0.72917vw;
            color: #242424;
            margin-bottom: 0.8vw;
            &::placeholder {
              color: #9b9b9b;
            }
          }
        }
      }
      .submit {
        width: 17.70833vw;
        height: 3.02083vw;
        background-color: @primary;
        border-radius: 1.51042vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9375vw;
        color: #ffffff;
        font-weight: 700;
        cursor: pointer;
        .svg-icon {
          width: 1.66667vw;
          height: 1.66667vw;
          margin: 0 0.9375vw 0 0;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0);
          border: 3px solid @primary;
          color: @primary;
          transition: all 0.5s;
          .svg-icon {
            color: @primary;
            transition: all 0.5s;
          }
        }
      }
    }
    .send {
      position: absolute;
      right: 7.8125vw;
      bottom: -6.5625vw;
      width: 50vw;
      min-height: 10.72917vw;
      background-color: #242424;
      border: 1px solid #424242;
      padding: 0 3.95833vw;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: 0.83333vw;
        color: #ffffff;
        font-weight: 600;
        line-height: 2;
        .text1 {
          margin: 0 0 1.25vw;
          .href {
            color: @aider;
            border-bottom: 1px solid @aider;
            padding-bottom: 0.55vw;
            cursor: pointer;
            &:hover {
              color: #a5df84;
              border-bottom: 1px solid #a5df84;
            }
          }
        }
        .text2 {
          display: flex;
          align-items: center;
          .radio {
            width: 1.04167vw;
            height: 1.04167vw;
            border: 1px solid #ffffff;
            margin: 0 0.41667vw 0 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 100%;
              height: 100%;
              margin-top: 0.1vw;
              opacity: 1;
              transition: opacity 0.3s;
            }
            .hidden {
              opacity: 0;
              transition: opacity 0.3s;
            }
          }
        }
      }
      
    }
    .rule {
      color: @primary;
      font-weight: 600;
      font-size: 0.72917vw;
    }
  }
  .footer {
    padding: 4.42708vw 0 1.45833vw;
    width: 71.875vw;
    margin: 0 auto;
    > img {
      width: 11.70833vw;
      margin-bottom: 6px;
    }
    div {
      display: flex;
      align-items: center;
      font-family: "renner";
      font-weight: 500;
      letter-spacing: normal;
      font-size: 1.14583vw;
      color: rgba(0, 0, 0, 0.6);
      > img {
        width: 1.14583vw;
        margin-right: 1vw;
        margin-left: 0.3vw;
      }
    }
  }
}
</style>
