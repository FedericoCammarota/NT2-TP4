<template>
 <div class="container-fluid mt-3">
   <div class="jumbotron">
     <h1>Vue CLI - Router / Formularios</h1>
     <hr>

      <navbar/>
     <!--  <formulario/> -->
     <router-view></router-view>

   </div>
 </div>
</template>

<script>
/* import formulario from './components/Formulario.vue' */
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
   /*  formulario, */
    Navbar
  }
}
</script>

<style>
h1{
  color: rgb(12, 11, 11);
}
</style>
