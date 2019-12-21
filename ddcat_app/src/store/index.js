import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const navs = [
  { name: 'dy', text: '品牌介绍', header: '品牌介绍', path: '/brand' },
  { name: 'yy', text: '新闻动态', header: '新闻动态', path: '/shjd' },
  { name: 'wd', text: '加盟优势', header: '加盟优势', path: '/xwdt' },
  { name: 'fd', text: '商学院', header: '商学院', path: '/xwdt' },
  { name: 'sf', text: '联系我们', header: '联系我们', path: '/brand' },
  { name: 'ss', text: '时尚经典', header: '时尚经典', path: '/af' },
  { name: 'yg', text: '轻奢潮童', header: '轻奢潮童', path: '/shjd' },
  { name: 'yg', text: '母婴百货', header: '母婴百货', path: '/af' },
  { name: 'aa', text: '儿童乐园', header: '儿童乐园', path: '/af' },
  { name: 'yd', text: '童鞋配饰', header: '童鞋配饰', path: '/xwdt' },
  { name: 'vd', text: '婴小童春夏', header: '婴小童春夏', path: '/brand' },
  { name: 'fg', text: '婴小童秋冬', header: '婴小童秋冬', path: '/xwdt' },
  { name: 'er', text: '中大童春夏', header: '中大童春夏', path: '/xwdt' },
  { name: 'jj', text: '中大童春夏', header: '中大童春夏', path: '/brand' },
  { name: 'we', text: '中大童秋冬', header: '中大童秋冬', path: '/af' },
]

export default new Vuex.Store({
  state: {
    selectedNav: navs[0],//对象不能做比较,内存地址不一样;
    navs: navs,
  },
  mutations: {
    selectNav(state, nav) {
      state.selectedNav = nav;
    }
  },
  actions: {
    selectNav(context, nav) {
      console.log(this)//this代表state对象,路由是组件上的东西,现在不能直接访问
      context.commit('selectNav', nav);
    }
  },
  modules: {
  }
})
