<template>
<v-container>
  <v-layout justify-center align-center> 
      <v-flex align-center>
          <Recette></Recette>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecetteComponent from '../Component/RecetteComponent.vue'
import { Action,Getter } from 'vuex-class';
import { Recette } from '../data-access';

@Component({
  name: 'RecetteList'
})

export default class RecetteListView extends Vue {
    @Getter('listeRecette', { namespace: 'courselist' }) listeRecette!: Recette[];

}
</script>

<style>

</style>