import Dashboard from '@/views/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EssayDetail from '../components/EssayDetail.vue'
import EssayUploader from '../components/EssayUploader.vue'
import Login from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/upload', name: 'Upload', component: EssayUploader },
  { path: '/essay/:id', name: 'EssayDetail', component: EssayDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
