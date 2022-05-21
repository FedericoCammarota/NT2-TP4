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
.jumbotron{
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a7cfdf+0,23538a+100;Blue+3d+%238 */
background: #a7cfdf; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #a7cfdf 0%, #23538a 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #a7cfdf 0%,#23538a 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #a7cfdf 0%,#23538a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
color: white;
}

h1{
 color: white;
}
</style>
