import Vue from 'vue';
import Vuex from 'vuex';

import userForm from '@/store/modules/userForm.js';
import userList from '@/store/modules/userList.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userForm,
    userList,
  },
  strict: process.env.NODE_ENV !== 'production',
});
