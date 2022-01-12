<template>
  <div>
    <Login></Login>
    <Chat/>
  </div>


</template>

<script>
import Login from './Login.vue'
import Chat from './Chat.vue'
export default {
  name: "Pagina",
  components: {
    Login,
    Chat,
  },
  data (){

  },
  methods:{
    login(){
      if(this.name)
    }
  }

}
</script>

<style scoped>

</style>