<template>
<v-card>
    <v-img
    :src="recetteImg"
    height="200px"
    ></v-img>

    <v-card-title>
        

        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-card-title>

    <v-card-actions>
       <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
    </v-card-actions>
</v-card>

</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';

@Component({
  name: 'Recette'
})
export default class RecetteComponent extends Vue {

    //   @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    // @Getter('error', { namespace: 'diagnosticKb' }) error!: HttpRequestError;


    show:boolean = false;

    get recetteImg(){
        return 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
    }
}
</script>

<style scoped>

</style>
