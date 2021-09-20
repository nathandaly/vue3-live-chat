import { ref, watchEffect } from 'vue'
import { firestore } from '../firebase/config'

const getCollection = (collectionName) => {
    const error = ref(null)
    const documents = ref(null)

    const collectionRef = firestore.collection(collectionName)
        .orderBy('createdAt', 'asc')

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
            doc.data().createdAt && results.push({
                ...doc.data(),
                id: doc.id
            })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.error(err.message)
        documents.value = null
        error.value = `Error retrieving collection '${collectionName}'`
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsubscribe())
    })

    return { error, documents }
}

export default getCollection
