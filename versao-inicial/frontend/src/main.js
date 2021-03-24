import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Illnb3IgU2FsbGVzIiwiZW1haWwiOiJ5Z29yQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTY1NDMzMzMsImV4cCI6MTYxNjgwMjUzM30.3SAxcHeEfK_pWVBmZG2ESVfm1kRC6ErI-hcE25LQr1E'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')