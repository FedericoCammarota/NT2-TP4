<template>
  <section class="src-components-formulario">
     <div class="jumbotron">
      <h2>Componente Formulario</h2>
      <hr>
      <hr>
      <br>
    <vue-form :state="formState" @submit.prevent="enviar()">
     <!--  NOMBRE -->
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          class="form-control"
          type="text"
          v-model.trim="formData.nombre"
          name="nombre"
          autocomplete="off"
          required
          :minlength = minCaracteres
          :maxlength = maxCaracteres
        />

        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger">Nombre es requerido</div>
          <div slot="minlength" class="alert alert-danger">Caracteres minimos {{minCaracteres}}</div> 

        </field-messages>
      </validate>
      <br />
     <!--  APELLIDO -->

      <validate tag="div">
        <label for="edad">Edad</label>
        <input
          id="edad"
          class="form-control"
          type="number"
          autocomplete="off"
          name="edad"
          v-model.number="formData.edad"
          required
          :min= "minEdad"
          :max= "maxEdad"
        />

        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Edad es requerido</div>
          <div slot="min" class="alert alert-danger mt-1">La edad tiene que ser mayor o igual {{minEdad}}</div>
          <div slot="max" class="alert alert-danger mt-1">La edad tiene que ser menor o igual {{maxEdad}}</div>         
        </field-messages>
        
      </validate>
      <br />
     <!--  EMAIL -->

      <validate tag="div">
        <label for="email">email</label>
        <input
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
        />

        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">email es requerido</div>
          <div slot="email" class="alert alert-danger mt-1">Email no válido</div>        
        </field-messages>
      </validate>

      <button
        class="btn btn-info my-3" :disabled="formState.$invalid" type="submit">Enviar
      </button>      
    </vue-form>
    
    <h4 v-if="!inscriptos.length" class="alert alert-warning text-center">No se encontraron inscriptos</h4>  

      <div v-show="inscriptos.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>index</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Borrar</th>
          </tr>
          <tr v-for="(inscripto,index) in inscriptos" :key="index">
              <td>{{index+1}}</td>
              <td>{{inscripto.nombre}}</td>
              <td>{{inscripto.edad}}</td>
              <td>{{inscripto.email}}</td>
              <td><div class="button btn btn-danger text-center" @click=borrarInscripto()>Borrar</div></td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: "src-components-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      inscriptos:[],
      minEdad:18,
      maxEdad:120,
      minCaracteres:3,
      maxCaracteres:15,
    };
  },
  methods: {
    getInicialData() {
      return {
          nombre: '',
          edad: '',
          email: '',
      };
    },
    enviar() {
      const inscripto = {
        nombre: this.formData.nombre,
        edad: this.formData.edad,
        email: this.formData.email,
      }
      this.inscriptos.push(inscripto)
      this.formData = this.getInicialData();
      this.formState._reset();
    },
    borrarInscripto(index){
      this.inscriptos.splice(index,1)
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-formulario {
}

.jumbotron{
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a7cfdf+0,23538a+100;Blue+3d+%238 */
background: #a7cfdf; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #a7cfdf 0%, #23538a 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #a7cfdf 0%,#23538a 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #a7cfdf 0%,#23538a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
color: white;
}

</style>
