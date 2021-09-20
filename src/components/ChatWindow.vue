<script setup>
import { ref, onUpdated } from 'vue'
import moment from 'moment'
import { Disclosure, DisclosurePanel } from '@headlessui/vue'
import getCollection from '../composables/getCollection'

const { error, documents } = getCollection('messages')
const messages = ref(null)

onUpdated(() => {
    messages.value.scrollTop = messages.value.scrollHeight
})

const humanReadableTime = (date) => {
    const createdAt = moment(date.toDate())
    return createdAt.fromNow()
}
</script>

<template>
  <div v-if="documents" class="h-full px-4 py-6 overflow-y-auto window-container sm:px-6" ref="messages">
    <ul role="list" class="space-y-8 divide-y divide-gray-300 ">
      <li v-for="document in documents" :key="document.id" class="">
        <div class="flex mt-6 space-x-3">
          <div class="flex-shrink-0 ">
            <img
              class="w-10 h-10 border border-gray-600 rounded-full"
              :src="`https://avatars.dicebear.com/api/croodles-neutral/${document?.name}.svg?backgroundColor=white`"
              alt=""
            />
          </div>
          <div>
            <div class="text-sm">
              <a href="#" class="font-medium text-gray-900">{{
                document.name
              }}</a>
            </div>
            <div class="mt-1 text-sm text-gray-700">
              <p>{{ document.message }}</p>
            </div>
            <div class="mt-2 space-x-2 text-sm">
              <span class="text-xs font-medium text-gray-500">{{ humanReadableTime(document.createdAt) }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.window-container {
    height: 600px;
}
</style>
