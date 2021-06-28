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
  state,
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
  getters: {
    fields(state) {
      return state;
    },
  },
};
