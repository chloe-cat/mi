<template>
    <div id="app">
     <div class="new">
    <img src="../assets/pic7.jpg"/>
    <span> 007 </span> 
    <a href="https://mp.weixin.qq.com/s/1ilqRn6YWqnfWZrOwKYZvg">叮当猫-开工大吉 | 2020 事事顺利！</a>
    </div>

     <div class="new">
    <img src="../assets/pic8.jpg"/>
    <span> 007 </span> 
    <a href="https://mp.weixin.qq.com/s/_S370pJ8kFMXW9LNMhbcOg">叮当猫-开工大吉 | 2020 事事顺利！</a>
    </div>

    <div class="new">
    <img src="../assets/pic9.jpg"/>
    <span> 007 </span> 
    <a href="https://m.ddcat.cn/newsshow.php?cid=4&id=45">布局优势产业基地-叮当猫出席2019织里童装时尚周</a>
    </div>

     <div class="new">
    <img src="../assets/pic1.jpg"/>
    <span> 007 </span> 
    <a href="https://mp.weixin.qq.com/s/_S370pJ8kFMXW9LNMhbcOg">叮当猫-开工大吉 | 2020 事事顺利！</a>
    </div>
    
    <!-- <news></news>
     <news></news>
      <news></news>
       <news></news>
        <news></news>
         <news></news> -->


    </div>
</template>


<script>
// Vue.component('news',{
//     data:function(){
//         return{

//         }
//     },
//     template: `
//     <div class="new" style="width:100%;
//     height:300px;
//     background:rgb(236, 231, 231);
//     padding:30px 30px 50px 30px;">
//     <img src="../assets/pic1.jpg"/ style="height:250px;
//     width:100%;">
//     <span style="font-size:20px;
//     margin-right:20px;"> 007 </span> 
//     <a href="#"  style="font-size:20px;">叮当猫-开工大吉 | 2020 事事顺利！</a>
//     </div>  
//     `,  
// })




//    new Vue({
//        el:'#app',
//        data:{
           
//        }

//    })
export default {
    name:'news',
  data(){

  } ,

   computed: {

   },
    methods: {

    },

}
</script>

<style>
.new{
width:100%;
height:5rem;
background:rgb(236, 231, 231);
padding:0.15rem 0.15rem 0.25rem 0.15rem;
}
.new img{
    height:3rem;
    width:100%;
    vertical-align: middle;
    border: 0;
}
.new span{
    font-size:0.3rem;
    margin-right:0.1rem;

}
.new a{
    font-size:0.2rem;
    color:orangered;
    text-decoration: none;
}

</style>