<template>
  <div>
      <navbarcomponent></navbarcomponent>
      <br>
      <SubNavbarComponent ></SubNavbarComponent>
      <FooterComponent></FooterComponent>
      <router-view></router-view>
  </div>
</template>
<script>
import navbarcomponent from '@/components/NavbarComponent.vue';
import SubNavbarComponent from '@/components/SubNavbarComponent.vue';
import  FooterComponent  from '@/components/FooterComponent.vue';
export default {
  components:{
    navbarcomponent,
    FooterComponent,
    SubNavbarComponent
  }
}
</script>