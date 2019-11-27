<template>
<v-container>
  <v-layout justify-center align-center> 
      <v-flex align-center>
          <Recette :recette="recette"></Recette>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecetteComponent from '../Component/RecetteComponent.vue'
import { Action,Getter } from 'vuex-class';
import { Recette, Ingredient } from '../data-access';
import { RecetteRaw } from '../data-access/model/RecetteRaw.';

@Component({
  name: 'RecetteList'
})

export default class RecetteListView extends Vue {
  @Getter('listeRecette', { namespace: 'courselist' }) listeRecette!: Recette[];
 liste: RecetteRaw[] = [
   new RecetteRaw(new Ingredient("tomate"),3,1),
   new RecetteRaw(new Ingredient("froamge"),1,2),
   ];

   recette: Recette = new Recette(0,"pizza","https://cdn.vuetifyjs.com/images/cards/sunshine.jpg","commander la pizza",this.liste);
}
</script>

<style>

</style>