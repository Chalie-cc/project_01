<template>
  <div>
      <Nav></Nav>
      <div id="box"></div>
      <div class="pd-main">
          <div class="pd-img">
              <img :src="product.image">
          </div>
          <div class="pd-content">
              <div class="pdc-title">
                  <div class="pdct-tag">#新品</div>
                  <div class="pdct-title">{{product.name}}</div>
                  <div class="pdct-tag">{{product.text}}</div>
              </div>
              <div class="pdc-size">
                  <div class="pdc-size-top">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          选择您的尺寸:<i class="el-icon-arrow-down el-icon--right" style="margin-left:15vw"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>36</el-dropdown-item>
                          <el-dropdown-item>37</el-dropdown-item>
                          <el-dropdown-item>38</el-dropdown-item>
                          <el-dropdown-item disabled>39(售罄)</el-dropdown-item>
                          <el-dropdown-item >40</el-dropdown-item>
                          <el-dropdown-item >41</el-dropdown-item>
                          <el-dropdown-item >42</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </div>
                  <div class="pdc-size-bottom">
                      <div class="size-img">尺码图</div>
                  </div>
              </div>
              <div class="pdc-button">
                  <input class="pdcb-buy" type="button" value="立即购买">
                  <input class="pdcb-buy" @click.prevent="HandleAddCart(product)" type="button" value="加入购物车">
              </div>
              <div class="pdc-services">
                  <div class="pdc-services-ul">
                      <div><i class="icon iconfont icon-search"></i> <a href="">查看精品店库存</a></div>
                      <div><i class="icon iconfont icon-dianhua"></i> <a href="">联系我们</a></div>
                      <div><i class="icon iconfont icon-weizhi"></i> <a href="">查找精品店</a></div>
                  </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Nav from '../components/Nav'
export default {
    name:'ProductsDetail',
    components:{
        Nav
    },
    data(){
        return{
            //获取路由中参数
            id: parseInt(this.$route.params.id),
            product: Object
        }
    },
    methods:{
        HandleAddCart(){
            this.$store.state.cartList.push(this.product);
           
            // console.log(this.$store.state.cartList)
            // console.log(JSON.stringify(this.$store.state.cartList))
            // this.$store.commit('add', JSON.stringify(this.$store.state.cartList))
        },
        getProduct(id){
            axios({
                method:'get',
                url:'/api/productsDetail',
                data:id
            }).then(res => {
                this.product = res.data
            })
        },
    },
    mounted(){
        this.getProduct(this.id);
    }
}
</script>
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #000000;
    font-size: 16px;
    margin-left: 3vw;
}
.el-icon-arrow-down {
  font-size: 24px;
}

#box{
    height: 120px;
    width: 100%;
    background-color: rgb(182, 182, 182);
    border-bottom:1px solid rgb(167, 167, 167);
}
.pd-main{
    display: flex;
    justify-content: space-around;
    margin-top: 2vh;
}
.pd-img{
    width: 55vw;
    height: 80vh;
    background-color: rgb(242, 242, 244);
    overflow: hidden;
}
.pd-img img{
    width: 55vw;
    height: 80vh;
}
.pd-content{
    width: 35vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.pdc-title{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.pdct-tag{
    font-size: 14px;
    color: rgb(230, 230, 230);
}
.pdct-title{
    font-size: 36px;
    font-weight: bold;
}
.pdc-size{
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.pdc-size-top{
    width: 85%;
    height: 8vh;
    border: 1px solid rgb(54, 54, 54);
    border-radius: 10px;
    line-height: 8vh;
}
.pdc-button{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 16vh;
}
.pdcb-buy{
    width: 45%;
    height: 8vh;
    background-color: rgb(56, 56, 56);
    border-radius: 50px;
    color: #fff;
}
.pdc-services{
    width: 80%;
    height: 15vh;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 10px;
}

.pdc-services{
    padding: 10px;
}
.pdc-services-ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
}
.pdc-services a{
    text-decoration: #000;
    color: #000;
    font-size: 14px;
}

</style>