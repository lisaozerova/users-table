<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Company</th>
        <th>Specialization</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in allUsers" v-bind:key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.company.name }}</td>
        <td>{{ user.company.bs }}</td>
      </tr>
      <tr class="users-total">
        <td>Users total:</td>
        <td colspan="3">{{ usersAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserList',
  computed: mapGetters(['allUsers', 'usersAmount']),
  methods: mapActions(['fetchUsers']),
  async mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  overflow: hidden;
  text-align: left;
  width: 1200px;
}

th,
td {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px 30px;
}

th {
  text-align: left;
}

thead th {
  background-color: #55608f;
}

tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

tbody td {
  position: relative;
}

tbody td:hover::before {
  background-color: rgba(255, 255, 255, 0.2);
  bottom: -9999px;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: -9999px;
  z-index: -1;
}

.users-total {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
