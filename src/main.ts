import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import RecetteComponent from './CourseFeatures/Component/RecetteComponent.vue';
import CourseRowComponent from './CourseFeatures/Component/CourseRowComponent.vue';
import IngredientRowComponent from './CourseFeatures/Component/IngredientRowComponent.vue';


import RecetteListView from './CourseFeatures/View/RecetteListView.vue';
import CourseListView from './CourseFeatures/View/CourseListView.vue'


Vue.config.productionTip = false

Vue.component('CourseRaw', CourseRowComponent);
Vue.component('CourseList', CourseListView);
Vue.component('Recette',RecetteComponent);
Vue.component('RecetteList',RecetteListView);
Vue.component('IngredientRow',IngredientRowComponent);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')