<script setup>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

const { user } = getUser()
const { error, addDocument } = useCollection('messages')
const message = ref('')

const handleSubmit = async () => {
    await addDocument({
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
    })
    if (!error.value) {
        message.value = ''
    }
}
</script>

<template>
    <div>
        <label for="message" class="sr-only">Message</label>
        <input
            v-model="message"
            @keypress.enter.prevent="handleSubmit"
            id="message"
            type="text"
            class="block w-full px-4 border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Type a message and hit enter to send..." />
        <FormError v-if="error" :error="error" />
    </div>
</template>
