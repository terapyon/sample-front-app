<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>麻雀得点計算</h1>
      </div>
    </v-app-bar>

    <v-main>
      <PiSelect />
    </v-main>
  </v-app>
</template>

<script>
import PiSelect from "./components/PiSelect";

export default {
  name: "App",

  components: {
    PiSelect
  },

  data: () => ({
    //
  })
};
</script>
