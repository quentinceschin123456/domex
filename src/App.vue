<template>
    <v-app>
      <router-view></router-view>
    </v-app>

</template>

<script lang="ts">
 import { Component, Vue }               from 'vue-property-decorator';
import ImgResolver from './common/services/ImgResolver';


  @Component({
    name: 'app'
  })
  export default class App extends Vue {
      created() {
        //ImgResolver
      }
}
</script>
