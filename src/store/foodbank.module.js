 /* eslint-disable */
import { foodbankService } from  '../services/foodbankService';
import { toast } from '../helpers/toaster';
import { deleteFoodbank, updateFoodBank, updateVoteCount } from '../helpers/updateProps';

const state = {
  data: [],
  newFoodbank: {},
  success: false,
  error: false,
  loading: false,
}

const actions = {
  getAllFoodBank({ dispatch, commit }) {
    commit('getAllRequest', [])
    foodbankService.getFoodBank().then(res => {
      if (res.status === 200) {
        commit('getAllSuccess', res.data.foodbank)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('getAllFailure', res);
        toast(res.data.error, 'error');
      }
    })
  },
  filterFoodbank({ dispatch, commit }, filter) {
    commit('filterRequest', []);
    foodbankService.filterFoodbank(filter).then(res => {
      if (res.status === 200) {
        commit('filterSuccess', res.data.foodbank)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('filterFailure', res);
        toast(res.data.error, 'error');
      }
    })
  },

  createFoodbank({dispatch, commit}, foodbank) {
    commit('createRequest', foodbank)
    foodbankService.createFoodBank(foodbank).then(res => {
      if (res.status === 200) {
        commit('createSuccess', res.data.data)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('createFailure', res.data.errmsg);
        toast(res.data.errmsg, 'error');
      }
    });
  },
  updateFoodbank({dispatch, commit}, foodbank) {
    commit('updateRequest', foodbank)
    foodbankService.updateFoodbank(foodbank).then(res => {
      if (res.status === 200) {
        commit('updateSuccess', res.data.foodbank)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('updateFailure', res.data.errmsg);
        toast(res.data.errmsg, 'error');
      }
    });
  },
  deleteFoodbank({dispatch, commit}, foodbankId) {
    commit('deleteRequest', foodbank)
    foodbankService.deleteFoodbank(foodbankId).then(res => {
      if (res.status === 200) {
        commit('deleteSuccess', foodbankId)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('deleteFailure', res.data.errmsg);
        toast(res.data.errmsg, 'error');
      }
    });
  },
  voteFoodbank({dispatch, commit}, foodbank) {
    commit('voteRequest', foodbank)
    foodbankService.voteFoodbank(foodbank).then(res => {
      if (res.status === 200) {
        commit('voteSuccess', foodbank._id)
        setTimeout(() => {
          toast(res.data.message, 'success');
        })
      } else {
        commit('voteFailure', res.data.errmsg);
        toast(res.data.errmsg, 'error');
      }
    });
  }
}

const mutations = {
  getAllRequest(state, foodbank) {
    state.loading = true
  },
  getAllSuccess(state, foodbank) {
    state.loading = false;
    state.data = [...foodbank];
    state.success = true;
  },
  getAllFailure(state, error) {
    state.loading = false;
    state.error = true;
  },
  filterRequest(state, foodbank) {
    state.loading = true
  },
  filterSuccess(state, foodbank) {
    state.loading = false;
    state.data = [...foodbank];
    state.success = true;
  },
  filterFailure(state, error) {
    state.loading = false;
    state.error = true;
  },
  createRequest(state, foodbank) {
    state.loading = true
  },
  createSuccess(state, foodbank) {
    state.loading = false;
    state.data = [foodbank, ...state.data]
    state.success = true;
  },
  createFailure(state, error) {
    state.loading = false;
    state.error = true;
  },
  updateRequest(state, foodbank) {
    state.loading = true
  },
  updateSuccess(state, foodbank) {
    state.loading = false;
    state.data = updateFoodBank(foodbank._id, state.data, foodbank)
    state.success = true;
  },
  updateFailure(state, error) {
    state.loading = false;
    state.error = true;
  },
  deleteRequest(state, foodbank) {
    state.loading = true
  },
  deleteSuccess(state, foodbankId) {
    state.loading = false;
    state.data = deleteFoodbank(foodbankId, state.data)
    state.success = true;
  },
  deleteFailure(state, error) {
    state.loading = false;
    state.error = true;
  },
  voteRequest(state, foodbank) {
    state.loading = true
  },
  voteSuccess(state, foodbankId) {
    state.loading = false;
    state.data = updateVoteCount(foodbankId, state.data)
    state.success = true;
  },
  voteFailure(state, error) {
    state.loading = false;
    state.error = true;
  }
}

export const foodbank = {
  namespaced: true,
  state,
  actions,
  mutations
}