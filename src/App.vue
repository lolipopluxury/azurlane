<template>
  <div :class="$style.index">
    <BasicLayout :type="GlobalConfig.layoutType">
      <template v-slot:children>
        <router-view></router-view>
      </template>
    </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from '@/layout/BasicLayout.vue';
import GlobalConfig from '@/config/index.js';

export default {
  name: 'app',
  components: {
    BasicLayout,
  },
  data() {
    return {
      GlobalConfig,
    };
  }
};
</script>

<style src="@style/global.less"></style>