<template>
    <div class="settings flex flex-col justify-center items-center gap-2 bg-white w-10/12 mx-auto">
        <h2 class="font-bold my-2">Settings</h2>
        <div class="img_box flex flex-col items-center w-4/12 bg-slate-300 m-4 p-4 rounded">
            <p class="text-sm font-semibold">Edit Profile Picture</p>
            <form class="flex items-center space-x-6">
                <div class="shrink-0">
                    <img class="h-16 w-16 object-cover rounded-full bg-white p-2" src="./icons/ugo_Avater.svg" alt="Current profile photo" />
                </div>
                <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "/>
                </label>
            </form>
        </div>
        <div class="resume flex flex-col my-2 bg-slate-200 rounded p-2">
            <p class="text-sm font-bold my-1">Upload Resume</p>
            <input type="file" class="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
            "/>
        </div>
        <div class="text-box w-12/12 flex flex-col">
            <textarea id="" class="outline-none p-4 rounded bg-slate-300" placeholder="Update your site's about page" cols="50" rows="5"></textarea>
            <button class="outline-none bg-slate-800 text-white rounded px-4 py-2 my-1 font-semibold w-fit h-fit">Update About</button>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
    .avater{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border: 1px solid #333;
    }
</style>