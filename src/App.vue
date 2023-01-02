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

html,
body {
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}
body {
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", optima, "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 14px;
}
#app {
  max-width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
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
