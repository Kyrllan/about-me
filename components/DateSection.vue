<template>
  <div>
    <div>
      <span class="title-date">{{ date }} </span>
    </div>
    <div>
      <span class="title">{{ title }} </span>
    </div>
    <div class="pt-2">
      <div class="content" v-html="content"></div>
    </div>
    <div v-if="links.length > 0">
      <span class="title">Links: </span>
      <a
        v-for="(obj, i) in links"
        :key="i"
        class="links"
        :href="obj.link"
        target="_blank"
        >{{ obj.name }}
      </a>
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
    links: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
.title-date {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: rgb(var(--v-theme-secondary));
}

.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}

.content {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}

.links {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: rgb(var(--v-theme-primary));
  padding-top: 4px;
  padding-left: 10px;
}
</style>
