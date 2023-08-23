import axios from "axios";
export default {
    namespaced: true,
    state: {
        products: [],
        getid: [],
        staus : 1
    },
    getters: {
        getProduct: state => state.products
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search")
                commit('SET_PRODUCT', dataProduct.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchProductById({ commit }, slug) {
            try {
                console.log(slug)
                const dataProduct = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`)
                commit('SET_PRODUCT_BY_ID', dataProduct.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_PRODUCT(state, products) {
            state.products = products
        },
        SET_PRODUCT_BY_ID(state, products) {
            state.getid = products
        }
    }
}