export default {
  state: {
    users: [],
  },
  mutations: {
    addUser(state, newUser) {
      state.users.unshift(newUser);
    },
    updateUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      commit('updateUsers', users);
    },
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
