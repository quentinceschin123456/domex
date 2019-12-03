<template>
<v-card class="recette-card">
    <v-img
    :src="recette.imgUrl"
    height="200px"
    ></v-img>
<v-app-bar
        color="deep-purple accent-4"
        dark
      >
       {{ recette.name}}
        <v-spacer></v-spacer>
  
        <v-btn icon @click="recette.isFavorite = !recette.isFavorite">
          <v-icon :color="recette.isFavorite ? 'red': ''">favorite</v-icon>
        </v-btn>
       
          <v-btn icon>
          <v-icon>create</v-icon>
        </v-btn>
     <v-btn icon>
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn icon @click="addToCourseList">
          <v-icon>add_shopping_cart</v-icon>
        </v-btn>
        
       
      </v-app-bar>
            <v-btn fab
            color="blue"
            dark  
            small
            absolute
            bottom
            right  
            @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
    <v-card-actions>
       <div v-show="show"  style="width:100%;">
        
          <v-tabs
          fixed-tabs
          centered
          v-model="tabs"
          background-color="indigo"
          dark>
            <v-tab>
            Ingrédient
            </v-tab>
            <v-tab>
            Instructions
            </v-tab>
            <v-tab>
            Ustensible
            </v-tab>
          </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
        <!-- <ul class="indregient-list-container">
                <li v-for="rowRecette in recette.listIngredients" :key="rowRecette.id">
                  Ingrédient: {{ rowRecette.ingredient.name }} | Quantité: {{ rowRecette.qte }}
                 </li>
              </ul> -->
              <IngredientRow></IngredientRow>
        </v-tab-item>
        <v-tab-item>
          <div>
                {{ recette.instructions }}
              </div>
        </v-tab-item>
        <v-tab-item>
        </v-tab-item>
      </v-tabs-items>
              
          
          
        </div>
    </v-card-actions>
</v-card>

</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette, Ingredient } from '../data-access';
import IngredientRowComponent from '../Component/IngredientRowComponent.vue'

@Component({
  name: 'Recette',
  components:{
    IngredientRowComponent
  }
})
export default class RecetteComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop(Recette) recette!: Recette;

    show:boolean = false;
    tabs:any = null;

    get recetteImg(){
        return this.recette.imgUrl ? this.recette.imgUrl : '';
    }

    addToCourseList(){

    }
}
</script>

<style scoped>

.recette-card{
 margin: 20px;
 width: 500px;
}
</style>
