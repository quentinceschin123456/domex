<template>
  <v-container fluid>
    <v-layout>
      <v-flex id="side-menu">
        <SideMenu></SideMenu>
      </v-flex>
      <v-flex>
        <slot></slot>
      </v-flex>
      <!-- composant d'erreur générique -->
    </v-layout>
  </v-container>
  <!-- https://medium.com/thewarmupio/bref-voici-comment-cr%C3%A9er-un-syst%C3%A8me-de-layout-avec-vue-et-vue-router-44673f132e74 -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SideMenuComponent from "@/common/menu/component/SideMenuComponent.vue";

@Component({
  name: "MainView",
  components: {
    SideMenuComponent
  }
})
export default class MainView extends Vue {}
</script>
<style scoped>
.side-menu {
  width: 100%;
}
</style>