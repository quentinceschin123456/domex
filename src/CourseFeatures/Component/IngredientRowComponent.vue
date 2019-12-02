<template>
<v-card>
  <v-layout row align-center justify-center>
    <v-flex justify-center align-center>
      <v-img style="width:30px;" :src="ingredientRaw.ingredient.imgLink" alt="img">
      </v-img>
    </v-flex>
    <v-flex >
        {{ ingredientRaw.ingredient.name}}
    </v-flex>
    <v-flex>
        {{ingredientRaw.qte }}
    </v-flex>
  </v-layout>
</v-card>




<!-- Une image  + le nom + la quantité -->


</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette, Ingredient,IngredientRow } from '../data-access';

@Component({
  name: 'IngredientRow'
})
export default class IngredientRowComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop(IngredientRow) ingredientRaw!: IngredientRow;

    created(){
      this.ingredientRaw = new IngredientRow( new Ingredient("fro"),2);
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
