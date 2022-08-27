<template>
<div>
    <div id="box"></div>
    <Nav></Nav>
    <div class="all-product">
      <Product v-for="item in List" :key="item.id" :info="item"></Product>
    </div>
</div>
</template>

<script>
import Product from '../components/Product'
import Nav from '../components/Nav'
import axios from "axios";
export default {
    components:{
        Nav,Product
    },
    data(){
        return{
            List:[]
        };
    },
    methods:{
        getData(){
            axios.get("/api/products").then((res)=>{
                this.List = res.data;
            });
        }
    },
    created(){
        this.getData();
    }

}
</script>

<style scoped>
#box{
    height: 120px;
    width: 100%;
    background-color: rgb(182, 182, 182);
    border-bottom:1px solid rgb(167, 167, 167);
}
.all-product{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
}
</style>