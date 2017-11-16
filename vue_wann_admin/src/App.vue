<template>
  <div id="app">
    <el-container>
      <el-header>
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside >
          <left-nav></left-nav>  
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
     
      <el-footer></el-footer>
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
</style>
