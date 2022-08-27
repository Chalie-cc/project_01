<template>
   <div>
        <div class="nav">
            <div class="nav-left">
                <div class="nav-left-menu">
                    <a><span @click="toggle()" class="icon iconfont icon-webicon03"></span></a>
                </div>
                <router-link to="/" class="nav-left-logo">
                    <img src="../assets/logo.png">
                </router-link>
            </div>
            <div class="nav-mid">
                <a href="#"><div class="nav-mid-search">搜索</div></a>
                <a href="#"><div class="nav-mid-search-box"></div></a>
                
            </div>
            <div class="nav-right">
                <span v-if="islogin==0?true:false"><router-link to="/login">登录</router-link></span>
                <span v-if="islogin==1?true:false"><router-link to="#">{{this.username}}</router-link></span>
                <span><a href="http://172.25.42.54:8081">管理员登陆</a></span>
                <span><router-link to="/cart" class="icon iconfont icon-gouwuche1"></router-link></span>
            </div>
        </div>

        <el-drawer
          :visible.sync="isShow"
          direction="ltr"
          :with-header="false"
          :size="size">
            <leftMenu></leftMenu>
        </el-drawer>
        

  </div>
</template>
<script>
import LeftMenu from './LeftMenu'

export default {
    components:{
        LeftMenu,
    },
    data(){
        return{
            isShow:false,
            // is login
            // false 显示 登录 true 登录 用户名
            username:window.sessionStorage.getItem('username'),
            islogin:sessionStorage.getItem('islogin')==1?1:0,
            size:'25%'
        }
    },
    methods:{
        toggle(){
            this.isShow = !this.isShow;
        }
    }
    

}

</script>


<style >
.nav{
    position: absolute;
    z-index: 10;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 300px;
}
.nav-left-menu{
    color: #ffffff;
    height: 18px;
    width: 18px;

}
.nav-left-logo img{
    height: 90px;
    width: 210px;
}
.nav-mid{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 120px;
    width: 350px;
}
.nav-mid-search{
    font-size: 24px;
    color: #ffffff;

}
.nav-mid-search-box{
    height: 30px;
    width: 150px;
    border-bottom: 1px solid #FFFFFf;
}
.nav-right{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 200px;
    color: inherit;
    font-size: 12px;
}
.nav-right a{
    color: #fff;
}
a{
    color: #ffffff;
}
</style>