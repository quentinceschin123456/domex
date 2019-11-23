<template>
  
</template>

<script>
import { Component, Vue ,Prop } from 'vue-property-decorator';
import {Action , Getter} from 'vuex-class';

@Component({
  name: 'CourseRaw'
})

export default class CourseRawComponent extends Vue {
    /*
    is checked
    is to delete
    is to update
    */

   isChecked:Boolean;
   isToDelete:Boolean;
   isToUpdate:Boolean;
}
</script>

<style>

</style>