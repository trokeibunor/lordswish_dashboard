<template>
    <section class="chart-notif flex flex-col lg:flex-row gap-4 w-11/12 mx-auto">
      <chart-box class="w-8/12 rounded" />
      <div class="notifications w-12/12 lg:w-4/12 bg-white p-4 rounded mb-4">
        <h3 class="font-bold">Notification</h3>
        <hr />
        <ul class="list-none fixed-list">
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
          <notif-list />
        </ul>
      </div>
    </section>
</template>

<script setup>
import ChartBox from "../components/ChartBox.vue";
import NotifList from "../components/NotifList.vue";
</script>

<style scoped>
.fixed-list {
  height: 370px;
  overflow-y: scroll;
}
.fixed-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.fixed-list::-webkit-scrollbar-track {
  border-radius: 8px;
  background: #75787a56;
}
</style>