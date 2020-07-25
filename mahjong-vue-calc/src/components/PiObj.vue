<template>
  <v-row>
    <v-col cols="1">{{ pi.pi }}</v-col>
    <v-col cols="1">{{ idx }}</v-col>
    <v-col cols="2">
      <v-img :src="pi.imagePath" :alt="pi.pi" width="25" />
    </v-col>
    <v-col cols="1">
      <v-btn
        @click="inputAgari(idx)"
        :disabled="isNaki"
        :color="idx == agariPiNum?  'deep-purple': ''"
      >{{ agariPi }}</v-btn>
    </v-col>
    <v-col cols="4">
      <v-btn-toggle v-model="pi.nakiPiSets" color="deep-purple">
        <v-btn
          v-for="(s, index) in nakiPies"
          :key="index"
          :value="index"
          :disabled="index == pi.nakiPiSets? false: isAgariOrOther"
        >{{ s }}</v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col cols="3">
      <v-btn-toggle v-model="pi.doraPiSets" color="deep-purple" multiple>
        <v-btn v-for="(s, index) in doraPies" :key="index" :value="index">{{ s }}</v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "PiObj",

  props: ["pi", "idx"],
  data() {
    return {
      agariPi: "上牌",
      nakiPies: ["明", "明", "明", "明"],
      doraPies: ["ドラ", "赤"]
    };
  },
  methods: {
    inputAgari(idx) {
      if (!this.isNaki) {
        this.$store.commit("SET_AGARI", idx);
      }
    }
  },
  computed: {
    agariPiNum() {
      return this.$store.state.agariPiNum;
    },
    isNaki() {
      if ((this.pi.nakiPiSets === null) | (this.pi.nakiPiSets === undefined)) {
        return false;
      } else {
        return true;
      }
    },
    isAgariOrOther() {
      if (this.isNaki) {
        return true;
      } else if (this.idx == this.agariPiNum) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.row {
  padding: 0;
  margin: 0;
}

.col {
  padding: 1px 0;
  margin: 0;
}
</style>