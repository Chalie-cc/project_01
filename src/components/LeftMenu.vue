<template>
  <div>
      <div class="left-menu">
        <div class="left-menu-logo">
          <img src="../assets/menu-logo.png">
        </div>
        <div class="left-menu-allproduct">
          <router-link to="/List">全部商品</router-link>
        </div>
        <div class="left-menu-mproduct">
          <div class="lmm-title">男士</div>
          <div class="lmm-shose">男士鞋类</div>
          <div class="lmm-clothes">男士服饰</div>
          <div class="lmm-other">男士配饰</div>
        </div>
        <div class="left-menu-wproduct">
          <div class="lmw-title">女士</div>
          <div class="lmw-shose">女士鞋类</div>
          <div class="lmw-clothes">女士服饰</div>
          <div class="lmw-other">女士配饰</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left-menu{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color:#fff;
}
.left-menu-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color:#fff;
}
.left-menu-logo img{
  width: 50%;
  height: 50%;
}
.left-menu-allproduct{
  background-color:#fff;
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  font-size: 28px;
  padding-left: 10%;
}
.left-menu-allproduct a{
  color: #000;
}
.left-menu-mproduct{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 25%;
  background-color:#fff;
}
.lmm-title{
  display: flex;
  align-items: center;
  height: 30%;
  width: 100%;
  padding-left: 10%;
  font-size: 28px;
}
.lmm-shose{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}
.lmm-clothes{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}
.lmm-other{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}
.left-menu-wproduct{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 25%;
  background-color:#fff;
}
.lmw-title{
  display: flex;
  align-items: center;
  height: 30%;
  width: 100%;
  padding-left: 10%;
  font-size: 28px;
}
.lmw-shose{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}
.lmw-clothes{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}
.lmw-other{
  display: flex;
  align-items: center;
  height: 23%;
  width: 100%;
  padding-left: 20%;
}


</style>