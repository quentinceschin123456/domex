<template>
<v-data-table
    :headers="headers"
    :items="datas"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>

<!--  https://vuetifyjs.com/en/components/data-tables#crud-actions  -->
<!-- https://vuetifyjs.com/en/components/lists#icon-with-2-lines-and-action -->

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

get datas(){
  var res:any = []; 
  this.courseRowList.forEach(el => {
    var temp:any = {};
    temp.id = el.id;
    temp.produitName = el.produit ? el.produit.name: undefined ;
    temp.qte = el.qte;
    res.push(temp);
  });
  
// // eslint-disable-next-line no-console
//   console.log(res, this.courseRowList,[res]);
  return res;
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
