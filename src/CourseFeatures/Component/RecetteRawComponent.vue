<template>

<v-img>

</v-img>


<!-- Une image  + le nom + la quantité -->


</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { CourseList, Recette, Ingredient } from '../data-access';
import { RecetteRaw } from '../data-access/model/RecetteRaw.';

@Component({
  name: 'RecetteRaw'
})
export default class RecetteRawComponent extends Vue {

    // @Action('unSelectKBDiagnosticIssue', { namespace: 'diagnosticKb' }) unSelectKBDiagnosticIssue:any;

    @Prop(RecetteRaw) recetteRaw!: RecetteRaw;

    
}
</script>

<style scoped>

</style>
