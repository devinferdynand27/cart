<template>
  
  <header class="bg-white-500 shadow" style="width: 100% ">
    <div class="container mx-auto px-4 py-8 flex items-center">
      <!-- logo -->
      <div class="mr-auto md:w-48 flex-shrink-0">
        <img
          class="h-8 md:h-10"
          src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
          alt=""
        />
      </div>
      <!-- phone number -->

      <!-- buttons -->
      <nav class="contents">
        <ul class="ml-4 xl:w-48 flex items-center justify-end">
          <li class="ml-2 lg:ml-4 relative inline-block"  v-if="isAuthenticated">
           <router-link to="/cart" v-if="cart.cart_items != undefined">
              <div  style="background: orange;"
                class="absolute -top-1 text-white right-0 z-10 text-xs font-bold px-1 py-0.5 rounded-sm"
              >
              {{ cart.cart_items.data.length }}
              </div>
              <svg
                class="h-9 lg:h-10 p-2 text-gray-500"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                ></path>
              </svg>
            </router-link>
          </li>
          <li   v-if="isAuthenticated != true"
             style="background: orange;" class="ml-2 lg:ml-4 relative inline-block text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             v-on:click="login" >
              Login
          </li>
          <li class="ml-2 lg:ml-4 relative inline-block">
            <router-link
              to="/register"
              v-if="isAuthenticated != true"  style="background: orange;"
              class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </router-link>
          </li>

          &nbsp;&nbsp;
         
          <div v-if=" isAuthenticated && userdata.user != undefined">
            {{ userdata.user.name }}
           </div>
           &nbsp;&nbsp;
          <img v-if="isAuthenticated"
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          class="rounded-full"
          style="height: 45px; width: 45px"
          alt=""
          loading="lazy" />
   
          <li class="ml-2 lg:ml-4 relative inline-block">
            <button
              v-on:click="_logout()"
              v-if="isAuthenticated"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </li>
          
        </ul>

      </nav>
    </div>

    <hr />
  </header>       
           <div v-if="cart.shops != undefined">
               <div v-for="y in cart.shops.data" :key="y.id">
                {{ y.name }}
               </div>
           </div>
</template>
<script>
import { mapActions, mapGetters,mapState } from "vuex";
export default {
  props:['slug'],
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState('auth',['userdata']),
    ...mapState('cart',['cart'])
  },
  mounted(){
    this.$store.dispatch("cart/getcartdata");
  },
  methods: {
    ...mapActions('auth',['getusertoken']),
    ...mapActions("auth", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("/login");  
    },
    login() {
      this.$router.push("/login");
    },
  },
  created() {
       this.getusertoken(localStorage.token)
  },
};
</script>
