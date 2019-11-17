import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import CourseListView from './components/CourseListView.vue'

Vue.config.productionTip = false

//Vue.component('CourseList', CourseListView);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
