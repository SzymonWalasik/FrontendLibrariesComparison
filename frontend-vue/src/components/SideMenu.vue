<template>
  <a-layout-sider
    :collapsed="collapsed"
    collapsible
    @collapse="onCollapse"
    theme="dark"
  >
    <template v-if="!collapsed">
      <a-menu theme="dark" mode="inline" :selectedKeys="[activeKey]">
        <a-menu-item key="1">
          <router-link to="/">Dashboard</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/carousel">Carousel</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/lazy">Lazy</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/delay">Delayed form</router-link>
        </a-menu-item>
      </a-menu>
    </template>
  </a-layout-sider>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'SideMenu',
  setup() {
    const collapsed = ref(false);
    const route = useRoute();

    const onCollapse = (value) => {
      collapsed.value = value;
    };

    const activeKey = computed(() => {
      const path = route.path;
      if (path === '/') return '1';
      else if (path === '/carousel') return '2';
      else if (path === '/lazy') return '3';
      else if (path === '/delay') return '4';
      return '1';
    });

    return {
      collapsed,
      onCollapse,
      activeKey
    };
  },
});
</script>

<style scoped>
</style>
