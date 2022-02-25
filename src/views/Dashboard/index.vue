<template>
    <div :class="$style.dashboard">
        <h2>dashboard index page</h2>
        <div :class="$style.children">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({}),
};
</script>

<style lang="less" module>
.dashboard {
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
  .children {
    margin: 0 auto;
    height: 50vh;
    width: 60vw;
    border: aquamarine 1px solid;
  }
}
</style>