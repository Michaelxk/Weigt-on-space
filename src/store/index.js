import Vue from 'vue';
import Vuex from 'vuex';

import { gravityValues, earthGravity } from './gravityValues';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gravityValues,
    earthGravity,
  },
  mutations: {
  },
  actions: {
  },
});
