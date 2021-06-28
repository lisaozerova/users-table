const getDefaultState = () => {
  return {
    name: '',
    username: '',
    companyName: '',
    specialization: '',
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
      state.specialization = specialization;
    },
  },
  state,
  getters: {
    fields(state) {
      return state;
    },
  },
};
