<template>
  <a-layout style="min-height: 100vh">
    <SideMenu />
    <a-layout>
      <a-layout-content style="padding: 20px;">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import SideMenu from './components/SideMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideMenu,
  },
});
</script>

<style>
</style>