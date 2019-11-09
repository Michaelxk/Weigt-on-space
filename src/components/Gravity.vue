<template>
  <div class="container">
    <form @submit.prevent="calcWeight">
      <input
        id="weight"
        type="number"
        placeholder="place your weight here"
        v-model="yourWeight"
        required
      >
        <select class="form-control" v-model="planetChosen" id="chooseYourPlanet" required>
          <option v-for="(planet, index) in Object.keys(this.planets)" :key="index">
            {{ planet }}
          </option>
       </select>
      <input type="submit" class="btn bg-primary" value="make calculation">
    </form>

    <Result class="result" :planetChosen="planetChosen">
      {{ `Your weight on ${this.planetChosen} is: ${this.RoundResult} kg.` }}
    </Result>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Result from '@/components/Result.vue';

export default {
  name: 'Gravity',
  components: { Result },
  data() {
    return {
      yourWeight: null,
      planetChosen: null,
      Result: null,
      RoundResult: null,
    };
  },
  computed: {
    ...mapState({
      planets: state => state.gravityValues,
      earth: state => state.earthGravity,
    }),
  },
  methods: {
    calcWeight() {
      const {
        yourWeight,
        planets,
        planetChosen,
        earth,
      } = this;
      this.RoundResult = Math.round((yourWeight * planets[planetChosen]) / earth);
    },
  },
};
</script>
<style lang="scss" scoped>
$whiteColor: #fff;
$longestWidth: 100%;

.container {
  box-sizing: border-box;
}
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .form-control {
  width: $longestWidth;
  display: flex;
  justify-content: center;
  margin: 20px;
  margin-left: -1px;
  color: $whiteColor;
  }
  .form-control option {
  color: darkgray;
  text-transform: capitalize;
  }
}
 #weight {
  width: $longestWidth;
  color: $whiteColor;
  font-weight: bold;
  font-size: 1.25em;
  }
.result {
  margin-top: 20px;
  font-size: 2.1em;
  color: $whiteColor;
}
.bg-primary {
  margin-top: 10px;
  justify-content: center;
  width: $longestWidth;
}
</style>
