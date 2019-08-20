/* eslint-disable */
import { userService } from  '../services/authservice';
import { toast } from '../helpers/toaster';
import router from '../router';

const user = JSON.parse(localStorage.getItem('app_token'));
const state = user
  ? { status: { loggedIn: false }, user }
  : { status: {}, user: null };



const actions = {
  register({ dispatch, commit }, user) {
    commit('registerRequest', user);
    userService.register(user).then(res => {
      if (res.status === 200) {
        commit('registerSuccess', res.data.user);
        router.push('/login');
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('registerFailure', res);
        toast(res.data.error, 'error');
      }
    })

  },
  login({ dispatch, commit }, user) {
    commit('loginRequest', user);
    userService.login(user).then(res => {
      if (res.status === 200) {
        commit('loginSuccess', res.data.user);
        const {stsTokenManager} = res.data.user;
        localStorage.setItem('app_token', JSON.stringify(stsTokenManager.accessToken));
        router.push('/');
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('loginFailure', res);
        toast(res.data.error, 'error');
      }
    })
  },
  logout({dispatch, commit}) {
    commit('logoutRequest', null);
    userService.logout().then(res => {
      if (res.status === 200) {
        commit('logoutSuccess', res.data.user);
        localStorage.removeItem('app_token')
        router.push('/login');
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('logoutFailure', res);
        toast(res.data.error, 'error');
      }
    })
  }
}

const mutations = {
  registerRequest(state, user) {
    state.status = { registering: true };
  },
  registerSuccess(state, user) {
    state.status = {};
  },
  registerFailure(state, error) {
    state.status = {};
  },
  loginRequest(state, user) {
    state.status = { loggingIn: false };
    state.user = user;
  },
  loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
  },
  loginFailure(state) {
      state.status = {};
      state.user = null;
  },
  logoutRequest(state, user) {
    state.user = user;
  },
  logoutSuccess(state, user) {
      state.status = { loggedIn: false };
      state.user = null;
  },
  logoutFailure(state) {
      state.status = {};
      state.user = null;
  },
}

export const auth  = {
  namespaced: true,
  state,
  actions,
  mutations,
}
