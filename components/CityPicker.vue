<template>
  <div class="address">
    <component-select
      :model="form.province"
      :options="options1"
      @onselect="handleSelect1"
      placeholder="请选择省"
    />
    <component-select
      :model="form.city"
      :options="options2"
      @onselect="handleSelect2"
      placeholder="请选择市"
    />
    <component-select
      :model="form.area"
      :options="options3"
      @onselect="handleSelect3"
      placeholder="请选择区"
    />
    <component-input :model="form.address" @oninput="oninput" placeholder="请输入详细地址"/>
  </div>
</template>

<script>
let citys = [{
  key: '1001',
  name: '辽宁省',
  children: [{
    key: '10011',
    name: '沈阳市',
    children: [{
      key: '100111',
      name: '和平区'
    }, {
      key: '100112',
      name: '于洪区'
    }, {
      key: '100113',
      name: '浑南区'
    },]
  }, {
    key: '10012',
    name: '大连市',
    children: [{
      key: '100121',
      name: '大连1区'
    }, {
      key: '100122',
      name: '大连2区'
    }, {
      key: '100123',
      name: '大连3区'
    },]
  }]
}, {
  key: '1002',
  name: '吉林省'
}, {
  key: '1003',
  name: '黑龙江省'
}]
import ComponentSelect from '@/components/Select'
import ComponentInput from '@/components/Input'
export default {
  data () {
    return {
      form: {
        province: '',
        provinceKey: '',
        city: '',
        cityKey: '',
        area: '',
        areaKey: '',
        address: '',
        addressKey: '',
      },
      options1: [{ name: '无' }],
      options2: [{ name: '无' }],
      options3: [{ name: '无' }],
    }
  },
  components: {
    ComponentSelect,
    ComponentInput
  },
  mounted () {
    this.formInit()
  },
  methods: {
    formInit () {
      this.options1 = citys.map(item => {
        return {
          name: item.name,
          key: item.key,
        }
      })
      this.options2 = [{ name: '无' }]
      this.options3 = [{ name: '无' }]
      this.form = {
        province: '',
        provinceKey: '',
        city: '',
        cityKey: '',
        area: '',
        areaKey: '',
        address: '',
        addressKey: '',
      }
    },
    handleSelect1 (val) {
      this.formInit()
      this.form.province = val.name
      this.form.provinceKey = val.key
      this.form.cityKey = ''
      this.form.city = ''
      this.form.area = ''
      this.form.areaKey = ''
      citys.map(item => {
        item.key === val.key && (this.options2 = item.children || [{ name: '无' }])
      })
    },
    handleSelect2 (val) {
      this.form.city = val.name
      this.form.cityKey = val.key
      this.form.area = ''
      this.form.areaKey = ''
      this.options2.map(item => {
        item.key === val.key && (this.options3 = item.children || [{ name: '无' }])
      })
    },
    handleSelect3 (val) {
      this.form.area = val.name
      this.form.areaKey = val.key
      this.onchange()
    },
    oninput (val) {
      this.form.address = val
      this.onchange()
    },
    onchange () {
      this.$emit('onchange', this.form)
    }
  },
}
</script>

<style scoped>
</style>