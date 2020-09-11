<template>
 <v-navigation-drawer
	:v-model="drawer"
	:v-if="isMenuOK"
	:mini-variant.sync="mini"
	permanent>
      <v-flex>
      <v-icon>
        {{menu.icone}}
      </v-icon>
      <v-label>
        {{menu.name}}
      </v-label>
      <v-btn
          icon
          @click.stop="inverseMenuActive"
        >
          <v-icon v-if="mini">mdi-chevron-left</v-icon>
          <v-icon v-if="!mini">mdi-chevron-right</v-icon>
        </v-btn>
        </v-flex>
      <v-list v-for="section in menu.sectionList" :key="section.name"> 
      <div v-if="section && section.items && section.items.length > 0"> 
        <v-list-group
        :prepend-icon="section.icone"
          >
          <template v-slot:activator>
              <v-list-item-title v-text="section.name"></v-list-item-title>
          </template>

          <v-list-item
            :v-if=" section && section.items"
            v-for="item in section.items"
            :key="item.name"
          >
            <ItemMenu :section="item"></ItemMenu>
          </v-list-item>
        </v-list-group>
      </div>
      <div v-else>
      <v-list-item :href="section.link">
           <v-list-item-icon>
          <v-icon>{{section.icone}}</v-icon>
        </v-list-item-icon>

            <v-list-item-title v-text="section.name"></v-list-item-title>
        
      </v-list-item>
      </div>
    </v-list>
 </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import {ItemMenu, Menu} from '@/common/menu/model'
import { Getter, namespace, Action } from 'vuex-class';

@Component({
  name: 'SideMenu'
})

export default class SideMenuComponent extends Vue {
   
  @Getter("isMenuActive",{namespace:"menu"}) mini!:boolean;
  @Getter("getMenu",{namespace:"menu"}) menu!:Menu;
  @Action("inverseMenuActive",{namespace:"menu"}) inverseMenuActive:any
  private drawer:boolean = true;

  get isMenuOK(){
    return this.menu && this.menu !== null; 
  }

}
</script>

<style>

</style>
