import Vue from 'vue';
import Vuex from 'vuex';

import userList from './modules/userList.js';
import userForm from './modules/userForm.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userForm,
    userList,
  },
});
