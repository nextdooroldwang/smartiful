<template>
  <div class="component-btn" @click="$emit('onclick')">{{value}}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.component-btn {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 15px 20px 0px rgba(240, 99, 23, 1);
  border-radius: 30px;
  font-size: 26px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 137, 0, 1);
  padding: 0 80px;
  &:hover {
    color: rgba(255, 137, 0, 0.8);
    cursor: pointer;
  }
}
</style>