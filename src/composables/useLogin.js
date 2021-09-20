import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const login = async (email, password, displayName) => {
    error.value = null

    try {
        return await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
        error.value = err.message
    }
}

const useLogin = () => {
    return {error, login}
}

export default useLogin
