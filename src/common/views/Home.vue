<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <a href="/test">test link</a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/common/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
