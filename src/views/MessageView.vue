<template>
    <div class="content">
        <side-bar/>
        <div class="wrapper">
            <nav-bar/>
            <main>
                <alt-nav-vue/>
                <div class="notification-box w-11/12 p-4 rounded bg-white mx-auto">
                    <h4 class="text-lg font-bold">Notification</h4>
                    <notif-list-vue/>
                    <notif-list-vue/>
                    <notif-list-vue/>
                    <notif-list-vue/>
                    <div class="button-rack flex flex-row gap-4 mt-8">
                        <button class="px-4 py-2 bg-red-700 text-white font-semibold">Clear All</button>
                        <button class="px-4 py-2 bg-slate-800 text-white font-semibold">Cancel</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import AltNavVue from '../components/AltNav.vue';
import NotifListVue from '../components/NotifList.vue';
import SideBar from '../components/SideBar.vue';
import NavBar from '../components/NavBar.vue';
</script>

<style scoped>

</style>