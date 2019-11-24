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

@Component({
  name: 'RecetteList'
})

export default class RecetteListView extends Vue {}
</script>

<style>

</style>