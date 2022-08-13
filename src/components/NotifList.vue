<template>
  <li class="flex flex-row gap-2 my-4">
    <img src="./icons/notif_Avater.svg" class="notifAvater" alt="" srcset="" />
    <div class="text-box">
      <p class="text-md font-semibold">{{ notifEmail }}</p>
      <p class="text-xs">{{ getDay }}</p>
    </div>
  </li>
  <hr />
</template>

<script setup>
import { ref, computed } from "vue";

const notifEmail = ref("okeibunoremma@gmail.com");
const getDay = computed(() => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //janvier = 0
  let yyyy = today.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
});
</script>

<style scoped>
.notifAvater {
  width: 48px;
  height: 48px;
  background-color: #f7f8fc;
  border-radius: 100px;
  padding: 4px;
  border: 1px solid #ccc;
}
</style>
