<template>
  <div class="home">
    <HelloWorld msg="Your weight on space"/>
    <Gravity />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Gravity from '@/components/Gravity.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Gravity,
  },
};
</script>
