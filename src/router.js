import Vue from "vue"
import VueRouter from "vue-router"

import Formulario from './components/Formulario.vue'
import HttpClient from "./components/HttpClient.vue"
Vue.use(VueRouter)

export const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/formulario",component: Formulario},
        {path:"/httpclient",component: HttpClient},
    ]
})