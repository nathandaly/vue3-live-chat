import { ref } from 'vue'
import { firestore } from '../firebase/config'

const useOnlineCollection = () => {
    const error = ref(null)

    const deleteOnline = async (uid) => {
        error.value = null

        try {
            console.log(uid)
            const docs = await firestore.collection('online').where('uid', '==', uid).get();
            docs.forEach(element => {
                console.log(element)
                element.ref.delete();
                console.info(`deleted: ${element.id}`);
            });
        } catch (err) {
            console.error(err.message)
            error.value = `Could not delete the online document with user UID '${ uid }'`
        }
    }

    return { error, deleteOnline }
}

export default useOnlineCollection
