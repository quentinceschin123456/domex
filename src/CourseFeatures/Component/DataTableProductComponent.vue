<template>
<v-data-table
    :v-model="selected"
    :headers="headers"
    :items="courseRowList"
    item-key="couresRaw.id"
    hide-default-footer
    :show-select="isOnBuy"

    class="elevation-1"
  >
  <template v-slot:item.data-table-select="{item}">
    <v-checkbox :v-model="selected" :value="item"></v-checkbox>
  </template>
  <template v-slot:item.produit.imgLink="{ item }">
    <v-img width="50px" :src="item.produit.imgLink"></v-img>
  </template>
  
  <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
  </v-data-table>
   
<!-- 
https://vuetifyjs.com/en/components/data-tables#crud-actions 
https://vuetifyjs.com/en/components/lists#icon-with-2-lines-and-action
https://vuetifyjs.com/en/components/data-tables#customizing-default-rows
 -->

</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette, Ingredient,IngredientRow, CourseRow, Produit } from '../data-access';

@Component({
  name: 'DataTableProduct'
})
export default class DataTableProductComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop() courseRowList!: CourseRow[] ;
    @Prop() isOnBuy:boolean = false;
    @Prop() selected:any;

    get headers(){
      return [
            { text: 'Image', value: 'produit.imgLink' },
            { text: 'Produit', value: 'produit.name' },
            { text: 'Quantité', value: 'qte' },
            { text: 'Actions', value: 'action', sortable: false },
          ]
    }

    editItem(item:any){
      alert("edit "+ item.couresRaw.id);
      
      // eslint-disable-next-line no-console
      console.log(item,this.selected);
    }
    deleteItem(item:any){
      alert("delete ");
    }

}
</script>

<style scoped>
.main {
 flex-direction: row;


}

.flex{
  text-align: center;
  align-items: center;
  justify-content: center;


}
.img{
  position:center;
  width: 100%;
  height: 100%;
}
.v-image__image{
 background-size:100% 100%;
}
</style>
