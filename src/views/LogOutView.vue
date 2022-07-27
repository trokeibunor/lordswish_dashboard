<template>
    <main>
        <alt-nav-vue/>
        <div class="logOutBox w-11/12 h-80 mx-auto rounded bg-white flex flex-col justify-center items-center">
            <h3>Are you Sure you want to Log out?</h3>
            <div class="btn-rack flex flex-row gap-4 my-4">
                <button class="bg-red-600 px-4 py-2 rounded text-white font-semibold">Yes</button>
                <button class="bg-slate-600 px-4 py-2 rounded text-white font-semibold">Cancel</button>
            </div>
        </div>
    </main>
</template>

<script setup>
import AltNavVue from '../components/AltNav.vue';
</script>

<style scoped>

</style>