<template>
  <div class="result">
    <h2>{{ TextResult }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ['textResult'],
};
</script>
