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
        let sectionList:ItemMenu[] = [];
        sectionList.push(new ItemMenu("Liste de Course","/courselist"))
        sectionList.push(new ItemMenu("Recettes","/recette"))
        this.createMenu({mainName:"menu principale",icone:"test",sectionlist:sectionList});
      }

      get layout(){
        return (this.$route.meta.layout || this.default_layout)+"-layout";
      }
}
</script>
