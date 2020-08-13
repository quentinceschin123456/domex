<template>
 <v-navigation-drawer>
      <v-list>
      <v-list-group
        :v-for="section in sectionList"
       
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="section.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :v-for="item in section.items"
         
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
 </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import {SectionMenu} from '@/common/menu/model'

@Component({
  name: 'SideMenu'
})

export default class SideMenuComponent extends Vue {
   
  @Prop() sectionList!: ItemMenu[];
}
</script>

<style>

</style>
