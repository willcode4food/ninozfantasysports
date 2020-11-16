import { useEffect, useState } from 'react'
import useFirebaseApp from './useFirebaseApp'

//TODO:add proptypes to all firebase hooks

function useFirestoreDocument(data = { collection: null, docId: null, firebaseConfig: null }) {
    const { collection, docId, firebaseConfig } = data
    const [document, setDocument] = useState(null)
    const [collectionName, setCollectionName] = useState(null)
    const [isFirestoreLoading, setIsFirestoreLoading] = useState(false)
    const [documentId, setDocumentId] = useState(null)
    const [firestoreError, setFirestoreError] = useState(null)

    const { db } = useFirebaseApp({ firebaseConfig })
    useEffect(() => {
        async function getDocument() {
            setIsFirestoreLoading(true)

            if (docId) {
                const docRef = await db.collection(collection).doc(docId)
                const doc = await docRef.get()
                setDocument(doc.exists ? { ...doc.data(), exists: true } : { exists: false })
            }
            setIsFirestoreLoading(false)
        }
        if (collection) {
            getDocument()
            setDocumentId(docId)
            setCollectionName(collection)
        } else {
            setIsFirestoreLoading(false)
        }
    }, [docId, collection])

    async function updateDocument(data) {
        if (collection) {
            try {
                setIsFirestoreLoading(true)
                const docReference = await db.collection(collectionName).doc(documentId)

                await db.runTransaction(async function (transaction) {
                    const record = await transaction.get(docReference)
                    if (!record.exists) {
                        setFirestoreError('Invalid Id')
                    }
                    // filter nulls
                    const filteredData = Object.keys(data).reduce((prev, curr) => {
                        if (data[curr]) {
                            prev[curr] = data[curr]
                        }
                        return prev
                    }, {})
                    await transaction.update(docReference, { ...filteredData })
                    setDocument(data)
                })
                setIsFirestoreLoading(false)
            } catch (e) {
                setFirestoreError(e.message)
            }
        }
    }
    async function createDocument(collectionName, data, documentId) {
        try {
            let firestoreDoc = {}
            if (documentId) {
                firestoreDoc = await db.collection(collectionName).doc(documentId).set(data)
            } else {
                firestoreDoc = await db.collection(collectionName).add(data)
            }
            setDocument(firestoreDoc.data())
            setDocumentId(firestoreDoc.docId)
        } catch (e) {
            setFirestoreError(e.message)
        }
    }

    return {
        document,
        createDocument,
        updateDocument,
        firestoreError,
        isFirestoreLoading,
        documentId,
        collectionName,
    }
}

export default useFirestoreDocument
