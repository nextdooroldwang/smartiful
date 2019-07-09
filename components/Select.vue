<template>
  <div class="component-select" @mouseenter="active=true" @mouseleave="active=false">
    <span class="real-input" :placeholder="placeholder">{{model||placeholder}}</span>
    <a-icon type="right" :class="{'active':active,'unactive':!active}" :style="{color:'#fff'}"/>
    <div class="options" v-show="active">
      <div
        class="item"
        v-for="item in options"
        :key="item.id"
        @click="onselect(item.name)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    onselect (item) {
      this.active = false
      this.$emit('onselect', item)
    }
  },
}
</script>

<style lang="less" scoped>
.component-select {
  width: 100%;
  height: 54px;
  background: rgba(255, 137, 0, 0);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 27px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 24px;
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
  .real-input {
    position: relative;
    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 209, 130, 1);
    overflow: hidden;
    //当文本溢出，省略号代替
    text-overflow: ellipsis;
    //文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
    white-space: nowrap;
    &::placeholder {
      color: rgba(255, 209, 130, 0.5);
    }
  }
  .active {
    transform: rotate(90deg);
    transition: transform 0.3s;
  }
  .unactive {
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
  .options {
    width: 100%;
    position: absolute;

    left: 0;
    top: 52px;
    background: #fff;
    padding: 8px;
    border-radius: 8px;
    .item {
      width: 100%;
      height: 48px;
      color: #ff8900;
      line-height: 48px;
      font-size: 18px;
      padding: 0 24px;
      &:hover {
        background: #ff8900;
        color: #fff;
      }
    }
  }
}
</style>