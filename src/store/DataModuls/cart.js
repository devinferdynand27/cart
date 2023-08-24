import axios from "axios";
export default {
    namespaced: true,
    state: {
        cart: [],
    },
    getters: {
        getcart: state => state.cart
    },
    actions: {
        async getcartdata({commit}) {
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                { Devin: "ganteng"},
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) 
                commit('SET_KERANJANG_GET', response.data);
            } catch (error) {
                alert('eror api cart')
            }
        },

        async addtocart({commit}, data) {
            try {
                const response = axios.post('https://ecommerce.olipiskandar.com/api/v1/carts/add',
                {
                    'variation_id' : data.variation_id,
                    'qty' : data.qty,
                },
                {
                   headers:{
                       Authorization: `Bearer ${localStorage.getItem('token')}`
                   },
               })
                alert('berhasil')
            } catch (error) {
                alert('api addcart eror')
            }finally{
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                { Devin: "ganteng"},
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) 
                commit('SET_KERANJANG_GET', response.data);
            }
        },

    },
    mutations: {
        SET_KERANJANG_GET(state, cart){
            state.cart = cart;
        },
    }
}