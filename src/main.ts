import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import RecetteComponent from './CourseFeatures/Component/RecetteComponent.vue';
import CourseRawComponent from './CourseFeatures/Component/CourseRawComponent.vue';
import RecetteRawComponent from './CourseFeatures/Component/RecetteRawComponent.vue';


import RecetteListView from './CourseFeatures/View/RecetteListView.vue';
import CourseListView from './CourseFeatures/View/CourseListView.vue'


Vue.config.productionTip = false

Vue.component('CourseRaw', CourseRawComponent);
Vue.component('CourseList', CourseListView);
Vue.component('Recette',RecetteComponent);
Vue.component('RecetteList',RecetteListView);
Vue.component('RecetteRaw',RecetteRawComponent);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
