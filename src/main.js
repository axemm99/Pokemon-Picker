import { createApp } from 'vue'
import HomePage from './App.vue'
import AdoptionForm from './components/AdoptionForm.vue'
import store from './store'
import router from './router'

createApp(HomePage).use(router).use(store).mount('#app')
createApp(AdoptionForm).use(router).use(store).mount('#AdoptionForm')
