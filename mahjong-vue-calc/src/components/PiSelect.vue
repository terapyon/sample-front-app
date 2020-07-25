<template>
  <v-container>
    <div>
      <PiObj v-for="(p, index) in pies" :key="index" :pi="p" :idx="index" />
    </div>
  </v-container>
</template>
<script>
import PiObj from "./PiObj";
export default {
  name: "PiSelect",

  components: {
    PiObj
  },
  data() {
    return {
      //   attr: [1, 2, 3, 4]
    };
  },
  computed: {
    pies() {
      return this.$store.state.pies;
    }
  }
};
</script>
<style lang="stylus" scoped></style>