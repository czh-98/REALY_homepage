<template>
  <div class="container">
    <h2>
      REALY Benchmark (<u>Re</u>gion-aware 3D face benchmark based on the
      <a class="link" href="https://www-users.york.ac.uk/~np7/research/LYHM/" target="_blank">
        <u>LY</u>HM
      </a>
      dataset)
    </h2>
    <img src="/images/contents/examples.jpg" />
    <img src="/images/contents/multi-view.jpg" />
    <p>
      The REALY benchmark uses multi-view rendered portraits images of 100 high
      quality scans from the <a class="link" href="https://www-users.york.ac.uk/~np7/research/Headspace/">HeadSpace</a>
      dataset
      to evaluate 3D face reconstruction accuracy. Examples of REALY benchmark:
      <i>First row</i>: globally aligned high-resolution scans with textures.
      <i>Second row</i>: retopologized meshes in HIFI3D topology with
      semantically consistent keypoints (red points). <i>Third row</i>: high
      quality face region masks of each scan. <i>Fourth-Seventh row</i>:
      multi-view images of each scan. <i>Eighth row</i>: frontal images of each
      scan.
    </p>
    <p>
      The single-view reconstruction results of different methods are reported
      separately (100 frontal images + 400 side-view images).
    </p>
    <div class="note">
      <el-divider />
      <p>
        <strong>
          Important Notes: The data and code released with the website can only
          be used for <i>non-commercial research purposes</i>. Please do not
          copy, sell, trade, or exploit the data for any commercial purposes.
        </strong>
      </p>
      <el-divider />
    </div>
    <p>The statistical information of REALY is summarized as follows.</p>
    <el-table class="table" :data="tableData1" :header-cell-style="headerCellStyle">
      <el-table-column prop="metric" label="Metric" align="center">
        <el-table-column prop="category" label="Category" align="center" />
      </el-table-column>
      <el-table-column prop="age" label="Age" align="center">
        <el-table-column prop="_15" label="<15" align="center" />
        <el-table-column prop="_15_30" label="15-30" align="center" />
        <el-table-column prop="_30_45" label="30-45" align="center" />
        <el-table-column prop="_45_60" label="45-60" align="center" />
        <el-table-column prop="_60" label=">60" align="center" />
      </el-table-column>
      <el-table-column prop="ethnicity" label="Ethnicity" align="center">
        <el-table-column prop="caucasian" label="Caucasian" align="center" />
        <el-table-column prop="asian" label="Asian" align="center" />
        <el-table-column prop="black" label="Black" align="center" />
      </el-table-column>
    </el-table>
    <el-table class="table" :data="tableData2" :header-cell-style="headerCellStyle">
      <el-table-column prop="metric" label="Metric" align="center">
        <el-table-column prop="category" label="Category" align="center" />
      </el-table-column>
      <el-table-column prop="gender" label="Gender" align="center">
        <el-table-column prop="f" label="F" align="center" />
        <el-table-column prop="m" label="M" align="center" />
      </el-table-column>
      <el-table-column prop="bmi" label="BMI" align="center">
        <el-table-column prop="underweight" label="Underweight" align="center" />
        <el-table-column prop="normal" label="Normal" align="center" />
        <el-table-column prop="overweight" label="Overweight" align="center" />
        <el-table-column prop="obese" label="Obese" align="center" />
        <el-table-column prop="extremeObese" label="Extreme Obese" align="center" />
      </el-table-column>
    </el-table>
    <p>
      The single-view reconstruction results of different methods are reported
      separately (100 frontal images + 400 multi-view images).
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CellStyle } from "element-plus";

const tableData1 = [
  {
    category: "Ratio",
    _15: 12,
    _15_30: 31,
    _30_45: 27,
    _45_60: 21,
    _60: 9,
    caucasian: 79,
    asian: 16,
    black: 5,
  },
];
const tableData2 = [
  {
    category: "Ratio",
    f: 48,
    m: 52,
    underweight: 15,
    normal: 61,
    overweight: 15,
    obese: 7,
    extremeObese: 2,
  },
];

function headerCellStyle(): CellStyle<object> {
  return { color: "black" };
}
</script>

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
}
</style>
