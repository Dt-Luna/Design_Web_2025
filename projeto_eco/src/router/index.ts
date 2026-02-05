import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Cadastro from '@/views/Cadastro.vue'
import QuemSomos from '@/views/QuemSomos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/cadastro', component: Cadastro},
        {path: '/quemsomos', component: QuemSomos},
    ],
})

export default router
