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
    updateField(state, payload) {
      const field = Object.keys(payload)[0];
      state[field] = payload[field];
    },
  },
  getters: {
    fields: state => state,
  },
};
