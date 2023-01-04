<template>
  <div class="container">
    <h2>Citation</h2>
    <p>
      If you find this work is useful for your research, please cite the
      following papers.
    </p>
    <p>The <a class="link" href="https://realy3dface.com/">REALY</a> paper:</p>
    <pre>
      <code>
@inproceedings{REALY,
  title={REALY: Rethinking the Evaluation of 3D Face Reconstruction},
  author={Chai, Zenghao and Zhang, Haoxian and Ren, Jing and Kang, Di and Xu, Zhengzhuo and Zhe, Xuefei and Yuan, Chun and Bao, Linchao},
  booktitle = {Proceedings of the European Conference on Computer Vision (ECCV)},
  year = {2022}
}
      </code>
    </pre>
    <p>
      The
      <a class="link" href="https://www-users.york.ac.uk/~np7/research/LYHM/"
        >LYHM</a
      >
      paper:
    </p>
    <pre>
      <code>
@article{LYHM,
    title={Statistical Modeling of Craniofacial Shape and Texture},
    author={Dai, Hang and Pears, Nick and Smith, William and Duncan, Christian},
    journal={International Journal of Computer Vision},
    year={2019}
}
      </code>
    </pre>
    <p>
      The
      <a class="link" href="https://facescape.nju.edu.cn/">FaceScape</a> paper:
    </p>
    <pre>
      <code>
@inproceedings{FaceScape, 
    title={FaceScape: a Large-scale High Quality 3D Face Dataset and Detailed Riggable 3D Face Prediction}, 
    author={Yang, Haotian and Zhu, Hao and Wang, Yanru and Huang, Mingkai and Shen, Qiu and Yang, Ruigang and Cao, Xun}, 
    booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)}, 
    year={2020} 
}
      </code>
    </pre>
    <p>
      The
      <a
        class="link"
        href="https://tencent-ailab.github.io/hifi3dface_projpage/"
        >HIFI3D</a
      >
      paper:
    </p>
    <pre>
      <code>
@article{HIFI3D,
    title={High-Fidelity 3D Digital Human Head Creation from RGB-D Selfies},
    author={Bao, Linchao and Lin, Xiangkai and Chen, Yajing and Zhang, Haoxian and Wang, Sheng and Zhe, Xuefei and Kang, Di and Huang, Haozhi and Jiang, Xinwei and Wang, Jue and Yu, Dong and Zhang, Zhengyou},
    journal={ACM Transactions on Graphics},
    year={2021}
}
      </code>
    </pre>

    <el-divider />
    <h2>Contact</h2>
    <p>
      If you have any question, please contact
      <a class="link" href="mailto:zenghaochai@gmail.com">Zenghao Chai</a>
      or
      <a class="link" href="mailto:linchaobao@gmail.com">Linchao Bao</a>.
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  width: 100%;

  .link {
    text-decoration: none;
    color: #409eff;
  }
  .note {
    p {
      margin: 2rem auto;
    }
  }
  .table {
    margin: 2rem auto;
  }

  pre {
    display: flex;
    margin: 0;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;

    code {
      padding: 0;
      margin: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }
  }
}
</style>
