<template>
  <div class="container">
    <form @submit.prevent="calcWeight">
      <input id="weight" type="number" placeholder="place your weight here"
       v-model="yourWeight" required>
        <select class="form-control" v-model="choosePlanet" id="chooseYourPlanet" required>
          <option>Mercury</option>
          <option>Venus</option>
          <option>Mars</option>
          <option>Jupiter</option>
          <option>Saturn</option>
          <option>Uranus</option>
          <option>Neptune</option>
          <option>Moon</option>
       </select>
      <input type="submit" class="btn bg-primary" value="make calculation">
    </form>
      <Result v-text="TextResult" class="result" />
  </div>
</template>

<script>
import Result from '@/components/Result.vue';

export default {
  name: 'Gravity',
  components: { Result },
  data() {
    return {
      yourWeight: null,
      choosePlanet: 'choose your planet',
      feedback: null,
      TextResult: null,
      Result: null,
    };
  },
  methods: {
    calcWeight() {
      switch (this.yourWeight && this.choosePlanet) {
        case 'Mars':
          this.Result = (this.yourWeight * 3.7) / 9.8;
          this.TextResult = this.Result;
          break;
        case 'Jupiter':
          this.Result = (this.yourWeight * 24.8) / 9.8;
          this.TextResult = this.Result;
          break;
        case 'Mercury':
          console.log('funciona');
          break;
        case 'Venus':
          console.log('funciona');
          break;
        case 'Saturn':
          console.log('funciona');
          break;
        case 'Uranus':
          console.log('funciona');
          break;
        case 'Neptune':
          console.log('funciona');
          break;
        case 'Moon':
          console.log('funciona');
          break;
        default:
        // code block
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
}
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.form-control {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
  margin-left: -1px;
  color:#fff;
}
.form-control option {
  color:#fff;
}
.result {
  margin-top: 20px;
  font-size: 2.1em;
  color: #fff;
}
#weight {
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.25em;
}
#chooseYourPlanet {
  color: #000;
}
.bg-primary {
  margin-top: 10px;
  justify-content: center;
  width: 100%;
}
</style>
