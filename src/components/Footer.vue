<template>
  <div>
      <div class="footer">
          <div class="f-top">
              <div class="f-top-nav"></div>
              <div class="f-top-text">MKBK球鞋交易平台专享服务</div>
              <div class="f-top-bottom">
                  <div class="f-top-bottom-item">
                      <div class="ftbi-item" v-for="(obj,index) in objInArr" :key="index">
                          <div class="ftbi-item-img">
                              <img :src="obj.img" alt="" />
                          </div>
                          <div class="ftbi-item-title"> {{ obj.title }} </div>
                          <div class="ftbi-item-text"> {{ obj.text }} </div>
                      </div> 
                  </div>
              </div>
          </div>
          <div class="f-bottom">
              <div class="f-bottom-left">
                  <div class="f-bottom-left-title">电子通讯</div>
                  <div class="f-bottom-left-text">立即订阅，掌握MKBK最新动态资讯</div>
                  <div class="f-bottom-left-search">
                      <input class="f-bottom-left-search-text" type="text" placeholder="    请输入您的邮箱" name="" id="" value="" />
                      <input class="f-bottom-left-search-btn" type="button" value="提交" @click="Submit()" />
                  </div>
              </div>
              <div class="f-bottom-mid">
                  <ul>
                      <a href=""><li>联系</li></a>
                      <a href=""><li>配送及退换货</li></a>
                      <a href=""><li>常见问题</li></a>
                      <a href=""><li>一般销售条件</li></a>
                      <a href=""><li>使用条款</li></a>
                      <a href=""><li>数据保护章程</li></a>
                      <a href=""><li>关于我们</li></a>
                  </ul>
              </div>
              <div class="f-bottom-right">
                  <div class="f-bottom-right-title">
                      关注我们
                  </div>
                  <div class="f-bottom-right-content">
                      <div class="f-bottom-right-content-item" v-for="(AboutWe,index) in AboutWe" :key="index">
                          <div class="f-bottom-right-content-item-title"> {{ AboutWe.title }} </div>
                          <div class="f-bottom-right-content-item-img">
                            <img :src="AboutWe.img">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            objInArr: [
                    {
                    img: require('@/assets/送货.png'),
                    title: "免费配送",
                    text:"所有订单均享免费顺丰速递"
                    },
                    {
                    img: require('@/assets/退货.png'),
                    title: "7天无理由退货",
                    text:"非定制商品订单自签收日起7天内可享无理由退货"
                    },
                    {
                    img: require('@/assets/包装.png'),
                    title: "艺术包装",
                    text:"您的订单将尊享MKBK艺术包装并随附个性化定制祝福"
                    },
                    
                ],
            AboutWe:[
                {
                    img:require('@/assets/text.png'),
                    title:"品牌最新资讯"
                },
                {
                    img:require('@/assets/Weibo.png'),
                    title:"时装精选资讯"
                },
                {
                    img:require('@/assets/Web.png'),
                    title:"球鞋精选资讯"
                },
                {
                    img:require('@/assets/Wechat.png'),
                    title:"关于我们"
                }
            ],
        }
    },
    methods:{
        Submit(){
            setTimeout(() => {
                alert("提交成功")
            },2000)
           
        }
    }

}
</script>

<style scoped>

.footer{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
.f-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    height: 55%;
}
.f-top-nav{
    width: 100%;
    height: 25%;
}
.f-top-text{
    width: 100%;
    height: 25%;
    color:#fff;
    text-align: center;
    line-height: 170px;
    font-size: 32px;
    letter-spacing:2px;/*字间距*/
    
}
.f-top-bottom{
    width: 100%;
    height: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.f-top-bottom-item{
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ftbi-item{
    height: 80%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.ftbi-item-img img{
    width: 36px;
    height: 36px;
}
.ftbi-item-title{
    font-size: 15px;
    font-weight:bold;
    color: #fff;
}
.ftbi-item-text{
    text-align: center;
    font-size: 15px;
    color: #fff;
}
.f-bottom{
    display: flex;
    justify-content: space-around;
    height: 45%;
}
.f-bottom-left{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.f-bottom-left-title{
    width: 100%;
    height: 10%;
    font-size: 15px;
    line-height: 36px;
    text-align: center;
    background-color: #fff;
}
.f-bottom-left-text{
    width: 100%;
    height: 10%;
    font-size: 12px;
    line-height: 36px;
    text-align: center;
    color: #757575;

}
.f-bottom-left-search{
    width: 99%;
    height: 15%;
    border-radius: 50px;
    border: 1px solid #000;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}
.f-bottom-left-search-text{
     width: 80%;
    height: 100%;
}
.f-bottom-left-search-btn{
    width: 19%;
    height: 100%;
    background-color: #adadad;
    font-size: 12px;
    color: #fff;
}
.f-bottom-mid{
    width: 25%;
    height: 100%;
}
.f-bottom-mid a{
    color: #000;
}
.f-bottom-mid a :hover{
    font-weight: bold;
}
.f-bottom-mid ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
}
.f-bottom-mid li{
    margin-top: 25px;
    text-decoration:underline
}

.f-bottom-right{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.f-bottom-right-title{
    width: 100%;
    height: 10%;
    font-size: 15px;
    display: flex;
    align-items:center;
    justify-content: center;
}
.f-bottom-right-content{
    width: 80%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.f-bottom-right-content-item{
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.f-bottom-right-content-item-title{
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #adadad;
    font-size: 12px;

}
.f-bottom-right-content-item-img{
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.f-bottom-right-content-item-img img{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
