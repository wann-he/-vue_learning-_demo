import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 3
}

const mutations = {
    add(state,n) {
        state.count+=n;
    },
    reduce(state) {
        state.count--;
    }
}
 
const getters={
    count:function(state){
        return state.count+=1000;
    }
}

const actions={
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce')}, 3000);
        console.log('比reduce先执行');
    },
    reduceAciton({commit}){
        commit('reduce');
        console.log('zhiing aa');
        
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});