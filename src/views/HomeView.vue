<template>
  <div class="home">
    <!--   整个页面容器-->
    <el-container class="layout-header">
      <!--      顶栏-->
      <el-header>
        <h1>酷鲨商城运营管理平台</h1>
      </el-header>
      <!--      下半部分区域-->
      <el-container class="layout-body">
        <!--        左侧边栏-->
        <el-aside class="layout-aside">
          <el-menu
              unique-opened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#222c32"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-menu-item index="0">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>临时页面</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-circle-plus-outline"></i>
                <span>添加品牌</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-s-operation"></i>
                <span>品牌列表</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-circle-plus-outline"></i>
                <span>添加类别</span>
              </el-menu-item>
              <el-menu-item index="1-4">
                <i class="el-icon-s-operation"></i>
                <span>类别列表</span>
              </el-menu-item>
              <el-menu-item index="1-5">
                <i class="el-icon-circle-plus-outline"></i>
                <span>添加相册</span>
              </el-menu-item>
              <el-menu-item index="1-6">
                <i class="el-icon-s-operation"></i>
                <span>相册列表</span>
              </el-menu-item>
              <el-menu-item index="1-7">
                <i class="el-icon-circle-plus-outline"></i>
                <span>添加属性模板</span>
              </el-menu-item>
              <el-menu-item index="1-8">
                <i class="el-icon-s-operation"></i>
                <span>属性模板列表</span>
              </el-menu-item>
              <el-menu-item index="1-9">
                <i class="el-icon-circle-plus-outline"></i>
                <span>添加属性</span>
              </el-menu-item>

            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-s-grid"></i>
                <span>SUP台账</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-circle-plus-outline"></i>
                <span>新增SUP</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-picture"></i>
                <span>相册管理</span>
              </el-menu-item>
              <el-menu-item index="2-4">
                <i class="el-icon-s-unfold"></i>
                <span>商品类别</span>
              </el-menu-item>
              <el-menu-item index="2-5">
                <i class="el-icon-s-flag"></i>
                <span>属性模板</span>
              </el-menu-item>
              <el-menu-item index="2-6">
                <i class="el-icon-s-data"></i>
                <span>品牌管理</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单管理</span>
              </template>

            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-ticket"></i>
                <span>营销管理</span>
              </template>

            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-shop"></i>
                <span>商家管理</span>
              </template>

            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-s-check"></i>
                <span>权限管理</span>
              </template>

            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main class="layout-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.layout-header {
  color: white;
  background: #1684b0;
}

.layout-header h1 {
  line-height: 60px;
}

.layout-body {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
}

.layout-aside {
  background: #222c32;
}

.layout-main {

}
</style>
<script>

export default {}

</script>
