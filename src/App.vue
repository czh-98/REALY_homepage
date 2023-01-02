<script setup lang="ts">
import Head from "./components/Head.vue";
import Abstract from "./components/Abstract.vue";
import Section from "./components/Section.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";
import Citation from "./components/Citation.vue";
</script>

<template>
  <Head />
  <Abstract />
  <Section />
  <Section2 />
  <el-divider />
  <Section3 />
  <el-divider />
  <Citation />
</template>

<style>
@import url("./assets/academicons.min.css");

* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: optima, "Optima Bold", "Microsoft YaHei", "Times New Roman",
    Times, serif;
  font-weight: 400;
  font-size: 14px;
  @font-face {
    font-family: optima;
    src: url(/fonts/optima.ttf);
  }
  @font-face {
    font-family: "Optima Bold";
    src: url(/fonts/optima_bold.ttf);
  }
}
#app {
  width: min(100%, 1280px);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 0 1rem;
}
h1,
h2,
p {
  color: #333333;
}
p {
  font-size: 1.2rem;
  text-align: justify;
}
img {
  max-width: 100%;
}
</style>
