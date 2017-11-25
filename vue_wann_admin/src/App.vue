<template>
  <div id="app">
    <el-container id="main-con">
      <el-header>
        <top-nav></top-nav>
      </el-header>
      <el-container id="main-body" style="margin:0px">
        <el-aside style="flex: 0 0 150px;width:150px;">
          <left-nav></left-nav>
        </el-aside>
        <el-main style="background:#ccf1f6">
          <router-view/>
        </el-main>
      </el-container>
      <!-- <el-footer style="background:#66ccff"></el-footer> -->
    </el-container>
       
  </div>
</template>

<script>
import leftNav from "@/components/common/leftNav";
import topNav from "@/components/common/topNav";
export default {
  name: "app",
  components: {
    leftNav,
    topNav
  },
  mounted:function(){
    var bodyHeight=document.body.clientHeight;
    document.getElementById("main-con").style.height= bodyHeight + 'px';
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
html,
body {
  margin: 0;
  height: 100%;
}
.con_section{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    width:100%;
  }
  .breadcrumb-container .title {
      width: 200px;
      float: left;
      color: #475669;
    font-size: 13px;
    }
  .breadcrumb-inner {
      float: right;
      font-size: 13px;
  }
  .el-breadcrumb__inner, .el-breadcrumb__inner a {
    font-weight: 400;
  }
</style>