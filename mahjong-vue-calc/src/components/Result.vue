<template>
  <v-row>
    <v-col>
      {{ getRsult }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Result",

  computed: {
    getRsult() {
      return this.$store.state.result;
    },
  },
};
</script>
