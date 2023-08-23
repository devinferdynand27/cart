<template>
    <div>
        <ul v-for="brance in getBrance.data" :key="brance.id">
            <li>{{brance.name}}</li>
            <li></li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
        ...mapGetters('brance',['getBrance'])
    },
    mounted() {
       this.$store.dispatch("brance/fetchProduct")
   },

}
</script>