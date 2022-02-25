<template>
    <div :class="$style.msg">
        <h3>{{ data.title }}</h3>
        <h4>{{ msg }}</h4>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default defineComponent({
    props: {
        msg: String,
    },
    setup(props) {
        const readersNumber = ref(0)

        const data = reactive({
            title: 'msg components',
        });
        return {
            readersNumber,
            data,
        }
    }
});
</script>