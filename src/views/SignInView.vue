<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Hey lordswish, maybe in a few months we would stop talking or something, I built this portfolio to be part of your story, cheers Mate</a>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login(userEmail,userPassword)">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" v-model="userEmail" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" v-model="userPassword" placeholder="Password" />
          </div>
        </div>
        <div>
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LockClosedIcon } from '@heroicons/vue/solid'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import router from '../router';
// import { auth } from '@/db'
const userEmail = ref('');
const userPassword = ref('')

async function login(email,password){
    await signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        router.push("/home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(error)
    });
}
</script>