import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  ModalPlugin,
  ButtonPlugin,
  FormPlugin,
  FormInputPlugin,
  FormGroupPlugin,
  FormSelectPlugin,
  TooltipPlugin,
} from 'bootstrap-vue'
import { store } from './store';
import router from './router';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
import App from './App.vue';
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormSelectPlugin)
Vue.use(TooltipPlugin)



new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
