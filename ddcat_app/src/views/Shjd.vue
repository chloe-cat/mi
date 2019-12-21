
<template>
  <div id="app">
    <div class="ssjd">
      <img src="../assets/pic3.jpg" />
      <img src="../assets/pic4.jpg" />
      <h1>了解我们</h1>
      <h5>Understand us</h5>
      <p>
        叮当猫游乐园是叮当猫国际控股集团旗下广
        州叮当猫儿童游乐股份有限公司经营的游乐
        品牌，是一家集设计、研发、生产、营销于
        一体的大型儿童综合性游乐服务企业。公司
        由叮当猫国际控股集团和广州奇源联合投资，
        总部位于国际大都市香港，国内运营中心位
        于广州海珠区，品牌管理中心位于海滨城市
        汕头，游乐设施设备门市部位于广州番禺区，
        形象店位于广州天河区。
      </p>
      <h1>领军儿童行业</h1>

      <p>
        凭借叮当猫国际控股集团多年品牌运营管理
        经验及服装生产经验和广州奇源丰富的项目
        经验及齐全的设备供应，广州叮当猫儿童游
        乐股份有限公司以打造整场主题乐园及运营
        管理为企业定位，致力于服务以儿童游乐为
        核心的亲子娱乐综合体。
        公司涵集了儿童用品、儿童服饰、儿童教育
        及儿童乐园运营服务、儿童游乐、感统训练、
        运动健身、趣味培养、亲子互动、主题活动 于一体
        ，为当代儿童游乐、亲子娱乐创建一 个全新型的互
        动平台。
      </p>
      <h1>四大核心竞争力</h1>
      <h5>Four core competencies</h5>
      <div class="nav">
        <ul>
          <li>
            <img src="https://m.ddcat.cn/images/etyl/img4.png" alt />
            <h3>有竞争力的设计团队</h3>
            <br />
            <!-- <span>Innovation</span> -->
          </li>
          <li>
            <img src="https://m.ddcat.cn/images/etyl/img5.png" alt />
            <h3>完善的产销供应链</h3>
            <br />
            <!-- <span>Special service</span> -->
          </li>
          <li>
            <img src="https://m.ddcat.cn/images/etyl/img6.png" alt />
            <h3>完善的产销供应链</h3>
            <br />
            <!-- <span>professional operation</span> -->
          </li>
          <li>
            <img src="https://m.ddcat.cn/images/etyl/img7.png" alt />
            <h3>专业化运营管理服务</h3>
            <br />
            <!-- <span>Creating value</span> -->
          </li>
        </ul>
      </div>
      
      <div class="brand">
        <div class="brand1">
        <h1>品牌背景</h1>
        <h3>Brand background</h3>
        </div>
        <h2>卡通形象</h2>
        <h4>CARTOON</h4>
        <p>
          可爱灵动 惹人喜爱叮当猫卡通，
          延续丰富品牌形象。灵巧的猫形象
           通过不同的表情、形态表现于各种
           产品及设备上， 由此构成叮当猫儿
           童游乐园独特的风格。
          其形象 与设计理念一直深受消费者的喜爱。
        </p>
        <img src="../assets/pic5.jpg"/>
        <p>顶着正义能量光环的大叮当，作为族群王子，
          心存大爱， 乐于助人和奉献，备受人类喜爱。</p>
      <img src="../assets/pic6.jpg"/>
      
      
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "ssjd",
  components: {}
};
</script>
<style>
.ssjd {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgb(236, 231, 231);
  margin: 0.8rem 0 0 0;
}

.ssjd img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 0;
}
.ssjd h1 {
  font-size: 0.4rem;
  color: palevioletred;
  margin:0.12rem 0 ;
}
.ssjd h5 {
  font-size: 0.3rem;
  color: brown;
   margin:0.12rem 0 ;
}
.ssjd p {
  width: 100%;
  font-size: 0.3rem;
   margin:0.12rem 0 ;
  line-height: 0.5rem;
}
.nav {
  padding: 0 0.15rem;
  box-sizing: border-box;
  background: #fcfcfc;
  height:3rem;
  
}
.nav:after{
  content: " ";height:0;display: block;
  overflow: hidden;clear: both;
}
.nav{
  zoom:1
}
.nav ul {
  margin: 0.125rem 0;
  height: 3rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 -2.5px 4px rgba(0, 0, 0, 0.15);
}
ul:after{
  content: " ";height:0;display: block;
  overflow: hidden;clear: both;
}
.nav ul li {
  float: left;
  width:50%; 
  list-style: none;
  margin:0.1rem 0;
}
.nav ul li img {
  width: 1.3rem;
  height:1.3rem;
  float: left;
}

.nav ul li h3 {
  float: left;
  font-size: 0.15rem;
  margin-left: 0.5rem;
  text-align: center;
  margin-top:0.7rem;
}
/* .nav ul li span {
  float: right;
  font-size: 0.13rem;
  margin-left: 0.1rem;
} */
.brand1{
  height:1rem;
  text-align: center;
  margin:0.1rem 0.15rem;
  background:orange;
}
.brand1 h1{
  font-size:0.3rem;
  padding:0.15rem 0;
}
.brand1 h3{
  font-size:0.2rem;
   margin:0.15rem 0 ;
}
.brand >h2{
  font-size:0.3rem;
  margin-left:0.15rem;
   margin:0.12rem 0 ;
}
.brand >h4{
  font-size:0.2rem;
  margin-left:0.12rem;
}
.brand {
  box-sizing: border-box
}
.brand > p{
  font-size:0.3rem;
  margin-left:0.12rem;
  width:100%;
}



</style>