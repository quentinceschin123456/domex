<template>
  <div id="app">
    <component :is="layout"> 
      <router-view> </router-view>
    </component>
  </div>

</template>

<script lang="ts">
 import { Component, Vue }               from 'vue-property-decorator';
  @Component({
    name: 'app'
  })

  export default class App extends Vue {
     default_layout:string = "default"
      
      created() {
        //ImgResolver
      }

      get layout(){
        return (this.$route.meta.layout || this.default_layout)+"-layout";
      }
}
</script>
