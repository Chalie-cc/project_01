<template>
  <div>
      <div id="box"></div>
      <Nav></Nav>
      <div class="container">
		<h2 class="title">购物车</h2>
		<table class="tab" width="100%" border="0" cellspacing="0" cellpadding="0">
			<thead>
				<tr>
					<th colspan="2">商品信息</th>
					<th style="width: 14%;">商品金额</th>
					<th style="width: 14%;">商品数量</th>
					<th style="width: 14%;">总金额</th>
					<th>编辑</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in productList" :key="index">
					<td style="width: 5%;"><input type="checkbox" :checked="item.check" @click="checkBox(item)"/></td>
					<td class="goods">
						<img :src="item.image" class="goods-left"/>
						<div class="goods-right">
							<p style="margin-top:40px;">{{item.name}}</p>
							<p class="tip" style="margin-bottom:40px;">{{item.text}}</p>
						</div>
					</td>
					<td>{{item.price | formatMoney}}</td>
					<td class="num">
						<a href="javascript:;" @click="changeMoney(item,-1)">-</a>&nbsp;&nbsp;
						<input type="text" v-model="item.quentity" disabled />&nbsp;&nbsp;
						<a href="javascript:;" @click="changeMoney(item,1)">+</a>
					</td>
					<td class="redcolor">{{item.price*item.quentity | formatMoney}}</td>
					<td class="del" @click="del(item);">删除</td>
				</tr>
			</tbody>
			<tfoot>
				<tr class="footer">
					<td><input type="checkbox" :checked="checkAllFlag" @click="checkAll"/></td>
					<td>
						<span class="redcolor">全选</span>&nbsp;&nbsp;
					</td>
					<td colspan="4">
						总计：<span>{{totalMoney | formatMoney}}</span>元
						<button type="button" class="btn" @click="Submit">结账</button>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
    components:{
        Nav
    },
    data(){
		return{
			totalMoney:0,
			// productList:[],
            productList:[
			],

            checkAllFlag:false
		}
    },

    filters:{
		formatMoney: function (value) {
			return "￥ "+value.toFixed(2);
		}
	},
	created(){
		this.onload();
	},
	methods:{
		Submit(){
			this.productList = [];
            setTimeout(() => {
                alert("交易成功")
            },200)
           
        },

		onload(){
			this.productList = this.$store.state.cartList
			console.log(this.$store.state.cartList)
		},
		changeMoney:function (product,way) {
			if (way>0) {
				product.quentity++;
			}else{
				product.quentity--;
				if (product.quentity<1) {
					product.quentity=1;
				}
			}
			this.getTotalMoney();
		},
		//单选框设置
		checkBox:function (item){
			var _this=this;
			var num=0;
			if (typeof item.check == "undefined") {
				this.$set(item,"check",true);
			}else{
				item.check = !item.check;
			}
			this.productList.forEach(function (item,value) {
				if (item.check) {
					num++;
				}
			})
			if (num==_this.productList.length) {
				this.checkAllFlag=true;
			}else{
				this.checkAllFlag=false;
			}
			this.getTotalMoney();
		},
		//全选按钮设置
		checkAll:function (){
			var _this=this;
			this.checkAllFlag = !this.checkAllFlag;
			this.productList.forEach(function(item,index){
				if (typeof item.check == "undefined") {
					_this.$set(item,"check",_this.checkAllFlag);
				}else{
					item.check = _this.checkAllFlag;
				}
			})
			this.getTotalMoney();
		},
		//总金额设置
		getTotalMoney:function () {
			var _this=this;
			this.totalMoney = 0;
			this.productList.forEach(function (item,index) {
				if (item.check) {
					_this.totalMoney += item.quentity*item.price;
				}
			})
		},
		//删除商品
		del: function (item) {
			var index=this.productList.indexOf(item);
			this.productList.splice(index,1);
			this.getTotalMoney();
		}
	}
}
</script>


<style scoped>
#box{
    height: 120px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    border-bottom:1px solid rgb(167, 167, 167);
}
*{
	padding: 0;
	margin: 0;
}
.container{
	padding: 20px;
}
.redcolor{
	color: black;
}
.title{
	text-align: center;
	position: relative;
	font-weight: normal;
	margin-bottom: 30px;
	color: #666;
}
.title:after,.title:before{
	content: '';
	position: absolute;
	top: 50%;
	width: 45%;
	background: #999;
	height: 1px;
}
.title:before{
	left: 0;
}
.title:after{
	right: 0;
}
.tab thead{
	background-color: #999;
	color: #fff;
}
.tab thead th{
	padding: 10px 0;
	font-weight: normal;
}
.tab td{
	text-align: center;
	padding: 10px 0;
}
.goods{
	width: 40%;
	position: relative;
}
.goods-left{
	width: 20%;
	float: left;
}
.goods-right {
	width: 78%;
	float: right;
	text-align: left;
}
.goods-right .tip{
	color: #999;
	position: absolute;
	bottom: 10px;
	font-size: 12px;
}
.num input{
	width: 50px;
	text-align: center;
}
.num a{
	color: #333;
	text-decoration: none;
}
.del{
	cursor: pointer;
}
.footer td{
	border-top: 1px solid #ddd;
}
.footer td:nth-child(2){
	text-align: left;
}
.footer td:nth-child(3){
	text-align: right;
}
.footer .btn{
	background-color: black;
	color: #fff;
	padding: 10px 40px;
	margin-left: 20px;
	border: 0;
}

</style>