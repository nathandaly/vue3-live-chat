import { ref } from 'vue'
import { firestore } from '../firebase/config'

const getCollection = (collectionName) => {
    const error = ref(null)
    const documents = ref(null)

    const collectionRef = firestore.collection(collectionName)
        .orderBy('createdAt', 'asc')

    collectionRef.onSnapshot((snapshot) => {
        console.log(snapshot.docs)

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

    return { error, documents }
}

export default getCollection
