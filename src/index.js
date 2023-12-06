import './style.scss';

import * as bootstrap from 'bootstrap';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Home from './pages/Home.vue';
import Clicker from './pages/Clicker.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
 {path: '/', component: Home},
 {path: '/todo', component: ToDo},
 {path: '/clicker', component: Clicker},
 {path: '/rickandmorty', component: RickAndMorty},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');