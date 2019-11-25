<template>
<v-layout justify-center align-center>
<CourseRaw></CourseRaw>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CourseRawComponent from '../Component/CourseRawComponent.vue'


@Component({
  name: 'CourseList',
  components: {
    CourseRawComponent
  }
})

export default class CourseListView extends Vue {}
</script>

<style>

</style>