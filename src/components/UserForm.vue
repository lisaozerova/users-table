<template>
  <form v-on:submit.prevent="submit">
    <div class="container">
      <input type="text" placeholder="Name, required" v-model="name">
      <input type="text" placeholder="Username, required" v-model="username">
      <input type="text" placeholder="Company, required" v-model="companyName">
      <input type="text" placeholder="Specialization, required" v-model="specialization">
    </div>

    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'UserForm',
  computed: {
    ...mapGetters(['fields']),

    name: {
      get() {
        return this.fields.name;
      },
      set(value) {
        this.updateField({ name: value });
      }
    },
    username: {
      get() {
        return this.fields.username;
      },
      set(value) {
        this.updateField({ username: value });
      }
    },
    companyName: {
      get() {
        return this.fields.companyName;
      },
      set(value) {
        this.updateField({ companyName: value });
      }
    },
    specialization: {
      get() {
        return this.fields.specialization;
      },
      set(value) {
        this.updateField({ specialization: value });
      }
    },
  },
  methods: {
    ...mapMutations([
      'addUser',
      'resetForm',
      'updateField',
    ]),

    validate() {
      return Object.values(this.fields).every(field => field.trim() !== '');
    },

    submit() {
      if (!this.validate()) {
        return;
      }

      this.addUser({
        id: Date.now(),
        name: this.fields.name,
        username: this.fields.username,
        company: {
          name: this.fields.companyName,
          bs: this.fields.specialization,
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
