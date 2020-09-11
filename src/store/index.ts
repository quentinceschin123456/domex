import Vue from 'vue'
import Vuex from 'vuex'
import {menu} from'@/common/menu/store/module'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
 modules:{
   menu
 },
 plugins:[createPersistedState()]
})

export default store;
