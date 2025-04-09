import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// Lazy loaded pages
const DashboardPage = defineAsyncComponent(() => import('./pages/DashboardPage.vue'))
const CarouselPage = defineAsyncComponent(() => import('./pages/CarouselPage.vue'))
const LazyPage = defineAsyncComponent(() => import('./pages/LazyPage.vue'))
const DelayedFormPage = defineAsyncComponent(() => import('./pages/DelayedFormPage.vue'))
const GalleryPage = defineAsyncComponent(() => import('./pages/GalleryPage.vue'))

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
