<template>
  <div class="result">
    <h2>
      <slot></slot>
    </h2>
    <div v-if="results">
      <img :src="planetPicture" alt="planet pic">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Result',
  props: ['planetChosen'],
  data() {
    return {
      results: null,
    };
  },
  updated() {
    this.getApiInfo();
  },
  computed: {
    randomNumber() {
      return Math.round(Math.random() * (100 - 0) + 0);
    },
    planetPicture() {
      const { planetChosen, results, randomNumber } = this;
      return planetChosen && results ? results[randomNumber].links[0].href : '';
    },
  },
  methods: {
    getApiInfo() {
      axios.get(`https://images-api.nasa.gov/search?q=${this.planetChosen}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
        });
    },
  },
};
</script>
<style scoped>
img {
  width: 300px;
  height: 200px;
}
</style>
