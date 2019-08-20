import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { alert } from './alert.module';
import { foodbank } from './foodbank.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
      alert,
      auth,
      foodbank,
    }
});