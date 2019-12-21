<template>
  <div id="app">
    <header>
      <div class="header-logo">
        <a href="">
          <img src="https://m.ddcat.cn/images/img_01.jpg">
        </a> 
      </div>
      <div class="header-right clas">
        <ul id="ul1">
          <li class="clicknav clicknavnoton">
            <a href="javascript:void(0)" @click="show = !show">
              <img  class="nid" src="https://m.ddcat.cn/images/img_02.jpg" />
            </a>
          </li>
          <li>
            <a href="http://wei.ddcat.cn/app/./index.php?i=3&amp;c=entry&amp;eid=23">
              <img id="nis" class="nid" src="https://m.ddcat.cn/images/img_03.jpg" />
            </a>
          </li>
        </ul>
      </div>
      <div>

      </div>

    </header>

    <router-view/>
    <footer>
      <div>
        <a>
          <img src="https://m.ddcat.cn/images/img_43.jpg">
        </a>
      </div>
    </footer>



  </div>
</template>
 
<script>
export default {
  data() {
    return {
      show: false
    };
  },
}
</script>

<style>
#app{
  height:100%;
  width:100%;
}
header img{
  margin-top: 15px;
}

footer{
  bottom:0;
  position: fixed;

}
footer img{
  width:100%;
  height:100%;
}




</style>
