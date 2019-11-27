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

@Component({
  name: 'RecetteList'
})

export default class RecetteListView extends Vue {
  @Getter('listeRecette', { namespace: 'courselist' }) listeRecette!: Recette[];
   recette: Recette = new Recette(0,"pizza","","commander la pizza",[new Ingredient(),1]);

}
</script>

<style>

</style>