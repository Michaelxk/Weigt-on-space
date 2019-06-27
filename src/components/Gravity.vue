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
      choosePlanet: null,
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
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg.`;
          break;
        case 'Jupiter':
          this.Result = (this.yourWeight * 24.8) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Mercury':
          this.Result = (this.yourWeight * 3.7) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Venus':
          this.Result = (this.yourWeight * 8.87) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Saturn':
          this.Result = (this.yourWeight * 10.4) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Uranus':
          this.Result = (this.yourWeight * 8.7) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Neptune':
          this.Result = (this.yourWeight * 11.15) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
          break;
        case 'Moon':
          this.Result = (this.yourWeight * 1.62) / 9.8;
          this.TextResult = Math.round(this.Result);
          this.TextResult = `Your weight on ${this.choosePlanet} is: ${this.TextResult} kg`;
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
