<template>
  <div class="index-container">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="banners[0]">
          <div class="swiper-text">
            <div class="text1">AI智能图像识别技术</div>
            <div class="text2">品牌商直控终端，远程监控货架</div>
            <div class="btns">
              <component-button value="品牌加盟" @onclick="$router.push({path:'/jiameng'})"/>
              <component-button value="店长入驻" @onclick="$router.push({path:'/ruzhu'})"/>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img :src="banners[0]">
        </div>
        <div class="swiper-slide">
          <img :src="banners[0]">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>

    <div class="content">
      <div class="main">
        <div class="introduction">
          <div class="vedio-box">
            <!-- <video-player ref="videoPlayer" :options="playerOptions"/> -->
            <video
              class="video-player"
              src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              controls="controls"
            >您的浏览器不支持 video 标签。</video>
          </div>
          <div class="introduction-text">
            <div class="text">
              “卖更多”B2S（Brand to Store）货架督导平台，定位于快消品零售行业，基于深度学习的AI智能图像识别技术，帮助品牌解决在终端陈列展示上的各类疑难问题，让零售业更有【效率】的服务消费者。
              “卖更多”集合线下500万家实体中小型连锁便利及微小终端零售门店，店长通过手机App快速拍摄品牌商的货架照片，上传至AI云端图像分析引擎，生成实时店内情况分析报告，并在瞬间同步到品牌商的企业管理平台，即实现了品牌商……
            </div>
            <div class="more-btn">
              <span class="more" @click="$router.push({path:'/guanyu'})">更多介绍</span>
            </div>
          </div>
        </div>
        <div class="mart">
          <div class="title">
            <span>集合</span>
            <img width="186" height="95" src="~assets/img/home_text500.png" alt>
            <span>万家实体零售店</span>
          </div>
          <div v-swiper:mySecondSwiper="swiperOption2">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in marts"
                :key="item.id"
                :style="{borderRadius: '20px',backgroundImage:`url(${item.path})`}"
              >
                <div class="name-box">
                  <div class="name">{{item.name}}</div>
                  <div class="type">{{item.type}}</div>
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
import pic001 from '@/assets/img/home_pic005.jpg'
import pic002 from '@/assets/img/home_pic002.jpg'
import pic003 from '@/assets/img/home_pic003.jpg'
import pic004 from '@/assets/img/home_pic004.jpg'
import ComponentButton from '@/components/Button'
export default {
  data () {
    return {
      banners: [
        pic001,
        pic001,
        pic001
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          slideChange () {
            console.log('onSlideChangeEnd', this);
          },
          tap () {
            console.log('onTap', this);
          }
        }
      },
      swiperOption2: {
        loop: true,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
        autoplay: true,

      },
      marts: [{
        id: 0,
        path: pic002,
        name: 'Coles',
        type: '超市',
        show: false
      }, {
        id: 1,
        path: pic003,
        name: '7-Eleven',
        type: '便利店',
        show: false
      }, {
        id: 2,
        path: pic004,
        name: 'SPAR',
        type: '生活超市',
        show: false
      },]
    }
  },
  components: {
    ComponentButton
  },
  mounted () {
    this.mySwiper.slideTo(3)
    this.mySecondSwiper.slideTo(3)
  }
}
</script>

<style lang="less">
.index-container {
  margin: 0 auto;
  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 12px;
    width: 14px;
    height: 14px;
  }
  .swiper-container:first-child {
    height: calc(100vh + 46px);
    .swiper-pagination {
      margin-bottom: 103px;
    }

    .swiper-pagination-bullet-active {
      background: rgb(255, 255, 255);
    }
    .swiper-text {
      position: absolute;
      top: 523px;
      left: 362px;
      z-index: 888;
      .text1 {
        font-size: 76px;
        font-family: PingFangSC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 76px;
      }
      .text2 {
        font-size: 60px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
        margin: 20px 0 68px 0;
      }
      .btns {
        div {
          margin: 0 12px;
        }
      }
    }
    .my-swiper {
      width: 100%;
      .swiper-slide {
        position: relative;
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .swiper-container:last-child {
    width: 1200px;
    height: 384px;
    margin: 65px auto 92px auto;
    .name-box {
      width: 100%;
      height: 100%;
      background: rgba(231, 114, 0, 0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      color: rgba(255, 255, 255, 0);
      &:hover {
        background: rgba(231, 114, 0, 0.7);
        color: rgba(255, 255, 255, 1);
        transition: all 0.3s;
      }
      div {
        font-size: 42px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        line-height: 42px;
      }
    }
  }

  .content {
    width: 100%;
    height: 1019px;
    background-image: url("~assets/img/home_bg.jpg");
    display: flex;
    justify-content: center;

    .main {
      width: 1180px;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .introduction {
        height: 345px;
        width: 100%;
        display: flex;
        align-items: flex-end;
        position: absolute;
        top: -46px;
        z-index: 9999;
        .vedio-box {
          width: 527px;
          height: 345px;
          border-radius: 20px;
          position: relative;
          background: #000;
          display: flex;
          align-items: center;
          .video-player {
            width: 100%;
          }
        }
        .introduction-text {
          .text {
            width: 599px;
            height: 167px;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(124, 124, 124, 1);
            line-height: 30px;
            margin-left: 74px;
          }
          .more-btn {
            width: 100%;
            text-align: center;
            padding-top: 36px;
            .more {
              display: inline-block;
              width: 180px;
              height: 48px;
              background: rgba(255, 137, 0, 1);
              box-shadow: 0px 15px 20px 0px rgba(240, 99, 23, 0.5);
              border-radius: 24px;
              line-height: 48px;
              font-size: 24px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              &:hover {
                cursor: pointer;
                color: rgba(255, 255, 255, 0.8);
              }
            }
          }
        }
      }
      .mart {
        .title {
          font-size: 42px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 137, 0, 1);
          text-align: center;
        }
      }
    }
  }
}
</style>
