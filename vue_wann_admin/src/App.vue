<template>
  <div id="app">
    <!-- <top-nav></top-nav> -->
    <left-nav></left-nav>
    <!-- <leftNav></leftNav> -->
    <div class="main">
      <router-view/>
    </div>
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
html{
  height: 100%;
  width: 100%;
}
html body{
  height: 100%;
  width: 100%;
}
.main {
  float: righ;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden;
}
</style>
