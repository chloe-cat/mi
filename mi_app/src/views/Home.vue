<template>
  <div class="home">
    <nav>
      <div 
        :key="nav.name" v-for="nav of navs"
        :class="{selected:selectedNav === nav}"
        @click="selectNav(nav)">
        {{nav.text}}
      </div>
    </nav>
  </div>
</template>

<script>
// 导入
import { mapState,mapActions } from 'vuex'
// 导出
export default {
  data(){
    return{
     
    }
  },
  // 计算属性
  computed:{
    ...mapState([
      'navs',
      'selectedNav',
    ]),
   
  },
  methods:{
    ...mapActions({
      selectNav(dispatch,nav){
        
        this.$router.push(nav.path);//获取路由相关的方法;
        dispatch('selectNav',nav)
      }
    })
  }
}
</script>
<style>
  nav{
  margin-top:1rem;
  width:100%;
  height:.245rem;
  display:flex;
  box-shadow:0px 0px 5px grey;
}
nav > div{
  display:inline-block;
  flex:1;
  line-height:.245rem;
  text-align:center;
  font-size:.25rem;
}
nav > div.selected{
  color:red;
}
</style>
