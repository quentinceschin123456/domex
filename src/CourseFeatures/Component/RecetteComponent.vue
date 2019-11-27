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
       <div v-show="show">
            <!-- <v-divider></v-divider> -->

            <v-card-text>
              <ul class="indregient-list-container">
                <li v-for="rawRecette in recette.listIngredients" :key="rawRecette.id">
                  Ingrédient: {{ rawRecette.ingredient.name }} | Quantité: {{ rawRecette.qte }}
                 </li>
              </ul>
            </v-card-text>
        </div>
    </v-card-actions>
</v-card>

</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette, Ingredient } from '../data-access';
import RecetteRawComponent from '../Component/RecetteRawComponent.vue'

@Component({
  name: 'Recette',
  components:{
    RecetteRawComponent
  }
})
export default class RecetteComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop(Recette) recette!: Recette;

    show:boolean = false;

    get recetteImg(){
        return '';
    }

    
}
</script>

<style scoped>

.recette-card{
 margin: 20px;
 width: 500px;
}
</style>
