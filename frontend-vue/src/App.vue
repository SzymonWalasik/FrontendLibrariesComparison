<template>
  <a-layout style="min-height: 100vh">
    <SideMenu />
    <a-layout>
      <a-layout-content style="padding: 20px;">
        <Suspense>
          <template #default>
            <router-view />
          </template>
          <template #fallback>
            <a-typography-title :level="3">Loading...</a-typography-title>
          </template>
        </Suspense>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue'
import SideMenu from './components/SideMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideMenu
  }
})
</script>
