<template>
  <div>
    <div>
      <span class="title-date">{{ date }} </span>
    </div>
    <div>
      <span class="title">{{ title }} </span>
    </div>
    <div>
      <span class="content">{{ content }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    date: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    content: {
      type: String,
      default: () => "",
    },
  },
});
</script>

<style lang="scss" scoped>
.title-date{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: rgb(var(--v-theme-secondary));
}

.title{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}

.content{
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}
</style>