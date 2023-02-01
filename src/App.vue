<template>
  <nav>
    <NewNavBar/>
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
  </nav>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import NewNavBar from '@/components/NewNavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NewNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
