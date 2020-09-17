<template>
  <div id="app">
    <component :is="layout"> 
      <router-view> </router-view>
    </component>
  </div>

</template>

<script lang="ts">
 import { Component, Vue }               from 'vue-property-decorator';
 import { Action }                       from 'vuex-class';
import { Menu, ItemMenu, SectionMenu } from './common/menu';
  @Component({
    name: 'app'
  })

  export default class App extends Vue {
     default_layout:string = "default"
     @Action('createMenu', { namespace: 'menu' }) createMenu: any;
      
      created() {
        //ImgResolver
        this.generateMenu();
        // eslint-disable-next-line
        console.log(process.env.VUE_APP_SECRET)
      }

      get layout(){
        return (this.$route.meta.layout || this.default_layout)+"-layout";
      }

      generateMenu(){
        let adminItem: ItemMenu[] = [];
        adminItem.push(new ItemMenu("compte","/compte",undefined,"account_circle"))


        let sectionList:ItemMenu[] = [];
        sectionList.push(new ItemMenu("Liste de Course","/courselist"))
        sectionList.push(new ItemMenu("Recettes","/recette"))
        sectionList.push(new ItemMenu("Liste de tâches","/todoList"))
        sectionList.push(new ItemMenu("Calendrier","/agenda"))
        sectionList.push(new SectionMenu("Consignes","/agenda"))
        sectionList.push(new SectionMenu("Administatration","/agenda",undefined,undefined,adminItem))
        this.createMenu({mainName:"menu principale",sectionlist:sectionList}); 
      
        //let menu = new Menu(undefined,undefined, [
        //   new SectionMenu("h1","/test",undefined,"mdi-home",[
        //    new SectionMenu("h2-sousmenu1","/test",undefined,"mdi-home",[ new ItemMenu("page","/test",undefined,"mdi-home")]),
        //    new ItemMenu("h2-sousmenu2","/test",undefined,"mdi-home")
        //   ]),
        //    new SectionMenu("h1","/test",undefined,"account_circle",[
        //    new SectionMenu("h2-sousmenu1","/test",undefined,"mdi-home",[ new ItemMenu("page","/test",undefined,"mdi-home")]),
        //    new ItemMenu("h2-sousmenu2","/test",undefined,"mdi-home")
        //   ])
        // ])
      }
}
</script>
