<template>
  <div class="btn-parent">
    <button class="button" @click="changeValue">{{value}}</button>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    changeValue: function () {
      this.$emit('changeValue')
    }
  }
}
</script>

<style scoped>
.button{
  width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  background: red;
}
</style>
