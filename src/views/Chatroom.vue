<script setup>
import { watch } from 'vue';
import { useRouter } from 'vue-router'
import Navbar from  '../components/Navbar.vue'
import NewChatForm from  '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue';
import getUser from '../composables/getUser'

const router = useRouter()
const { user } = getUser()

watch(user, () => {
    if (!user.value) {
        router.push({ name: 'Welcome' })
    }
})
</script>

<template>
    <div class="min-h-screen bg-gray-200">
        <Navbar></Navbar>
        <div class="w-2/3 m-4 mx-auto bg-white divide-y divide-gray-300 rounded-lg shadow-lg">
            <div class="px-4 py-5 sm:p-6">
                <ChatWindow />
            </div>
            <div class="px-4 py-4 sm:px-6">
                <NewChatForm />
            </div>
        </div>
    </div>
</template>
