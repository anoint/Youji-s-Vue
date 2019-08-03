<template>
  <div class="body">
    <div v-if="step == 1">
      <Post v-for="(포스팅,i) in 포스팅들" :key="i" :포스팅="포스팅" />
    </div>

    <div v-if="step == 2">
      <div :class="['upload-image',선택한필터]" :style="{backgroundImage:`url(${이미지경로줄게})`}"></div>

      <!-- class 바인딩하기  1.앞에 :콜론붙이기 2.따옴표안에 배열 가능. -->
      <div class="filters">
        <FilterBox v-for="(필터1,i) in 필터들" :key="i" :필터="필터1" :이미지경로="이미지경로줄게"> 
          {{필터1}}
          </FilterBox>
      </div>
    </div>

    <div v-if="step == 3">
      <div :class="['upload-image',선택한필터]" :style="{backgroundImage:`url(${이미지경로줄게})`}"></div>
      <div class="write">
        <textarea class="write-box" v-model="memo" @input="$emit('writer', $event.target.value)">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import FilterBox from "./FilterBox";
export default {
  data() {
    return {
      memo: "",
      필터들: [
        "normal",
        "clarendon",
        "gingham",
        "moon",
        "lark",
        "reyes",
        "juno",
        "slumber",
        "aden",
        "perpetua",
        "mayfair",
        "rise",
        "hudson",
        "valencia",
        "xpro2",
        "willow",
        "lofi",
        "inkwell",
        "nashville"
      ]
    };
  },
  components: {
    Post,
    FilterBox
  },
  props: {
    포스팅들: Array,
    이미지경로줄게: String,
    step: Number,
    선택한필터: String
  }
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 350px;
  background: cornflowerblue;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
