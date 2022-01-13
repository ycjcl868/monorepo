<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { AppType } from '@infras/shared/types';
import { SharedComponent } from '@infras/ui/vue';
</script>

<template>
  <div>
    <h2>Vue Vite App</h2>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>AppType.Web: {{AppType.Web}}</p>
    <SharedComponent />
  </div>
</template>

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
