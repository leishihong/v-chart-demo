<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="4">
        <img
          width="20"
          height="20"
          src="https://raw.githubusercontent.com/ElemeFE/v-charts/master/examples/favicon.ico"
        />
        <h2>v-chart使用</h2>
        <Slider />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from '@/components/sidebar.vue'
export default {
  data() {
    return {}
  },
  components: { Slider }
}
</script>
<style lang="scss"></style>
