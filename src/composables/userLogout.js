import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
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
