<script setup>
import { ref } from 'vue'
import FormError from './FormError.vue'
import useSignup from '../composables/useSignup'

const emit = defineEmits(['ui:show:login', 'auth:signup:success'])

const displayName = ref('')
const email = ref('')
const password = ref('')

const { error, signup } = useSignup();

const handleSubmit = async () => {
    await signup(email.value, password.value, displayName.value)

    if (!error.value) {
        emit('auth:signup:success');
    }
}

</script>

<template>
    <div class="mt-6">
        <form @submit.prevent="handleSubmit" class="mt-4 space-y-6">
            <div>
                <label for="displayName" class="block text-sm font-medium text-gray-700">
                    Display Name
                </label>
                <div class="mt-1">
                    <input id="displayName" type="text" v-model="displayName" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
            </div>

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
                <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign up
                </button>
            </div>
        </form>
        <p class="mt-4">Already registered? <span class="font-medium text-blue-700 cursor-pointer whitespace-nowrap hover:text-blue-600" @click="emit('ui:show:login')">Log in</span> instead</p>
    </div>
</template>
