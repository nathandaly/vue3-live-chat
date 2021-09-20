<template>
    <div class="px-2 bg-blue-500 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 mx-auto max-w-7xl">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div>
        <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center flex-shrink-0 text-white">
            <h1>Live Chat Demo</h1>
          </div>
        </div>
        <div v-if="user?.uid" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex text-sm bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="`https://avatars.dicebear.com/api/croodles-neutral/${ user.displayName }.svg?backgroundColor=white`" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white border border-gray-400 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <p class="block px-4 py-2 text-xs text-gray-700">You are logged in as:  <strong>{{ user?.email }}</strong></p>
                </MenuItem>
                <MenuItem>
                  <a href="#" @click="handleLogout" class="block px-4 py-2 text-sm text-gray-700 rounded hover:bg-blue-400 hover:text-white">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import useLogout from '../composables/userLogout'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const router = useRouter()
const { user } = getUser()
const { error, logout } = useLogout()

const handleLogout = async () => {
    await logout()
}
</script>
