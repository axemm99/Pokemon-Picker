<template>
    <div class="home">
      <br>
      <AdoptionForm msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AdoptionForm from '@/components/AdoptionForm.vue'
  
  export default {
    name: 'RegisterAdoption',
    components: {
        AdoptionForm
    }
  }
  </script>
  