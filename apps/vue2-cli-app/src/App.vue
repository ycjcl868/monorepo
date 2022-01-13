<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <p>AppType.Web: {{AppType.Web}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { AppType } from '@infras/shared/types';
// import { Component } from '@infras/ui/vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Component,
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
