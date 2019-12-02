<template>
<v-layout justify-center align-center>
<CourseRow></CourseRow>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CourseRowComponent from '../Component/CourseRowComponent.vue'


@Component({
  name: 'CourseList',
  components: {
    CourseRowComponent
  }
})

export default class CourseListView extends Vue {}
</script>

<style>

</style>