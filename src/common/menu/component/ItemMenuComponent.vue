<template>
<v-flex>
  <div v-if="section && section.items && section.items.length > 0">
 <v-list-group
       sub-group
       >
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
  <div v-else>
      <v-list-item :href="section.link">
           <v-list-item-icon>
          <v-icon>{{section.icone}}</v-icon>
        </v-list-item-icon>

            <v-list-item-title v-text="section.name"></v-list-item-title>
        
      </v-list-item>
      </div>
      
      
      </v-flex>
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