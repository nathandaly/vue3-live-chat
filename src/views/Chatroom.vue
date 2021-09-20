<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import OnlineUsers from "../components/OnlineUsers.vue";
import getUser from "../composables/getUser";

const router = useRouter();
const { user } = getUser();

watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>

<template>
  <div>
    <Navbar></Navbar>
    <main class="flex-1 w-full min-w-0 mx-auto border-t border-gray-200 lg:w-4/6 lg:flex">
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="flex flex-col flex-1 h-full min-w-0 overflow-hidden lg:order-last">
          <div class="h-full p-6">
            <div class="w-full bg-white divide-y divide-gray-300 rounded-lg shadow-lg">
              <div class="px-4 py-5 sm:p-6">
                <ChatWindow />
              </div>
              <div class="px-4 py-4 sm:px-6">
                <NewChatForm />
              </div>
            </div>
          </div>
      </section>

        <aside class="hidden p-6 lg:block lg:flex-shrink-0 lg:order-first">
            <div class="h-full overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow w-96">
                <div class="px-4 py-5 sm:px-6">
                    <h2>Online users</h2>
                </div>
                <div class="sm:px-4">
                    <OnlineUsers />
                </div>
            </div>
        </aside>
    </main>
  </div>
</template>
