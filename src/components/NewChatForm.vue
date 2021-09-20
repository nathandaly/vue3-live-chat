<script setup>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";
import { EmojiHappyIcon } from "@heroicons/vue/outline";

const { user } = getUser();
const { error, addDocument } = useCollection("messages");
const message = ref("");

const handleSubmit = async () => {
  await addDocument({
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  });
  if (!error.value) {
    message.value = "";
  }
};
</script>

<template>
  <div class="h-10">
    <div class="flex h-full space-x-2">
      <input
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
        class="block w-full px-4 border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-400 sm:text-sm"
        role="textbox"
        placeholder="Type a message and hit enter to send..."
      />
      <div class="flex">
        <button
          class="flex items-center justify-center w-24 h-full bg-blue-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          @click.prevent="handleSubmit"
          aria-label="Send Message"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#FFFFFF"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="10" y1="14" x2="21" y2="3"></line>
            <path
              d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
