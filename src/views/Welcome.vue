<script setup>
import { ref } from 'vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showLoginForm = ref(true)

const enterChat = () => {
    router.push({ name: 'Chatroom' })
}
</script>

<template>
  <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg class="absolute transform translate-x-1/2 left-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute bottom-0 transform -translate-x-1/2 right-full" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Vue Live Chat Demo
        </h2>
        <p class="mt-4 text-lg leading-6 text-blue-500">
          Vue 3, TailwindCSS, Headlessui and Firebase.
        </p>
      </div>
      <div class="mt-12">
        <component
            @ui:show:signup="showLoginForm = false"
            @ui:show:login="showLoginForm = true"
            @auth:login:success="enterChat"
            @auth:signup:success="enterChat"
            :is="showLoginForm ? LoginForm : SignupForm"
        />
      </div>
    </div>
  </div>
</template>



<style>

</style>
