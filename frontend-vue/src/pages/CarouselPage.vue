<template>
  <div>
    <h1>Performance Testing Carousel</h1>
    <div style="margin-left: 25%">
      <a-carousel autoplay>
        <div>
          <img :src="require('@/assets/ice.png')" alt="Ice" />
        </div>
        <div>
          <img :src="require('@/assets/lightning.png')" alt="Lightning" />
        </div>
        <div>
          <img :src="require('@/assets/raindrops.png')" alt="Raindrops" />
        </div>
        <div>
          <img :src="require('@/assets/sunset.png')" alt="Sunset" />
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
import { Carousel } from 'ant-design-vue';

export default {
  name: 'CarouselPage',
  components: {
    ACarousel: Carousel
  }
};
</script>

<style scoped>
</style>
