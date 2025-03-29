import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import DashboardPage from './pages/DashboardPage.vue'
import CarouselPage from './pages/CarouselPage.vue'
import LazyPage from './pages/LazyPage.vue'
import DelayedFormPage from './pages/DelayedFormPage.vue'
import GalleryPage from './pages/GalleryPage.vue'

const routes = [
    { path: '/', component: DashboardPage },
    { path: '/carousel', component: CarouselPage },
    { path: '/lazy', component: LazyPage },
    { path: '/delay', component: DelayedFormPage },
    { path: '/gallery', component: GalleryPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .use(Antd)
    .mount('#app')
