<template>
  <div id="app">
    <div class="header">
      <ul class="header-button-left" v-if="step!=1">
        <li>Cancel</li>
      </ul>

      <ul class="header-button-right" v-if="step==2" @click="step += 1">
        <li>Next</li>
      </ul>

      <ul class="header-button-right" v-if="step==3" @click="update();">
        <li>Done</li>
      </ul>

      <img src="./assets/logo.png" class="logo" />
    </div>
    <!-- 자식컴포넌트로 데이터를 보낸다.-->
    <Body :포스팅들="포스팅들" :이미지경로줄게="이미지경로" :step="step" :선택한필터="선택한필터" />

    <!-- <div class="sample-box">임시 박스</div> -->
    <div class="filter-item"></div>

    <div class="footer">
      <ul class="footer-button-plus">
        <li>
          <input type="file" id="file" class="inputfile" @change="fileUpload" />
          <label for="file" class="input-plus">+</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import postdata from "./data/postdata";
import Body from "./components/Body";
import EventBus from "./EventBus";
export default {
  data() {
    return {
      name: "app",
      포스팅들: postdata,
      이미지경로: "",
      step: 1,
      메모: "",
      선택한필터: ""
    };
  },
  components: {
    Body
  },
  mounted() {
    EventBus.$on("select-filter", 받은자료 => {
      console.log(받은자료);
      this.선택한필터 = 받은자료;
    });
  },
  methods: {
    fileUpload(e) {
      let file = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = e => {
        console.log(e.target.result);
        this.이미지경로 = e.target.result;
      };
      this.step = 2;
    },
    update() {
      //데이터 생성 변수
      var 내데이터 = {
        name: "Youjina",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지경로,
        likes: 0,
        date: "May 15",
        liked: false,
        caption: this.메모,
        filter: "perpetua"
      };
      //내데이터는 뒤에 추가한다.
      this.포스팅들.unshift(내데이터);
      this.step = 1;
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
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
