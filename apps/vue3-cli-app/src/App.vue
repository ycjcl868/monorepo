<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Vue cli 3 </h2>
    <p>AppType.Web: {{AppType.Web}}</p>
    <SharedComponent />
  </div>
</template>

<script>
import { AppType } from '@infras/shared/types';
import { SharedComponent } from '@infras/ui/vue';

export default {
  name: 'App',
  components: {
    SharedComponent
  },
  data() {
    return {
      AppType
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
