<template>
    <center>
        <ul class="y">
          <li v-on:click="produk"><a href="#" v-on:click="produk">Produk</a></li>
          <li  v-on:click="kategori"><a href="#"  v-on:click="kategori">Kategori</a></li>
          <li v-on:click="brans"><a href="#"  v-on:click="brans">Brans</a></li>
          <li class="ip mt-2"> <h2 style="color: orange;" class="text-2xl font-bold tracking-tight text-gray-900">Ecommarcet   </h2></li>
        </ul>
       </center>
</template>
<script>
  import { mapActions, mapGetters, mapState } from "vuex";
export default {
    methods:{
      produk(){
        this.$router.push('/');
      },
      kategori(){
        this.$router.push('/kategori');
      },
      brans(){
        this.$router.push('/brans');
      }
    },
    computed:{
      ...mapState('auth', ['status']),
      ...mapState('brance', ['status']),
      ...mapState('product', ['status']),
      ...mapState('kategori', ['status']),
    }
}
</script>
<style>
.y {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-left:20% ;
}

li {
  float: left;
}
.ip{
  float: right;
  padding-right:75px ;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */

</style>