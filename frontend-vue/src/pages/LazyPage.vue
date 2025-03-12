<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <a-card
      v-if="show"
      style="width: 500px; text-align: center; background-color: #1677ff; color: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); opacity: show ? 1 : 0; transition: opacity 0.5s ease-in-out;"
    >
      <a-typography-title level="2" style="color: white;">Lazy Loaded Section</a-typography-title>
    </a-card>
    <a-typography-title v-else level="3">Loading section...</a-typography-title>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Card, Typography } from 'ant-design-vue';

export default {
  name: 'LazyPage',
  components: {
    ACard: Card,
    ATypographyTitle: Typography.Title,
  },
  setup() {
    const show = ref(false);

    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 3000);
    });

    return {
      show,
    };
  },
};
</script>

<style scoped>
</style>
