

const state = () => ({
  userInfo: {
    name: 'yma16',
    platform: 'front'
  },
  count: 0,
});
const getters = {
  userInfo: (state) => {
    return state.userInfo;
  },
  getCount: (state) => {
    return state.count
  }
};

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
  addCount(state) {
    state.count += 1
  }
}

const actions = {
  setUserInfoAction({ commit, state }, payload) {
    commit("setUserInfo", payload);
  },
  setAddCountAction({ commit, state }) {
    commit("addCount");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
