import Vue from "vue";
import Vuex from "vuex";
import { Pi } from "../models";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pies: [
      new Pi("2m", null, []), // 0
      new Pi("3m", null, []), // 1
      new Pi("4m", null, [0]), // 2
      new Pi("4m", null, [0]), // 3
      new Pi("4m", null, [0]), // 4
      new Pi("2s", null, []), // 5
      new Pi("3s", null, []), // 6
      new Pi("4s", null, []), // 7
      new Pi("e", 0, []), // 8
      new Pi("e", 0, []), // 9
      new Pi("e", 0, []), //10
      new Pi("2p", null, [1]), //11
      new Pi("3p", null, []), //12
      new Pi("4p", null, []), //13
    ],
    agariPiNum: 3,
    // naki1: [8, 9, 10],
    // naki2: [],
    // naki3: [],
    // naki4: [],
    // doraPies: [13],
    roundWind: "nan",
    playerWind: "sha",
    isTsumo: true,
    isRiichi: false,
  },
  mutations: {
    SET_AGARI: function(state, index) {
      state.agariPiNum = index;
    },
  },
  actions: {},
  modules: {},
});
