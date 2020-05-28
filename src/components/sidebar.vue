<template>
  <el-menu>
    <el-menu-item v-for="(item, index) in RouterConfig" :index="item.name" :key="index">
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
    <el-submenu index="map">
      <template slot="title">
        <span>地图</span>
      </template>
      <el-menu-item index="zh">
        <span slot="title">世界地图</span>
      </el-menu-item>
      <el-menu-item index="id">
        <span slot="title">印尼地图</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import RouterConfig from '../router/router.config'
export default {
  props: [],
  name: '',
  data: () => {
    return {
      RouterConfig
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss" rel="stylesheet/css"></style>
<style type="text/scss" lang="scss" rel="stylesheet/css"></style>
