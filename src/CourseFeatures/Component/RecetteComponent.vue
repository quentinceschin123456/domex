<template>
<v-card width="500px">
    <v-img
    :src="recetteImg"
    height="200px"
    ></v-img>
<v-app-bar
        color="deep-purple accent-4"
        dark
      >
       {{ recette.name}}
        <v-spacer></v-spacer>
  
        <v-btn icon >
          <v-icon>favorite</v-icon>
        </v-btn>
       
          <v-btn icon>
          <v-icon>create</v-icon>
        </v-btn>
     <v-btn icon>
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>add_shopping_cart</v-icon>
        </v-btn>
        
       
      </v-app-bar>
            <v-btn fab
            color="blue"
            dark
                  
                  small
                  absolute
                  bottom
                  right  @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    <v-card-actions>
       <div v-show="show">
            <!-- <v-divider></v-divider> -->

            <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
    </v-card-actions>
</v-card>

</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette } from '../data-access';

@Component({
  name: 'Recette'
})
export default class RecetteComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop(Recette) recette?: Recette;

    show:boolean = false;

    get recetteImg(){
        return 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
    }

    get recetteName(){
      return 'titre';
    }
}
</script>

<style scoped>

</style>
