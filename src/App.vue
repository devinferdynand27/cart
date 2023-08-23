<template>
  <div>
      <NavbarComponent></NavbarComponent>
      <br>
      <SubNavbarComponent></SubNavbarComponent>
      <router-view></router-view>
      <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import NavbarComponent from './components/navbarcomponent.vue';
import SubNavbarComponent from './components/SubNavbarComponent.vue';
import  FooterComponent  from './components/FooterComponent.vue';
export default {
  components:{
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent
  }
}
</script>