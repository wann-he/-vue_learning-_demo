<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr>
      <h3>{{count}}</h3>
        <p>
            <button @click="add(100)">加100</button>
            <button @click="$store.commit('add',10)">加10</button>
            <button @click="$store.commit('reduce')">减1</button>
            <button @click="reduce">减1</button>
        </p>
  </div>
</template>


<script>
import store from "@/vuex/store";
import { mapState, mapMutations,mapGetters} from "vuex";

export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  store,
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods: mapMutations(["add", "reduce"])

  //   computed:mapState({
  //       count:state => state.count
  //   }),
  //   computed:{
  //       count(){
  //           return this.$store.state.count;
  //       }
  //   }
};
</script>
