import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'typeface-roboto/index.css';
import 'typeface-open-sans/index.css';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
