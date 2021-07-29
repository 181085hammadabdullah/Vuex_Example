<template>
  <div id="app">
  <Header />
    <router-view/>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
export default {
  components:{
    Header
  }
}
</script>

<style lang="scss">


#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
