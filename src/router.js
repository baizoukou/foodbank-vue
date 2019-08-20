import VueRouter from 'vue-router';
import FoodBankList from './components/FoodBankList';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import { checkAuth } from './helpers/auth';


const router = new VueRouter({
  routes: [
    { path: '/', component: FoodBankList },
    { path: '/register', component: Register},
    { path: '/login', component: Login},
    {
      path: '*',
      component: { template: '<h3 style="margin: 6rem">Not Found!</h3>' }
    }
  ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = checkAuth();
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router;
