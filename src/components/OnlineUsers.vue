<script setup>
import getCollection from '../composables/getCollection'

const { error, documents } = getCollection('online')


</script>

<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="document in documents" :key="document.id">
        <div class="flex px-4 py-6 mt-2 border-2 border-blue-300 border-dashed rounded">
            <img
                class="w-10 h-10 border border-gray-600 rounded-full"
                :src="`https://avatars.dicebear.com/api/croodles-neutral/${document?.name}.svg?backgroundColor=white`"
                alt=""
            />
        <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{{ document.name }}</p>
            <p class="text-sm text-gray-500">{{ document?.email }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
