<template>
  <div class="component-input" @click="$refs.input.focus()">
    <input
      ref="input"
      :value="model"
      type="text"
      class="real-input"
      :placeholder="placeholder"
      @input="(e)=>$emit('oninput',e.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
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

}
</script>

<style lang="less" scoped>
.component-input {
  width: 100%;
  height: 2rem;
  background: rgba(255, 137, 0, 0);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 27px;
  display: flex;
  align-items: center;
  padding: 0.37037037037037035rem 0.8888888888888888rem;
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
    cursor: text;
  }
  .real-input {
    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 0.6666666666666666rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 209, 130, 1);
    &::placeholder {
      color: rgba(255, 209, 130, 0.5);
    }
  }
}
</style>