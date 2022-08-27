import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    state:{
        cartList:[
            
        ],
    },

    getters:{},

    mutations:{
        add(state, product) {
            
            state.cartList.push({
             product, // 添加购物车商品数据
             num:1
            })
            }
            // console.log(state.cartList)
    },

    actions:{},
})

export default store