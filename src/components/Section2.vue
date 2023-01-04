<template>
  <div class="container">
    <h2>Reconstruction from Single Image (frontal-view)</h2>
    <el-table
      class="table"
      :data="frontalViewDataRef"
      :header-cell-style="headerCellStyle"
      @sort-change="sortChange"
    >
      <el-table-column
        prop="rank"
        label="Rank"
        align="center"
        sortable="custom"
      >
        <template #default="scope">
          {{ scope.row["rank"].val }}
        </template>
      </el-table-column>
      <el-table-column
        prop="method"
        label="Method"
        align="center"
        width="110px"
      >
        <template #default="scope">
          <a class="link" :href="scope.row['link']" target="_blank">
            {{ scope.row["method"] }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="nose" label="@nose (mm)" align="center">
        <el-table-column
          prop="nose_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_avg'].bold)">
              {{ row["nose_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="nose_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_med'].bold)">
              {{ row["nose_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="nose_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_std'].bold)">
              {{ row["nose_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="mouth" label="@mouth (mm)" align="center">
        <el-table-column
          prop="mouth_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_avg'].bold)">
              {{ row["mouth_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="mouth_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_med'].bold)">
              {{ row["mouth_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="mouth_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_std'].bold)">
              {{ row["mouth_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="forehead" label="@forehead (mm)" align="center">
        <el-table-column
          prop="forehead_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_avg'].bold)">
              {{ row["forehead_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="forehead_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_med'].bold)">
              {{ row["forehead_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="forehead_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_std'].bold)">
              {{ row["forehead_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="cheek" label="@cheek (mm)" align="center">
        <el-table-column
          prop="cheek_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_avg'].bold)">
              {{ row["cheek_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cheek_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_med'].bold)">
              {{ row["cheek_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cheek_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_std'].bold)">
              {{ row["cheek_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="all" label="all" align="center">
        <el-table-column
          prop="all_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_avg'].bold)">
              {{ row["all_avg"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <h2>Reconstruction from Single Image (side-view)</h2>
    <el-table
      class="table"
      :data="sideViewData"
      :header-cell-style="headerCellStyle"
      @sort-change="sortChange2"
    >
      <el-table-column
        prop="rank"
        label="Rank"
        align="center"
        sortable="custom"
      >
        <template #default="scope">
          {{ scope.row["rank"].val }}
        </template>
      </el-table-column>
      <el-table-column
        prop="method"
        label="Method"
        align="center"
        width="110px"
      >
        <template #default="scope">
          <a class="link" :href="scope.row['link']" target="_blank">
            {{ scope.row["method"] }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="nose" label="@nose (mm)" align="center">
        <el-table-column
          prop="nose_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_avg'].bold)">
              {{ row["nose_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="nose_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_med'].bold)">
              {{ row["nose_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="nose_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['nose_std'].bold)">
              {{ row["nose_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="mouth" label="@mouth (mm)" align="center">
        <el-table-column
          prop="mouth_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_avg'].bold)">
              {{ row["mouth_avg"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="mouth_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_med'].bold)">
              {{ row["mouth_med"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="mouth_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['mouth_std'].bold)">
              {{ row["mouth_std"].val }}
            </span>
          </template></el-table-column
        >
      </el-table-column>
      <el-table-column prop="forehead" label="@forehead (mm)" align="center">
        <el-table-column
          prop="forehead_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_avg'].bold)">
              {{ row["forehead_avg"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="forehead_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_med'].bold)">
              {{ row["forehead_med"].val }}
            </span>
          </template></el-table-column
        >
        <el-table-column
          prop="forehead_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['forehead_std'].bold)">
              {{ row["forehead_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="cheek" label="@cheek (mm)" align="center">
        <el-table-column
          prop="cheek_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_avg'].bold)">
              {{ row["cheek_avg"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cheek_med"
          label="med."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_med'].bold)">
              {{ row["cheek_med"].val }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cheek_std"
          label="std."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['cheek_std'].bold)">
              {{ row["cheek_std"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="all" label="all" align="center">
        <el-table-column
          prop="all_avg"
          label="avg."
          align="center"
          sortable="custom"
        >
          <template #default="{ row }">
            <span :style="dataStyle(row['all_avg'].bold)">
              {{ row["all_avg"].val }}
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <p>
      "*-c" indicates coarse model and "*-f" indicates fine model.
      <strong>bold font</strong> indicates the best one in the column. The
      benchmark is continuously updated to encourage researchers to participate
      in. We only consider methods that were defined as public when submitting
      to REALY, or that are publicly available in a peer-reviewed conference or
      journal. Methods are ranked according to the average region-wise error,
      you can also sort by a specified metic by clicking its corresponding table
      header.
    </p>
    <p>
      We ensure results submitted to participate in the REALY benchmark are kept
      confidential strictly. No information about the participants or the
      results is released or shared with others until explicitly specified by
      the participants, or after appearing in a peer-reviewed conference or
      journal. In order to publish results to the REALY benchmark website,
      follow the <strong>Participation Instructions</strong> below.
    </p>
    <el-divider />
    <h2>Participation Instructions</h2>
    <p>
      To participate in the challenge, you should first get the access of REALY
      benchmark data according to the guideline
      <a class="link" href="https://github.com/czh-98/REALY">here</a>. Then you
      can use the image to reconstruct meshes and evaluate them using our
      evaluation pipeline.
    </p>
    <p>
      If you want to present your method(s) on the REALY project page, please
      send the reconstructed meshes, barycentric coordinate and template mesh to
      <a class="link" href="mailto:zenghaochai@gmail.com"
        ><strong>zenghaochai@gmail.com</strong></a
      >, then we will re-evaluate and check the results. After that, we will
      update the project page accordingly. We recommend entitling the email as
      "REALY-SubmitResult-[MethodName]".
    </p>
    <h2>Acknowledgements and Copyrights</h2>
    <p>
      The benchmark is derived from the
      <a class="link" href="https://www-users.york.ac.uk/~np7/research/LYHM/"
        >LYHM</a
      >
      dataset. Please also cite their paper if you use this benchmark. The test
      portrait images are rendered using the 3D scans provided by the
      <a class="link" href="https://www-users.york.ac.uk/~np7/research/Headspace/"
        >HeadSpace</a
      >
      dataset.
      <b
        >The copyright of the portraits belongs to the original owner,
        <a
          class="link"
          href="https://www-users.york.ac.uk/~np7/research/LYHM/"
          >LYHM</a
        >
        dataset. Please contact them to get access to the raw scan data. Note
        that
        <a
          class="link"
          href="https://www-users.york.ac.uk/~np7/research/LYHM/"
          >LYHM</a
        >
        dataset allows non-commercial research and education purposes use only.
      </b>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CellStyle } from "element-plus";
import { StyleValue, ref } from "vue";
import { frontalViewData } from "./section2-frontal-view";
import { sideViewData } from "./section2-side-view";

const frontalViewDataRef = ref(frontalViewData);
const sideViewDataRef = ref(sideViewData);

function headerCellStyle({}): CellStyle<cellStyle> {
  const style = { color: "black", padding: "6px 0" };
  // if (column.property === "nose") {
  //   Object.assign(style, { backgroundColor: "rgb(181,228,140)" });
  // }
  // if (column.property === "mouth") {
  //   Object.assign(style, { backgroundColor: "rgb(255,183,3)" });
  // }
  // if (column.property === "forehead") {
  //   Object.assign(style, { backgroundColor: "rgb(189,178,255)" });
  // }
  // if (column.property === "cheek") {
  //   Object.assign(style, { backgroundColor: "rgb(144,224,239)" });
  // }
  // if (column.property === "all") {
  //   Object.assign(style, { backgroundColor: "rgb(217,217,217)" });
  // }
  return style;
}

function sortChange({ prop, order }: { prop: string; order: string }) {
  frontalViewDataRef.value.sort((a: Data, b: Data) => {
    if (order === "ascending") {
      return Number.parseFloat(a[prop].val) - Number.parseFloat(b[prop].val);
    }
    return b[prop].val - a[prop].val;
  });
}

function sortChange2({ prop, order }: { prop: string; order: string }) {
  sideViewDataRef.value.sort((a: Data, b: Data) => {
    if (order === "ascending") {
      return Number.parseFloat(a[prop].val) - Number.parseFloat(b[prop].val);
    }
    return b[prop].val - a[prop].val;
  });
}

function dataStyle(bold: boolean): StyleValue {
  if (bold) {
    return { fontWeight: "bolder" };
  }
  return { fontWeight: "normal" };
}

interface cellStyle {
  color: string;
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
    .table-cell {
      background-color: black;
    }
  }
}
</style>
