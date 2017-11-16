<template>
  <div id="app">
    <el-container id="main-con" class="con-section">
      <el-header id="main-header" style="width:100%">
        <top-nav></top-nav>
      </el-header>
      <el-container id="main-body" style="margin:0px">
        <el-aside style="flex: 0 0 230px;width: 230px;background:#fff">
          <left-nav></left-nav>  
        </el-aside>
        <el-main style="background:#ccf1f6">
          <router-view/>
        </el-main>
      </el-container>
      <el-footer style="background:#66ccff"></el-footer>
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
    document.getElementById("main-header").style.height= "5%";
    document.getElementById("main-body").style.height= "95%";
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
/* .main {
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden;
} */
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