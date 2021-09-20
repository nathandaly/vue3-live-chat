import { ref } from 'vue'
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)

auth.onAuthStateChanged((firebaseUser) => {
    console.log('current user: ', firebaseUser)
    user.value = firebaseUser
})

const getUser = () => {
    return { user }
}

export default getUser
