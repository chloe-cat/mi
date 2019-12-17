import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const navs = [
  {name:'ppjs',text:'品牌介绍',path:'/brand'},
  {name:'ssjd',text:'时尚经典',path:'/shjd'},
  {name:'yxtcx',text:'婴小童春夏',path:'/yxtcx'},
]

export default new Vuex.Store({
  state: {
    selectedNav:navs[0],//对象不能做比较,内存地址不一样;
    navs:navs,
  },
  mutations: {
    selectNav(state,nav){
      state.selectedNav=nav;
    }
  },
  actions: {
    selectNav(context,nav){
      console.log(this)//this代表state对象,路由是组件上的东西,现在不能直接访问
      context.commit('selectNav',nav);
    }
  },
  modules: {
  }
})
