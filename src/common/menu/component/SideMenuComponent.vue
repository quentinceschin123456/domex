<template>
 <v-navigation-drawer
  :v-model="true"
  :permanent="true">
      <v-list v-for="section in sectionList" :key="section.name">
      <v-list-group
       :prepend-icon="section.icone"
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="section.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :v-if=" section && section.items"
          v-for="item in section.items"
          :key="item.name"
        >
          <ItemMenu :section="item"></ItemMenu>
        </v-list-item>
      </v-list-group>
    </v-list>
 </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import {ItemMenu} from '@/common/menu/model'

@Component({
  name: 'SideMenu'
})

export default class SideMenuComponent extends Vue {
   
  @Prop() sectionList!: ItemMenu[];
}
</script>

<style>

</style>
