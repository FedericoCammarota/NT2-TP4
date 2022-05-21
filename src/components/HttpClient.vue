<template>
  <section class="src-components-http-client">
    <div class="jumbotron">
      <h2>Componente HttpClient</h2>
      <hr />
      <hr />
      <button class="btn btn-info my-3 mr-3" @click="getPostsXHRcb()">XHR(cb)</button>
      <button class="btn btn-info my-3 mr-3" @click="getPostsXHRpromise()">XHR(promise)</button>
      <button class="btn btn-info my-3 mr-3" @click="getPostsFetch()">Fetch</button>
      <button class="btn btn-info my-3 mr-3" @click="getPostsAxios()">Axios</button>
      <button class="btn btn-danger my-3" @click="posts = []">CLEAR</button>
      <br />
   

    <div v-if="posts.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{post.id}}</td>
          <td>{{post.Nombre}}</td>
          <td>{{post.Email}}</td>
          <td>{{post.Telefono}}</td>
        </tr>
      </table>
      <h4 class="alert alert-success text-center">Se encontraron {{posts.length}} posts</h4>
    </div>
    <div v-else class="alert alert-warning text-center">No se encontraron post</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-http-client",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://6289095c7af826e39e6800fe.mockapi.io/posts",
      posts: [],
    };
  },
  methods: {
    getPostsXHRcb() {
      const xhr = new XMLHttpRequest();
      xhr.open("get", this.url);

      xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
          let respuesta = JSON.parse(xhr.response);
          //console.log(respuesta)
          this.posts = respuesta;
        } else {
          console.error("ERROR XHR cb (status)", xhr.status);
        }
      });

      xhr.addEventListener("error", (e) => {
        console.error("ERROR XHR cb (ajax)", e);
      });

      xhr.send();
    },
     wrapperXHRpromise(){
       return new Promise((resolve,reject) => {
         
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)             
              resolve(respuesta)
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
              let error = {
                title: 'ERROR XHR cb (status)',
                status: xhr.status
              }
              reject(error)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
              let error = {
                title: 'ERROR XHR cb (ajax)',
                info: e
              }
              reject(error)
          })

          xhr.send()
        })
     },
     async getPostsXHRpromise(){
       try {
            let respuesta = await this.wrapperXHRpromise()
            //console.log(respuesta)
            this.posts = respuesta
          }
          catch(error) {
            console.error('Error XHRpromise', error)
          }
     },
     async getPostsFetch(){
        try {
          let response = await fetch(this.url)
          //console.log(response)
          let respuesta = await response.json()
          this.posts = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
     },
     async getPostsAxios(){
         try {
          let { data } = await this.axios(this.url)
          this.posts = data
        }
        catch(error) {
          console.error('Error Axios', error)
        }   
     },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-http-client {
}
.jumbotron{
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+17,52b152+33,008a00+67,005700+83,002400+100;Green+3D+%231 */
background: #a7cfdf; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #a7cfdf 0%, #23538a 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #a7cfdf 0%,#23538a 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #a7cfdf 0%,#23538a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
color: white;
}
</style>
  