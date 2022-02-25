<template>
  <div :class="$style.index">
    <!-- <span>here is the entry of project</span>
    <div :class="$style.children">
      <router-view></router-view>
    </div> -->
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

<style lang="less" module>
.index {
  > span {
    font-size: 2.4rem;
  }
}
</style>
