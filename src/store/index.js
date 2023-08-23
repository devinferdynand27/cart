import { createStore } from "vuex";
import auth from './DataModuls/auth'
import product from './DataModuls/product'
import brance from './DataModuls/brance'
import kategori from "./DataModuls/kategori";

const store = createStore({
      modules: {
          auth,
          product,
          brance,
          kategori,
      },
})
export default store