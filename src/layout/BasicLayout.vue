<template>
    <div :class="$style.basicLayout">
        <div :class="$style.header">
            <div :class="$style.logo">

            </div>
            <div :class="$style.operator">

            </div>
        </div>
        <component :is="type" :menu="menu">
            <slot name="children"></slot>
        </component>
    </div>
</template>

<script>
import Linear from './Linear.vue';

export default {
    components: {
        Linear,
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        menu: {
            type: Array,
            default: () => ([]),
        }
    },
}
</script>

<style lang="less" module>
@import "@/style/variables.less";

.basicLayout {
    .header {
        padding: @header_padding;
        background-color: #FFFFFF;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            width: 4rem;
            height: 4rem;
            background-color: @theme_color;
        }
        .operator {
            width: 30rem;
            height: 4rem;
            background-color: @theme_color;
        }
    }
}
</style>