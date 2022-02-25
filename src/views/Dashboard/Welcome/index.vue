<template>
  <div>
    <h3>dashboard welcome</h3>
    <Message :msg="'msg component'" />
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  components: {
    Message,
  },
  data: () => ({}),
};
</script>