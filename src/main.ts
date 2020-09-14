import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import RecetteComponent from './CourseFeatures/Component/RecetteComponent.vue';
import CourseRowComponent from './CourseFeatures/Component/CourseRowComponent.vue';
import IngredientRowComponent from './CourseFeatures/Component/IngredientRowComponent.vue';
import DataTableProductComponent from './CourseFeatures/Component/DataTableProductComponent.vue';

import SideMenuComponent from '@/common/menu/component/SideMenuComponent.vue';
import ItemMenuComponent from '@/common/menu/component/ItemMenuComponent.vue';

import RecetteListView from './CourseFeatures/View/RecetteListView.vue';
import CourseListView from './CourseFeatures/View/CourseListView.vue';
import MainView from '@/common/components/MainView.vue'

import LoginPage from'@/common/admin/view/LoginPage.vue';

Vue.config.productionTip = false

Vue.component('CourseRow', CourseRowComponent);
Vue.component('CourseList', CourseListView);
Vue.component('Recette',RecetteComponent);
Vue.component('RecetteList',RecetteListView);
Vue.component('IngredientRow',IngredientRowComponent);
Vue.component('DataTableProduct',DataTableProductComponent);
Vue.component('default-layout',MainView);

Vue.component('SideMenu',SideMenuComponent);
Vue.component('ItemMenu',ItemMenuComponent);

Vue.component('LoginPage',LoginPage);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
