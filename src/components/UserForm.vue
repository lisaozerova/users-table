<template>
  <form v-on:submit.prevent="submit">
    <div class="container">
      <input type="text" placeholder="Name, required" v-model="name">
      <input type="text" placeholder="Username, required" v-model="username">
      <input type="text" placeholder="Company, required" v-model="companyName">
      <input type="text" placeholder="Specialization, required" v-model="bs">
    </div>

    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'UserForm',
  computed: {
    ...mapGetters(['fields', 'validate']),
    name: {
      get() {
        return this.fields.name;
      },
      set(value) {
        this.updateName(value);
      }
    },
    username: {
      get() {
        return this.fields.username;
      },
      set(value) {
        this.updateUsername(value);
      }
    },
    companyName: {
      get() {
        return this.fields.companyName;
      },
      set(value) {
        this.updateCompanyName(value);
      }
    },
    bs: {
      get() {
        return this.fields.bs;
      },
      set(value) {
        this.updateSpecialization(value);
      }
    },
  },
  methods: {
    ...mapActions(['resetForm']),
    ...mapMutations(['addUser', 'updateName', 'updateUsername', 'updateCompanyName', 'updateSpecialization']),

    submit() {
      if (!this.validate) {
        return;
      }

      this.addUser({
        id: Date.now(),
        name: this.fields.name,
        username: this.fields.username,
        company: {
          name: this.fields.companyName,
          bs: this.fields.bs,
        },
      });

      this.resetForm();
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
