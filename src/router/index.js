import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
/*import HomeView from '../views/HomeView.vue'*/
import MagazineView from '../views/magazine.vue'
import PanopticonView from '../views/panopticon.vue'
import AboutView from '../views/about.vue'
import WelcomeView from '../views/welcome.vue'
import ContactView from '../views/contact.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/magazine',
      name: 'magazine',
      component: MagazineView
    },
    {
      path: '/panopticon',
      name: 'panopticon',
      component: PanopticonView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
