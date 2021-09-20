import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/config'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({ name: 'Welcome' })
    }
    next()
}

const requireNoAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({ name: 'Welcome' })
    }
    next({ name: 'Chatroom' })
}

const routes = [
    { path: '/chat', name: 'Chatroom', component: Chatroom, beforeEnter: requireAuth },
    { path: '/', name: 'Welcome', component: Welcome, beforeEnter: requireNoAuth },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Welcome, beforeEnter: requireNoAuth },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
