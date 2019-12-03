<template>
<v-layout justify-center align-center>
  <v-card>
    <v-app-bar
        color="deep-purple accent-4"
        dark
      >
       test
        <v-spacer></v-spacer>
  
       
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
<!-- <CourseRow></CourseRow> -->
<DataTableProduct :headers="headers" :courseRowList="courseList.listeCourseRaw"></DataTableProduct>
  </v-card>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CourseRowComponent from '../Component/CourseRowComponent.vue'
import DataTableProductComponent from '../Component/DataTableProductComponent.vue'
import { CourseList, CourseRow, Produit } from '../data-access';


@Component({
  name: 'CourseList',
  components: {
    CourseRowComponent,
    DataTableProductComponent
  }
})

export default class CourseListView extends Vue {
courseList= new CourseList(0,"liste", [new CourseRow(0,new Produit(0,"Tomate","url"),1 ),new CourseRow(1,new Produit(1,"Patate","url"),2 )]);

get headers(){
  return [
        { text: 'Image', value: 'imgLink' },
        { text: 'Produit', value: 'produitName' },
        { text: 'Quantité', value: 'qte' },
      ]
}


}
</script>

<style>

</style>