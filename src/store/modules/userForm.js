const getDefaultState = () => {
  return {
    name: '',
    username: '',
    companyName: '',
    bs: '',
  }
};

const state = getDefaultState();

export default {
  mutations: {
    resetForm(state) {
      Object.assign(state, getDefaultState());
    },

    updateName(state, name) {
      state.name = name;
    },

    updateUsername(state, username) {
      state.username = username;
    },

    updateCompanyName(state, companyName) {
      state.companyName = companyName;
    },

    updateSpecialization(state, specialization) {
      state.bs = specialization;
    },
  },
  state,
  getters: {
    fields(state) {
      return state;
    },
  },
};
