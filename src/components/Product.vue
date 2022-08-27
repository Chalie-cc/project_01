<template>
          <router-link :to="'/product/' + info.id" class="product">
                  <div class="product-img">
                      <img :src="info.image">
                  </div>
                  <div class="product-name">{{info.name}}</div>
                  <div class="product-text">{{info.text}}</div>
                  <div class="product-price">${{info.price}}</div>
          </router-link>
</template>

<script>
export default {
    props:{
        info:Object
    }

}
</script>

<style scoped>
html,body{
    height: 100%;
    margin: 0;
    padding: 0;
}
.product{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    width: 21%;
    margin-top: 1vh;    
}
.product-img{
    height: 35vh;
    width: 100%;
    background-color: rgb(242, 242, 244);
    overflow: hidden;

}
.product-img img{
    height: 38vh;
    width: 100%;
    transition: all .6s;
}
.product-img img:hover{
    transform: scale(1.1);
  
}
.product-name{
    font-weight: bold;
    font-size: 15px;
}
.product-text{
    font-style: 15px;
    color: rgb(102, 102, 102);
}
.product-price{
    font-size: 12px;
    font-weight: bold;
}
a {
    color: #000;
}
</style>