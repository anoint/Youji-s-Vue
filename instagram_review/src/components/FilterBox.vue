<template>
  <div :class="['filter-item', 필터]" :style="{backgroundImage:`url(${이미지경로})`}" @click="sendBox"></div>
</template>

<script>
import EventBus from "../EventBus";
export default {
  props: {
    필터: String,
    이미지경로: String
  },
  methods: {
    sendBox() {
      EventBus.$emit("필터선택함", this.필터);
    }
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
</style>
