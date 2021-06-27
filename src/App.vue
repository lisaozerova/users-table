<template>
  <div id="app">
    <h1>User List</h1>

    <UserForm />
    <UserList />
  </div>
</template>

<script>
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default {
  name: 'App',
  components: {
    UserForm,
    UserList,
  },
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
}

html,
body {
  height: 100%;
}

body {
  animation: gradient 15s ease infinite;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  text-align: center;
}

h1 {
  margin-top: 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
