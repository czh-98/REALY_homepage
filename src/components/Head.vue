<template>
  <div class="container">
    <h1>REALY: Rethinking the Evaluation of 3D Face Reconstruction</h1>
    <h2>ECCV 2022</h2>
    <div class="author-list">
      <div class="logo">
        <img src="/images/authors/sigs.png" alt="sigs" />
        <img src="/images/authors/lablogo.png" alt="lab" />
      </div>
      <div class="authors">
        <p>Zenghao Chai*, Haoxian Zhang*, Jing Ren, Di Kang,</p>
        <p>Zhengzhuo Xu, Xuefei Zhe, Chun Yuan†, Linchao Bao†</p>
        <p>(* Equal Contribution, † Corresponding Author)</p>
      </div>
    </div>
    <div class="open-source">
      <el-link
        type="primary"
        href="https://arxiv.org/abs/2203.09729"
        target="_blank"
      >
        <img class="icon" src="/images/contents/paper.svg" />
        Paper
      </el-link>
      <el-link
        type="primary"
        href="https://arxiv.org/abs/2203.09729"
        target="_blank"
      >
        <img class="icon" src="/images/contents/attachment.svg" />
        Supplementary
      </el-link>
      <el-link
        type="primary"
        href="https://github.com/czh-98/REALY"
        target="_blank"
      >
        <img class="icon" src="/images/contents/github.svg" />
        Code
      </el-link>
    </div>
    <div class="pipeline">
      <img src="/images/contents/pipeline.jpg" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  text-align: center;
  .author-list {
    width: 100%;
    .logo {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin: 2.5rem auto;

      img {
        height: 3.5rem;
        margin: 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      .logo {
        flex-direction: column;
      }
    }
    .authors {
      p {
        text-align: center;
      }
    }
  }
  .open-source {
    > * {
      margin: 1rem;
      font-size: 1rem;
    }
    .icon {
      height: 1.5rem;
      margin-right: 5px;
    }
  }
  .pipeline {
    margin-top: 2rem;
  }
}
</style>
