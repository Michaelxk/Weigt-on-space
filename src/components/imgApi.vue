<template>
  <div class="search">
    <h1>Search</h1>
    <form @submit.prevent="getApiInfo(choosePlanet)">
    </form>
    <div v-if="results">
      <div v-for="result in results" :key="result">
      
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ImgApi',
  props: ['ImgApi'],
  data() {
    return {
      results: '',
    };
  },
  methods: {
    getApiInfo(choosePlanet) {
      axios.get('https://images-api.nasa.gov/search?q=' + choosePlanet + '&media_type=image')
        .then((response) => {
          console.log(response.data);
          this.results = response.data
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
