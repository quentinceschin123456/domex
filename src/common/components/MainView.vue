<template>
  <v-container>
     <v-layout>
       <v-flex :v-if="isMenuOK" id="side-menu">
      <SideMenu :menu="menu"></SideMenu>
      </v-flex>
      <v-flex>
        <slot></slot>
      </v-flex>
      </v-layout>

  </v-container>
     <!-- https://medium.com/thewarmupio/bref-voici-comment-cr%C3%A9er-un-syst%C3%A8me-de-layout-avec-vue-et-vue-router-44673f132e74 -->
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import SideMenuComponent from '@/common/menu/component/SideMenuComponent.vue'
import { Menu, SectionMenu, ItemMenu } from '../menu';
import { Getter } from 'vuex-class';

@Component({
  name: 'MainView',
  components: {
    SideMenuComponent
  }
})

export default class MainView extends Vue {

    @Getter("getMenu",{namespace:"menu"}) menu!:Menu;

//    private menu = new Menu(undefined,undefined, [
//   new SectionMenu("h1","/test",undefined,"mdi-home",[
//    new SectionMenu("h2-sousmenu1","/test",undefined,"mdi-home",[ new ItemMenu("page","/test",undefined,"mdi-home")]),
//    new ItemMenu("h2-sousmenu2","/test",undefined,"mdi-home")
//   ]),
//    new SectionMenu("h1","/test",undefined,"account_circle",[
//    new SectionMenu("h2-sousmenu1","/test",undefined,"mdi-home",[ new ItemMenu("page","/test",undefined,"mdi-home")]),
//    new ItemMenu("h2-sousmenu2","/test",undefined,"mdi-home")
//   ])
// ])

get isMenuOK(){
  return this.menu && this.menu !== null; 
}
}
</script>
<style scoped>
.side-menu{
  width:100%;
}
</style>