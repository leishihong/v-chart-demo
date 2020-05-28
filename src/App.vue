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
        <el-menu>
          <el-menu-item index="home">
            <span slot="title">首页</span>
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
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss"></style>
