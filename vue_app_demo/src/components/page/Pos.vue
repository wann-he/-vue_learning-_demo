<template>
  <div class="pos">
      <!-- Hello WannPos Demo. -->
      <div>
        <el-row>
          <el-col :span='7' class="pos-order" id="order-list">
            <el-tabs>
              <el-tab-pane label="点餐">
                 <el-table :data="tableData" border style="width:100%">
                    <el-table-column prop="goodsName" label="名称"></el-table-column>
                    <el-table-column prop="count" label="数量" width="50"></el-table-column>
                    <el-table-column prop="price" label="名称" width="70"></el-table-column>
                    <el-table-column prop="" label="操作" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="totalDiv">
                    <small>数量</small> : {{ totalCount }} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额</small> :{{ totalMoney }}
                  </div>
                  <div style="margin-top:10px;">
                    <el-button type="warning">挂单</el-button>
                    <el-button type="danger" @click="delAllGoods">删除</el-button>
                    <el-button type="success" @click="checkout">结账</el-button>
                  </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">
                挂单
              </el-tab-pane>
              <el-tab-pane label="外卖">
                外卖
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span='17'>
            <div class="normal-goods">
              <div class="title">常用商品</div>
              <div class="normal-goods-list">
                <ul>
                  <!--  v-for="(item,index) in items" :key="index" -->
                  <li v-for="(goods,index) in normalGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                    <span>{{ goods.goodsName }}</span>
                    <span class="o-price">{{ goods.price }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class="cookList">
                    <li  v-for="goods in type0Goods" :key="goods.goodsId">
                      <span class="foodImg"><img v-bind:src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class="cookList">
                    <li  v-for="goods in type1Goods" :key="goods.goodsId">
                      <span class="foodImg"><img v-bind:src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class="cookList">
                    <li  v-for="goods in type2Goods" :key="goods.goodsId">
                      <span class="foodImg"><img v-bind:src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class="cookList">
                    <li  v-for="goods in type3Goods" :key="goods.goodsId">
                      <span class="foodImg"><img v-bind:src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      normalGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0
    };
  },
  created: function() {
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(Response => {
        console.log(Response);
        this.normalGoods = Response.data;
      })
      .catch(Error => {
        console.log(Error);
        alert("网络错误，不能访问");
      });

    axios
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(Response => {
        console.log(Response);
        this.type0Goods = Response.data[0];
        this.type1Goods = Response.data[1];
        this.type2Goods = Response.data[2];
        this.type3Goods = Response.data[3];
      })
      .catch(Error => {
        console.log(Error);
        alert("网络错误，不能访问");
      });
  },
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    addOrderList(goods) {
      this.totalCount = 0;
      this.totalMoney = 0;
      //判断是否已存在于订单列表中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      //根据判断的值编写业务逻辑
      if (isHave) {
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getTotal();
    },
    //单独删除
    delSingleGoods(goods) {
      console.log(goods);
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getTotal();
      // this.totalCount -= goods.count;
      // this.totalMoney -= goods.price * goods.count;
    },
    //全部删除
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //结账
    checkout() {
      //1、设置我们Aixos的Pos方法。
      //2、接受返回值进行处理
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "结账成功",
          type: "success"
        });
      } else {
        this.$message.error("不能空结,老板了解你急切的心情！");
      }
    },
    //数量金额统计
    getTotal() {
      this.totalCount = 0;
      this.totalMoney = 0;
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    }
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #66ccff;
  padding: 10px;
  text-align: left;
}
.normal-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #66ccff;
  padding: 10px;
  margin: 10px;
  background-color: #66ccff;
}
.o-price {
  color: green;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}
</style>
