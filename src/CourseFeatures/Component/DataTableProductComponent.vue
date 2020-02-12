<template>
<v-data-table
    :headers="headers"
    :items="convertObjectTodatas"
    item-key="couresRaw.id"
    hide-default-footer
    :show-select="isOnBuy"

    class="elevation-1"
  >
  <template v-slot:top>
  
  </template>
  <template v-slot:item.imgLink="{ item }">
    <v-img width="50px" :src="item.imgLink"></v-img>
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
    @Prop() headers!: String[];
    @Prop() isOnBuy:boolean = false;
    
    get convertObjectTodatas(){
      var res:any = [];
      this.courseRowList.forEach(el => {
        var temp:any = {};
        temp.couresRaw = el; // permettra de garder la ref à l'objet
        temp.imgLink = el.produit ? el.produit.imgLink : undefined;
        temp.produitName = el.produit ? el.produit.name: undefined ;
        temp.qte = el.qte;
        res.push(temp);
      });
      
      return res;
    }

    editItem(item:any){
      alert("edit "+ item.couresRaw.id);
      
// eslint-disable-next-line no-console
      console.log(item);
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
