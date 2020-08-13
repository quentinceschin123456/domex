<template>
<div>
      <v-list-item v-if="section && section.items && section.items.length > 0">

      </v-list-item>
      
      
      <v-list-group
       v-else
       :prepend-icon="section.icone"
       sub-group
       no-action
        value="true">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="section.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :v-if="section && section.items"
          v-for="item in section.items"
         :key="item.name"
        >
          <ItemMenu :section="item"></ItemMenu>
        </v-list-item>
      </v-list-group>
      </div>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { ItemMenu } from '@/common/menu/model'

@Component({
  name: 'ItemMenu'
})

export default class  extends Vue {
   
  @Prop() section!: ItemMenu;
}
</script>

<style>

</style>