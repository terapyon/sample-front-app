import Vue from "vue";
import Vuex from "vuex";
import { Pi } from "../models";
import CalcService from "@/services/CalcService.js";

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
    roundWind: "南",
    playerWind: "西",
    isTsumo: "ロン",
    isRiichi: false,
    result: "",
  },
  mutations: {
    SET_AGARI: function(state, index) {
      state.agariPiNum = index;
    },
    SET_REIICHI: function(state) {
      if (state.isRiichi) {
        state.isRiichi = false;
      } else {
        state.isRiichi = true;
      }
    },
    SET_BA: function(state, ba) {
      state.roundWind = ba;
    },
    SET_KAZE: function(state, kaze) {
      state.playerWind = kaze;
    },
    SET_TSUMORON: function(state, tsumoRon) {
      state.isTsumo = tsumoRon;
    },
    DO_CALC: function(state, data) {
      state.result = data;
    },
  },
  actions: {
    doCalc({ commit }, data) {
      return CalcService.postCalc(data).then(() => {
        commit("DO_CALC", data);
      });
    },
  },
  modules: {},
});
