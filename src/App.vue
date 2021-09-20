<script>
import { onUnmounted } from 'vue'
import getUser from './composables/getUser';
import useOnlineCollection from './composables/useOnlineCollection';
export default {
    setup () {
        const { user } = getUser();
        const { deleteOnline } = useOnlineCollection();

        window.addEventListener('beforeunload', async (e) => {
            e.preventDefault();
            e.returnValue = '';
            console.log(user.value)
            await deleteOnline(user.value.uid)
        })
    }
}
</script>

<template>
    <div class="bg-gray-200">
        <router-view />
    </div>
</template>
