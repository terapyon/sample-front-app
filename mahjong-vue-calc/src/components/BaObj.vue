<template>
  <v-row>
    <v-col cols="2">
      <v-btn-toggle :value="baSet" color="deep-purple">
        <v-btn v-for="s in ba" :key="s" :value="s" @click="inputBa(s)">{{
          s
        }}</v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col cols="4">
      <v-btn-toggle :value="kazeSet" color="deep-purple">
        <v-btn v-for="s in kaze" :key="s" :value="s" @click="inputKaze(s)">{{
          s
        }}</v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col cols="2">
      <v-btn
        @click="inputRiichi()"
        :disabled="isNaki"
        :color="isRiichi ? 'deep-purple' : ''"
        >リーチ</v-btn
      >
    </v-col>
    <v-col cols="2">
      <v-btn-toggle :value="isTsumo" color="deep-purple">
        <v-btn
          v-for="s in tsumoRon"
          :key="s"
          :value="s"
          @click="inputTsumo(s)"
          >{{ s }}</v-btn
        >
      </v-btn-toggle>
    </v-col>
    <v-col cols="2">
      <v-btn @click="doCalc()" :disabled="!isBaSetup" color="primary"
        >計算</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "BaObj",

  data() {
    return {
      ba: ["東", "南"],
      kaze: ["東", "南", "西", "北"],
      tsumoRon: ["ツモ", "ロン"],
      nowCalc: false,
    };
  },
  methods: {
    inputRiichi() {
      if (!this.isNaki) {
        this.$store.commit("SET_REIICHI");
      }
    },
    inputBa(ba) {
      this.$store.commit("SET_BA", ba);
    },
    inputKaze(kaze) {
      this.$store.commit("SET_KAZE", kaze);
    },
    inputTsumo(tsumoRon) {
      this.$store.commit("SET_TSUMORON", tsumoRon);
    },
    doCalc() {
      this.$store
        .dispatch("doCalc", this.$store.state.pies)
        .then(() => {
          this.nowCalc = true;
        })
        .catch(() => {
          console.log("Error of server calc");
        });
    },
  },
  computed: {
    baSet() {
      return this.$store.state.roundWind;
    },
    kazeSet() {
      return this.$store.state.playerWind;
    },
    isNaki() {
      return false; // TODO
    },
    isRiichi() {
      return this.$store.state.isRiichi;
    },
    isTsumo() {
      return this.$store.state.isTsumo;
    },
    isBaSetup() {
      return true; // TODO
    },
  },
};
</script>
<style lang="stylus" scoped></style>
