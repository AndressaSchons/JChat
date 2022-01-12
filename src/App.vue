<template>
  <div id="app">
    <Chat />
  </div>
</template>

<script>
//import Pagina from './components/Pagina.vue'
import Chat from "./components/Chat.vue";

export default {
  name: 'App',
  components: {
    Chat,

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
