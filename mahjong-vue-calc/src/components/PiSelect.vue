<template>
  <v-container>
    <div>
      <PiObj v-for="(p, index) in pies" :key="index" :pi="p" :idx="index" />
    </div>
    <div>
      <BaObj />
    </div>
    <div>
      <Result />
    </div>
  </v-container>
</template>
<script>
import PiObj from "./PiObj";
import BaObj from "./BaObj";
import Result from "./Result";
export default {
  name: "PiSelect",

  components: {
    PiObj,
    BaObj,
    Result,
  },
  data() {
    return {
      //   attr: [1, 2, 3, 4]
    };
  },
  computed: {
    pies() {
      return this.$store.state.pies;
    },
  },
};
</script>
<style lang="stylus" scoped></style>
