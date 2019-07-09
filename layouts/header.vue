<template>
  <div class="header-container">
    <div class="header-main">
      <img width="253" height="80" src="~assets/img/logo.png" alt>
      <div class="menu-box">
        <div
          v-for="item in menus"
          :key="item.name"
          class="menu-item"
          @click="()=>onActive(item.name,item.path)"
        >
          {{item.name}}
          <div class="border" :class="{'border-active':item.active}"></div>
        </div>
      </div>
      <div class="download" @click="$router.push({ path:'/xiazai' })" v-if="!xiazai">下载APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menus: [
        {
          name: '首页',
          active: true,
          path: '/'
        },
        {
          name: '品牌加盟',
          active: false,
          path: '/jiameng'
        },
        {
          name: '店长入驻',
          active: false,
          path: '/ruzhu'
        },
        {
          name: '关于我们',
          active: false,
          path: '/guanyu'
        }
      ],
      xiazai: false
    }
  },
  mounted () {
    this.setRouter(this.$route.path)
  },
  methods: {
    onActive (name, path) {
      let after = this.menus.map(item => {
        item.active = name === item.name ? true : false
        return item
      })
      this.menus = after
      this.$router.push({ path })
    },
    setRouter (path) {
      this.xiazai = path === '/xiazai' ? true : false
      this.menus = this.menus.map(item => {
        item.active = path === item.path ? true : false
        return item
      })
    }
  },
  watch: {
    '$route' (to) {
      this.setRouter(to.path)
    }
  },
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 41px;
  .header-main {
    width: 1180px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .menu-box {
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 137px;
      .menu-item {
        padding: 11px 4px;
        margin-right: 61px;
        position: relative;
        &:hover {
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      .border {
        width: 0;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: -3px;
        background: rgba(255, 255, 255, 1);
      }
      .border-active {
        width: 100%;
        transition: all 0.3s;
      }
    }
    .download {
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      width: 160px;
      height: 43px;
      line-height: 43px;
      background: rgb(237, 96, 10, 1);
      border-radius: 21px;
      box-shadow: 0 0 10px rgb(243, 199, 5);
      &:hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>