<template>
        <div v-if=" isAuthenticated && userdata.user != undefined">
            {{ userdata.user.name }}
           </div>
           <div v-else>
             tidak ada
           </div>
       


</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  methods:{
        ...mapActions('auth',['getusertoken']),
        
    },
    computed:{
        ...mapState('auth',['userdata']),
        ...mapGetters('auth',['isAuthenticated']),
       
    },
    created() {
       this.getusertoken(localStorage.token)
    },

}
</script>