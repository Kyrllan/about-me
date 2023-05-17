<template>
  <div>
    <div class="title-section">
      <span class="title">{{ title }}</span>
    </div>
    <slot name="content"></slot>
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
  },
});
</script>

<style lang="scss" scoped>
.title-section {
  clip-path: polygon(0 0, 99% 0, 100% 25%, 100% 80%, 3% 80%, 2% 100%, 0% 100%);
  background-color: rgb(var(--v-theme-primary));
  padding: 4px 0px 10px 10px;
}

.title{
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  color: #FFF;
}
</style>
