import axios from "axios";
export default {
    namespaced: true,
    state: {
        brance: [],
    },
    getters: {
        getBrance: state => state.brance
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataBrance = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_PRODUCT', dataBrance.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUCT(state, brance) {
            state.brance = brance
        },
    }
}