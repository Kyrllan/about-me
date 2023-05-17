<template>
  <div class="d-flex align-center">
    <div class="pa-1 bg-primary d-flex align-center justify-center rounded-lg">
      <v-icon>{{ icon }}</v-icon>
    </div>
    <div class="pl-4">
      <div class="title">{{ title }}:</div>
      <div class="text">{{ value }}</div>
    </div>
  </div>
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
      type: String,
      default: () => "",
    },
    icon: {
      type: String,
      default: () => "",
    }
  },
});
</script>

<style lang="scss" scoped>

.title{
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 16px;
  color: #FFF;
}
.text{
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 16px;
  color: #FFF;
}
</style>
