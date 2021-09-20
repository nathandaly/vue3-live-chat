<script setup>
import { ref } from 'vue'
import FormError from './FormError.vue'
import useLogin from '../composables/useLogin'

const emit = defineEmits(['ui:show:signup', 'auth:login:success'])

const email = ref('')
const password = ref('')

const { error, login } = useLogin()

const handleSubmit = async () => {
    await login(email.value, password.value)

    if (!error.value) {
        emit('auth:login:success');
    }
}
</script>

<template>
    <div class="mt-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <div class="mt-1">
                    <input id="email" type="email" v-model="email" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div class="mt-1">
                    <input id="password" type="password" v-model="password" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
            </div>

            <FormError v-if="error" :error="error" />

            <div>
                <button type="submit" class="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Log in
                </button>
            </div>
        </form>
        <p class="mt-4">No account yet? <span class="font-medium text-blue-700 cursor-pointer whitespace-nowrap hover:text-blue-600" @click="emit('ui:show:signup')">Sign up</span> instead</p>
    </div>
</template>
