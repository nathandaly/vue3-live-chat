import { ref } from 'vue'
import { firestore } from '../firebase/config'

const useCollection = (collectionName) => {
    const error = ref(null)

    const addDocument = async (document) => {
        error.value = null

        try {
            firestore.collection(collectionName).add(document);
        } catch (err) {
            console.error(err.message)
            error.value = `Could not add the document to collection '${collectionName}'`
        }
    }

    return { error, addDocument }
}

export default useCollection
