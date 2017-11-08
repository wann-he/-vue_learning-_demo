<template>
  <div class="pos">
      <!-- Hello WannPos Demo. -->
      <div>
<el-row >
        <el-col :span='7' class="pos-order" id="order-list">
          这是订单栏
        </el-col>
        <el-col>
          这是商品栏
        </el-col>
      </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: "pos",
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("order-list").style.height = orderHeight + "px";
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
</style>
