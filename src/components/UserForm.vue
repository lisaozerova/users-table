<template>
  <form v-on:submit.prevent="submit">
    <div class="container">
      <input type="text" placeholder="Name, required" v-model="name">
      <input type="text" placeholder="Username, required" v-model="username">
      <input type="text" placeholder="Company, required" v-model="company.name">
      <input type="text" placeholder="Specialization, required" v-model="company.bs">
    </div>

    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      username: '',
      company: {
        bs: '',
        name: '',
      },
    }
  },
  methods: {
    ...mapMutations(['addUser']),

    validate() {
      return this.name && this.username && this.company.name && this.company.bs;
    },

    submit() {
      if (!this.validate()) {
        return;
      }

      this.addUser({
        id: Date.now(),
        name: this.name,
        username: this.username,
        company: {
          name: this.company.name,
          bs: this.company.bs,
        },
      });

      this.name = '';
      this.username = '';
      this.company.name = '';
      this.company.bs = '';
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
}

input {
  border: 0;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 300px;
}

button {
  background-color: #55608f;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
