export default {
  actions: {
    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      commit('updateUsers', users);
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    addUser(state, newUser) {
      state.users.unshift(newUser);
    },
  },
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    usersAmount(_, getters) {
      return getters.allUsers.length;
    },
  },
};
