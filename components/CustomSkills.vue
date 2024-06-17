<template>
  <v-row no-gutters>
    <v-col cols="12" class="d-flex align-center">
      <span class="title">{{ title }}</span>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => "",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-family: "Poppins";
  font-weight: 300;
  font-size: 16px;
  color: #fff;
}
</style>
