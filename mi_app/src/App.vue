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
            <a href="javascript:void(0)">
              <img @click="inc" class="nid" src="https://m.ddcat.cn/images/img_02.jpg" />
            </a>
          </li>
          <li>
            <a href="http://wei.ddcat.cn/app/./index.php?i=3&amp;c=entry&amp;eid=23">
              <img id="nis" class="nid" src="https://m.ddcat.cn/images/img_03.jpg" />
            </a>
          </li>
        </ul>
      </div>     
    </header>

    <router-view/>
    <div class="index-news-body">
      <div class="news-body-img">
        <a href>
          <img src="https://m.ddcat.cn/images/img_43.jpg" />
        </a>
      </div>
    </div>
    <div class="index-form">
      <div class="form-box">
        <div class="left">
          <h2 id="zui">别拦我！我要加盟&gt;&gt;</h2>
          <div class="form">
            <form>
              <ul id="woe">
                <li>
                  <input   
                    type="text"
                    placeholder="您的姓名"
                    value
                    class="wqname"
                  />
                </li>
                <li>
                  <input type="text" placeholder="您的电话" value class="wqphone" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="right">
          <h2>我们的专员会迅速联系您！</h2>
          <a href class="gotoweiqing">提交信息</a>
        </div>
      </div>
    </div>
  </div>


  </div>
</template>


<style>
#app{
  height:100%;
  width:100%;
}

header{ 
    width:100%;
    position: fixed;
    float: left;
    top: 0;
    left: 50%;
    background: #333;
    margin: 0 0 0 -50%;
    height: 0.8rem;
    z-index: 9999;
}
header .header-logo{
  float:left;
  height:0.8rem;
}

header .header-logo a img{
  height:100%;
}
.header-right{
  float: right;
  height: .35rem;
  padding: 0 10px;
}
header .header-right ul li img{
  height:0.8rem;
}
.index-news-body {
    width: 100%;
    float: left;
}
.news-body-img {
    width: 100%;
    float: left;
}
.news-body-img img {
    width: 100%;
    float: left;
}
.index-form {
    float: left;
    padding: .09rem;
    bottom: 0;
    left: 0;
    margin: 0;
    z-index: 999;
    background: #403f3f;
    width:100%;
}
.index-form .form-box {
    width: 100%;
    float: left;
    background: #e6e6e6;
    border-radius: .1rem;
    padding: .1rem;
}
.index-form .form-box .left {
    float: left;
    width: 65%;
}
.index-form .form-box .left h2 {
    margin: 0;
    line-height: .1rem;
    font-size: .1rem;
    font-weight: 800;
    color: #f13d26;
    margin: 0 0 .075rem;
}
.index-form .form-box .left .form ul li {
    width: 100%;
    float: left;
}
.index-form .form-box .left .form ul li input {
    width: 100%;
    float: left;
    line-height: .175rem;
    border-radius: 5px;
    border: #d2d2d2 solid 1px;
    margin: 2px 0;
    padding: 0 .05rem;
    font-size: .09rem;
}
.index-form .form-box .right {
    width: 21%;
    float: right;
    padding: 15px 0 0 0;
}
.index-form .form-box .right h2 {
    margin: 0;
    font-size: .09rem;
    color: #828282;
    line-height: .125rem;
}
.index-form .form-box .right a {
    text-align: center;
    width: 88%;
    margin: 10px 0;
    float: left;
    line-height: .15rem;
    background: #f13d26;
    color: white;
    font-size: .085rem;
    border-radius: .15rem;
}




ul ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
li{
  float: left;
}
a{
  text-decoration: none;
}
img{
  vertical-align: middle;
}




</style>
