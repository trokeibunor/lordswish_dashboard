<template>
  <Chart
    :size="{ width: `${width}`, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
    class="bg-white"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'pl']" type="natural" />
      <Line
        :dataKeys="['name', 'avg']"
        :lineStyle="{ stroke: 'red' }"
        type="natural"
      />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          name: { hide: true },
          pl: { color: '#0077b6' },
          avg: { label: 'averange', color: 'red' },
          inc: { hide: true },
        }"
      />
    </template>
  </Chart>
</template>

<script setup>
import { ref } from "vue";
import { Chart, Grid, Line } from "vue3-charts";
import { plByMonth } from "../data/chartdata";

const data = ref(plByMonth);
const direction = ref("horizontal");
const margin = ref({
  left: 0,
  top: 20,
  right: 20,
  bottom: 0,
});
const width = 650;
const axis = ref({
  primary: {
    type: "band",
    format: (val) => {
      if (val === "Feb") {
        return "😜";
      }
      return val;
    },
  },
  secondary: {
    domain: ["dataMin", "dataMax + 100"],
    type: "linear",
    ticks: 8,
  },
});
</script>

<style lang="scss" scoped></style>
