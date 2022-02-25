<template>
    <div :class="$style.layout">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        menu: Array,
    },
    data: () => ({}),
}
</script>

<style lang="less" module>
.layout {
    border: 1px red solid;
}
</style>