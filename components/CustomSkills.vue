<template>
  <v-row no-gutters>
    <v-col cols="5" class="d-flex align-center">
      <span class="title">{{ title }}</span>
    </v-col>
    <v-col cols="7" class="d-flex align-center">
        <v-progress-linear
        class="mr-12"
        :model-value="value"
        bg-color="tertiary"
        color="primary"
      ></v-progress-linear>
      <div>
        <span class="title ml-3">{{ value }}%</span>
      </div>
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
      default: 0
    }
  },
});
</script>

<style lang="scss" scoped>

.title{
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 16px;
  color: #FFF;
}
</style>
