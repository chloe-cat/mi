<template>
  <div class="home">
    <header>
      <div class="header-logo">
        <a href="">
          <img click id="cdd" src="https://m.ddcat.cn/images/img_01.jpg" />
        </a>
      </div>
      <div class="header-right clas">
        <ul id="ul1">
          <li class="clicknav clicknavnoton">
            <a href="javascript:void(0)" @click=" show = !show">
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
    </header>
    <div v-if="show" class="headerright" style="display: block;">
      <ul>
        <li>
          <a >品牌介绍</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a >新闻动态</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="javascript:void(0)" class="hasjt">产品展示</a>
          <ul class="nav_sub">
            <li>
              <a href="javascript:void(0)" class="hasjt1">婴小童</a>
              <ul class="s">
                <li>
                  <a href="yxtcl.php">婴小童-陈列</a>
                </li>
                <li>
                  <a href="yxtcx.php">2019-春夏装</a>
                </li>
                <li>
                  <a href="yxtqd.php">2018-秋冬装</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)" class="hasjt1">中大童</a>
              <ul class="s">
                <li>
                  <a href="zdtcl.php">中大童-陈列</a>
                </li>
                <li>
                  <a href="zdtcx.php">2019-春夏款</a>
                </li>
                <li>
                  <a href="zdtqd.php">2018-暖冬款</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="qsct.php">潮童系列</a>
            </li>
            <li>
              <a href="#">童鞋</a>
            </li>
            <li>
              <a href="txps.php">配饰品</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="jmys.php">加盟优势</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="sxy.php">商学院</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="ssjd.php">时尚经典</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="qsct.php">轻奢潮童</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="mybh.php">母婴百货</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="etly.php">儿童乐园</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="txps.php">童鞋配饰</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="contact.php">联系我们</a>
          <ul class="nav_sub"></ul>
        </li>
        <li>
          <a href="index.php">回到首页</a>
          <ul class="nav_sub"></ul>
        </li>
      </ul>
    </div>
    <div class="r-icon">
      <ul id="ns">
        <li>
          <a href="http://wei.ddcat.cn/app/./index.php?i=3&amp;c=entry&amp;eid=23">
            <img src="https://m.ddcat.cn/images/qsct/r-icon1.jpg" alt />
            <p>在线咨询</p>
          </a>
        </li>
        <li>
          <a href="tel:400-1516178">
            <img src="https://m.ddcat.cn/images/qsct/r-icon2.jpg" alt />
            <p>加盟热线</p>
          </a>
        </li>
      </ul>
    </div>

    <nav id="nizui">
      <div class="index-nav wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div id="nide">
          <img src="https://m.ddcat.cn/uploads/image/20191209/1575863210.jpg" alt />
        </div>
        <div id="dd">
          <div
            id="lo"
            :key="nav.name"
            v-for="nav of navs"
            :class="{selected:selectedNav === nav}"
            @click="selectNav(nav)"
          >{{nav.text}}</div>
        </div>

        <!-- <div v-bind:key="nav.name" 
        v-for="nav of navs" 
        v-bind:class="{selected: selectedNav === nav}"
        v-on:click="selectNav(nav)">
          {{ nav.text }}
        </div>-->
        <!-- <ul> -->
        <!-- <li class="trr">
            <a href>品牌介绍</a>
            <ul class="nav_sub"></ul>
          </li>
          <li class="trr">
            <a href>新闻动态</a>
            <ul class="nav_sub"></ul>
          </li>
          <li class="trr">
            <a href>加盟优势</a>
            <ul class="nav_sub"></ul>
          </li>
          <li class="trr">
            <a href>商学院</a>
            <ul class="nav_sub"></ul>
          </li>
          <li class="trr">
            <a href>联系我们</a>
            <ul class="nav_sub"></ul>
          </li>
          <li id="abb">
            <a href>时尚经典</a>
            <ul class="nav_sub"></ul>
          </li>
          <li id="abb">
            <a href>轻奢潮童</a>
            <ul class="nav_sub"></ul>
          </li>
          <li id="abb">
            <a href>母婴百货</a>
            <ul class="nav_sub"></ul>
          </li>
          <li id="abb">
            <a href>儿童乐园</a>
            <ul class="nav_sub"></ul>
          </li>
          <li id="abb">
            <a href>童鞋配饰</a>
            <ul class="nav_sub"></ul>
          </li>
          <li>
            <a href>婴小童春夏</a>
            <ul class="nav_sub"></ul>
          </li>
          <li>
            <a href>婴小童秋冬</a>
            <ul class="nav_sub"></ul>
          </li>
          <li>
            <a href>中大童春夏</a>
            <ul class="nav_sub"></ul>
          </li>
          <li>
            <a href>中大童秋冬</a>
            <ul class="nav_sub"></ul>
        </li>-->
        <!-- <li>
            <a
              href="http://wei.ddcat.cn/app/index.php?i=3&amp;c=entry&amp;do=dayu_form&amp;id=9&amp;m=dayu_form"
            >索取资料</a>
            <ul class="nav_sub"></ul>
          </li>
        </ul>-->
      </div>

      <div
        class="index-news wow fadeInUp"
        data-wow-delay="0.6s"
        data-wow-duration="0.4s"
        style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.6s; animation-name: fadeInUp;"
      >
        <h4 id="h41" align="center">广东叮当猫儿童用品有限公司位于广东汕头，主要负责童装品牌加盟及管理业务，协调管理猫系各板块业务对接，品牌文化推广等各项工作。</h4>
        <!-- <div class="news-box">
          <h2>新闻动态</h2>
          <ul style="margin-top: 0px;">
            <li class="title">
              <dl>
                <dt>
                  <i>新闻</i>
                </dt>
                <dd>
                  <a href>叮当猫＆福娃情：刘伯伯与五福娃的故事</a>
                </dd>
              </dl>
            </li>
            <li class="title">
              <dl>
                <dt>
                  <i>新闻</i>
                </dt>
                <dd>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzA3MjAyMjEyMg==&amp;mid=2649903423&amp;idx=1&amp;sn=981a14999f02aa2294970b2e498e9b63&amp;chksm=8722503ab055d92c17c2f7e85c110c6dfb10f358478cc1fce689eb28af111d61e0886086fced&amp;token=1949295750&amp;lang=zh_CN#rd"
                  >叮当猫携手新丝路佐嘉学院联合举办模特表演</a>
                </dd>
              </dl>
            </li>
            <li class="title">
              <dl>
                <dt>
                  <i>热点</i>
                </dt>
                <dd>
                  <a
                    href="https://mp.weixin.qq.com/s/cpWBovM4Tkk3ZEjJyEIFpA"
                  >叮当猫董事长把手教你《开辟美好的儿童商业新世界》！</a>
                </dd>
              </dl>
            </li>
            <li class="title">
              <dl>
                <dt>
                  <i>热点</i>
                </dt>
                <dd>
                  <a href>加盟什么样的品牌，23天神速开业？</a>
                </dd>
              </dl>
            </li>
            <li class="title">
              <dl>
                <dt>
                  <i>新闻</i>
                </dt>
                <dd>
                  <a href>听说这样的店一开，就火了</a>
                </dd>
              </dl>
            </li>
            <li class="title">
              <dl>
                <dt>
                  <i>新闻</i>
                </dt>
                <dd>
                  <a href>布局优势产业基地-叮当猫出席2019织里童装时尚周</a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>-->
      </div>
    </nav>

    <div class="index-body women">
      <p>
        <i id="i11">专卖店形象</i>
      </p>
      <h2>精致布局陈列的卖场空间</h2>
      <h4>
        USE INNOVATIVE WAYS TO OWN INDUSTRIAL PARKS.
        <br />STRONG SUPPLY TO ENSURE CUSTOMERS
      </h4>

      <div id="img1">
        <img src="https://m.ddcat.cn/uploads/image/20190115/1547482991.jpg" alt />
      </div>
      <div class="news-more">
        <a href>
          <img src="https://m.ddcat.cn/images/img_16.png" />了解更多 &gt;&gt;
        </a>
      </div>
    </div>

    <div
      class="index-news-body wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
      style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
    >
      <p class="df">
        <i>婴小童春夏款</i>
      </p>
      <h2>0-16岁全龄段产品覆盖</h2>
      <h4>PRODUCT COVERAGE FOR 0-16 YEARS OLD</h4>
      <div class="news-body-img">
        <a href="yxtcx.php">
          <img src="https://m.ddcat.cn/images/img_20.jpg" />
        </a>
      </div>
      <div class="news-more">
        <span>
          <i>婴小童春夏产品活泼童趣</i>
        </span>
        <a href id="a1">
          <img src="https://m.ddcat.cn/images/img_16.png" />了解更多 &gt;&gt;
        </a>
      </div>
    </div>
    <div
      class="index-news-body fenghong wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
      style="background: visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
    >
      <p class="df">
        <i>婴小童秋冬款</i>
      </p>
      <h2 id="dd1">可能是年龄段最齐全的品牌之一</h2>
      <h3 id="dd2">婴幼儿 / 小童 / 中大童 / 少年</h3>
      <h4>PRODUCT COVERAGE FOR 0-16 YEARS OLD</h4>
      <div class="news-body-img">
        <a href="yxtqd.php">
          <img src="https://m.ddcat.cn/images/img_32.jpg" />
        </a>
      </div>
      <div class="news-more">
        <span>
          <i>婴小童秋冬产品活泼童趣</i>
        </span>
        <a href="yxtqd.php">
          <img src="https://m.ddcat.cn/images/img_16.png" />了解更多 &gt;&gt;
        </a>
      </div>
    </div>

    <div
      class="index-news-body jianbian wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
      style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
    >
      <p>
        <i>婴小童陈列</i>
      </p>
      <h2>各系列陈列形式多样</h2>
      <h4>VARIOUS DISPLAY FORMS FO EACH SERIES</h4>
      <div class="news-body-img" style="margin:70px 0 0 0;">
        <a href="yxtcl.php">
          <img src="https://m.ddcat.cn/images/img_27.jpg" />
        </a>
      </div>
      <div class="news-more">
        <span>
          <i>卖场陈列场景展示</i>
        </span>
        <a href>
          <img src="https://m.ddcat.cn/images/img_16.png" />了解更多 &gt;&gt;
        </a>
      </div>
    </div>

    <div
      class="index-news-body wow fadeInUp"
      style="background: url(&quot;images/img_38.jpg&quot;) 0% 0% / 100% 100% no-repeat; visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
    >
      <p>
        <i>加盟优势</i>
      </p>

      <div id="zuile">
        <span id="i1">8</span>加盟优势
      </div>

      <h2>无忧开店的好品牌</h2>
      <h4>A GOOD BRAND FOR CARE-FREES STORES</h4>
      <div id="women">
        <img src="https://m.ddcat.cn/images/img_41.jpg" alt />
      </div>
    </div>

    <div
      class="index-news-body wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
      style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
    >
      <ul class="index-jm" id="jj">
        <li>
          <img src="https://m.ddcat.cn/images/img_38-1.jpg" />
          <p>0加盟费</p>
        </li>
        <li>
          <img src="https://m.ddcat.cn/images/img_38-2.jpg" />
          <p>开店无忧</p>
        </li>
        <li>
          <img src="https://m.ddcat.cn/images/img_38-3.jpg" />
          <p>装修补贴</p>
        </li>
        <li>
          <img src="https://m.ddcat.cn/images/img_38-4.jpg" />
          <p>一带一店</p>
        </li>
        <li>
          <img src="https://m.ddcat.cn/images/img_38-5.jpg" />
          <p>货品支持</p>
        </li>
        <li>
          <img src="https://m.ddcat.cn/images/img_38-6.jpg" />
          <p>产品供应</p>
        </li>
      </ul>
    </div>
    <div class="news-more">
      <span>
        <i id="iii">传统+互联网思维结合，实现营销新突破</i>
      </span>
      <a href="sxy.php">
        <img src="images/img_16.png" />了解更多 &gt;&gt;
      </a>
    </div>

    <div id="aa"
      class="index-news-body wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.4s"
      style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.2s; animation-name: fadeInUp;"
    >
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
                  <input type="text" placeholder="您的姓名" value class="wqname" />
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
</template>

<script>
// 导入
import { mapState, mapActions } from "vuex";
// 导出
export default {
  data() {
    return {
      show: false
    };
  },
  // 计算属性
  computed: {
    ...mapState(["navs", "selectedNav"])
  },
  methods: {
    ...mapActions({
      selectNav(dispatch, nav) {
        this.$router.push(nav.path); //获取路由相关的方法;
        dispatch("selectNav", nav);
      }
    })
  }
};
</script>
<style scope>


#zuile{
  font-size: 28px;
}
.index-body{
  height:400px !important;
}
#cdd{
position: absolute;
top: 8px;
left: 1px;
width: 190px;
height: 60px;
}
#jj  li p{
  font-size: 14px;
}
#dd2{
  font-size: 22px;
}
#dd1{
  font-size: 20px;
}
.index-body{
  margin-top: 288px !important;
}
#img1{
  margin-top: 50px;
}
#dd{
  margin-bottom: 20px;
  height: 180px;
}
.index-nav {
  margin-bottom: 50px;
}
.index-body > h4 {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 12px;
  color: #5f5f5f;
  line-height: 15px;
  margin-top: -4px !important;
}
#h41 {
  font-size: 0.33rem !important;
  position: absolute;
  top: 465px !important;
}
#lo {
  width: 19.99%;
  display: block;
  line-height: 60px;
  font-size: 10px;
  color: #040404;
  background: #e5e5e5;
  border-right: #b1b1b1 solid 1px;
  float: left;
  text-align: center;
}

.nav_sub {
  display: none;
}
.df h4 {
  margin-top: 12px;
}
.headerright {
  width: 200px;
  position: fixed;
  right: 81%;
  top: 70px;
  margin: 0 -320px 0 0;
  background: #464646;
  z-index: 99999;
  padding: 20px 0;
}

.headerright ul {
  text-align: center;
  margin: 0 auto;
}
.headerright ul li a {
  display: block;
  color: #fefefe;
  text-align: center;
  padding: 0 10%;
  font-size: 20px;
  line-height: 30px;
  border-bottom: #585858 solid 1px;
}
#cb {
  margin-top: 12px;
}
#nis {
  position: absolute;
  top: 7px;
  left: 324px;
  z-index: 9999;
  width: 60px;
  height: 60px;
}
#ul1 {
  display: inline-block;
  height: 70px;
  width: 40%;
  /* float: right; */
}
.nid {
  height: 60px;
  width: 60px;
  margin-top: -3px;
  position: absolute;
  top: 7px;
  left: 261px;
}
.header-logo img {
  width: 250px;
  float: left;
}
#nide img {
  width: 100%;
  margin-top: 70px;
}
.banner1 img {
  width: 100%;
  float: left;
}
header .header-logo a img {
  height: 100%;
}
img {
  vertical-align: middle;
}
#h41 {
  /* margin-top: 120px; */
  position: absolute;
  top: 400px;
}

.index-form .form-box .right a {
  width: 100%;
  text-align: center;
  width: 88%;
  margin: 10px 0;
  float: left;
  line-height: 26px;
  background: #f13d26;
  color: white;
  font-size: 15px;
  border-radius: 26px;
}

#zui {
  margin-left: 20px;
}
.index-form .form-box .right {
  width: 21%;
  float: right;
  padding: 15px 0 0 0;
  margin-right: 20px;
}
.index-form .form-box .right h2 {
  margin-top: -50px;
  font-size: 14px;
  color: #d2d2d2;
  line-height: 25px;
}
#woe li{
  height: 30px;
  margin-left: 10px;
}
.index-form .form-box {
  width: 90%;
  float: left;
  /* background: #e6e6e6; */
  border-radius: 20px;
  /* margin-left: 5%; */
  margin-bottom: 20px;
}
.index-form {
    float: left;
    /* padding: .09rem; */
    bottom: 0;
    left: 0;
    margin: 0;
    z-index: 999;
    background: 
    #403f3f;
    width: 100%;
}
.index-form .form-box {
    width: 100%;
    float: left;
    background: 
    #e6e6e6;
    border-radius: .1rem;
    /* padding: .1rem; */
}
.index-form .form-box .left {
    float: left;
    width: 65%;
}
.index-form .form-box .right h2 {
    margin-top: 12px;
    font-size: 14px;
    color:#666;
    line-height: 25px;
}
.index-form .form-box .left h2 {
    padding-top: 15px;
    line-height: .1rem;
    font-size: .1rem;
    font-weight: 800;
    color: 
    #f13d26;
    margin: 0 0 .075rem;
}
.index-news-body {
  width: 100%;
  float: left;
}
.news-more span i {
  font-size: 14px !important;
  margin-top: 20px !important;
}

.index-jm li img {
  width: 70px;
  height: 70px;
}
#womne {
  height: 300px;
}
#women img {
  width: 100%;
  height: 200px;
}
.element.style {
  visibility: visible;
  animation-duration: 0.4s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.index-jm {
  width: 100%;
  float: left;
  margin: 0;
  background: #f5f5f5;
}
ul li {
  list-style: none;
}
.index-jm li {
  width: 32.5%;
  float: left;
  text-align: center;
  border: #eaeaea solid 1px;
  padding: 10px 0;
}
#zuile {
  text-align: center;
  margin-top: 20px;
}
#i1 {
  font-size: 30px;
  font-style: oblique;
}
.fenhong h2 {
  font-weight: 100;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center;
}
.news-more > span i {
  background: #f13c27;
  letter-spacing: 0px;
  padding: 6px 35px;
  color: white;
  font-size: 20px;
  border-radius: 30px;
  height: 59px;

  letter-spacing: 0px;
  transition: letter-spacing 0.5s;
  -moz-transition: letter-spacing 0.5s;
  -webkit-transition: letter-spacing 0.5s;
  -o-transition: letter-spacing 0.5s;
}
.news-body-img img {
  width: 100%;
  float: left;
}
.index-news-body > h4 {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 12px;
  color: #5f5f5f;
  line-height: 15px;
  margin-top: 3px;
}
.index-news-body > p > i {
  line-height: 30px;
  font-size: 18px;
  height: 30px;
  background: #5a5a5a;
  color: white;
  padding: 3px 28px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-top: 0;
}
.index-news-body > p {
  text-align: center;
}
.index-news-body > h2 {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 24px;
  line-height: 60px;
  color: #666;
}
.index-news-body {
  width: 100%;
  float: left;
  background: white;
}

.news-more a img {
  height: 35px;
}
.news-more a {
  color: #424242;

  font-size: 12px;
  line-height: 35px;
  height: 35px;
  margin-top: 15px;
  width: 100%;
  float: left;
}
.news-more {
  width: 100%;
  float: left;
  text-align: center;
  color: #666;
  height: 67px;
  background: #d8d8d8;
 
}
.index-form{
  margin-bottom: 60px !important;
}
.swiper-container {
  height: 80px;
  padding-left: 56px;
  background-image: -webkit-radial-gradient(23% 100%, #2e79c3 0%, #297bc4 100%);
}
.swiper-slide {
  width: auto !important;
  display: inline-block;
  margin-right: 40px;
  height: 80px;
  line-height: 80px;
  font-size: 32px;
  padding: 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.swiper-container .swiper-slide .active {
  color: #666;
  background-color: #fff8eb;
  box-shadow: 0 3px 13px 0 rgba(94, 94, 94, 0.5);
}

#app {
  height: 100%;
  width: 100%;
}
.index-body > h4 {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 12px;
  color: #5f5f5f;
  line-height: 15px;
  margin-top: 20px;
}
header {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  background: #333;
  color: white;
  text-align: center;
  line-height: 70px;
  z-index: 999;
}

ul {
  display: block;
  list-style-type: disc;
}
#img1 img {
  width: 100%;
  box-shadow: #cecece 0px 7px 10px;
  border-radius: 20px;
  margin-top: 25px;
}
.index-nav ul {
  width: 100%;
  margin-top: 1px;
}
.index-nav ul li {
  width: 19.75%;
  float: left;
  text-align: center;
  list-style: none;
  height: 60px;
  font-size: 14px;
  color: #040404;
  line-height: 60px;
  background: #e5e5e5;
  border-right: #b1b1b1 solid 1px;
}

#abb a {
  background: white;
}
.index-nav {
  width: 100%;
  height: 188px;
}
.news-box {
  width: 100%;
  float: left;
  position: absolute;
  top: 430px;
  height: 110px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
}
.news-box ul {
  float: right;
}
.news-box ul li {
  list-style: none;
  border-top: 1px dashed #464646;
}
h4 {
  display: block;
  color: #666;
  font-size: 18px;
  font-weight: bold;
  margin-top: 110px;
}
nav {
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 14px;
}

.index-body {
  width: 100%;
  height: 500px;
  border-top: solid 1px #434343;
}
.r-icon p{
  font-size: 16px;
}
.r-icon {
  position: fixed;
  top: 32%;
  right: 0;
  z-index: 999999;
  width: 60px;
  height: 214px;
  padding: 12px;
  background: #545353;
  margin: 117px 0 0 0;
}
.r-icon ul {
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 2px;
} 
.r-icon ul li {
  float: left;
  width: 100%;
  text-align: center;
}
.r-icon ul li img {
  margin-top: 0px;
  margin-left: -13px;
  text-align: center;
} 
a {
  text-decoration: none;
  color: white;
}
.news-box h2 {
  margin-left: 20%;
  font-size: 20px;
  color: red;
}
.index-nav a {
  display: block;
  line-height: 60px;
  font-size: 18px;
  color: #040404;
  background: #e5e5e5;
  border-right: #b1b1b1 solid 1px;
}
.index-body > p {
  width: 100%;
  float: left;
  text-align: center;
  border-top: #d8d8d8 solid 1px;
  padding-top: 0;
}
.index-body > p > i {
  line-height: 30px;
  font-size: 18px;
  height: 30px;
  background: #5a5a5a;
  color: white;
  padding: 3px 28px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-top: 30px;
}
.index-body > h2 {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 24px;
  line-height: 60px;
  font-weight: 100;
  margin-top: 8px;
}

.header-right .clas {
  height: 70px;
}
</style>
