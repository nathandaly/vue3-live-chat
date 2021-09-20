import { ref } from 'vue'
import { auth } from '../firebase/config'
import getUser from './getUser';
import useOnlineCollection from './useOnlineCollection';

const { user } = getUser();
const { deleteOnline } = useOnlineCollection();

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        await deleteOnline(auth.currentUser.uid)
        await auth.signOut()
    } catch (err) {
        console.error(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return {error, logout}
}

export default useLogout
