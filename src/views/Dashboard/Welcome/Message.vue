<template>
    <div :class="$style.msg">
        <h4>{{ msg }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
    },
};
</script>

<style lang="less" module>
.msg {

}
</style>