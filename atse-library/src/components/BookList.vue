<!-- Week 8 Activity 8.5.1: Create a new component for query -->
<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                <div v-if="editingId === book.id">
                    <input v-model="editingName" placeholder="New book name..." />
                    <button @click="updateBook(book.id)">Edit</button>
                    <button @click="deleteBook(book.id)">Delete</button>
                    <button @click="cancelEdit">Cancel</button>
                </div>

                <div v-else>
                    {{ book.name }} (ISBN: {{ book.isbn }})
                    <button @click="startEdit(book)">Edit</button>
                    <button @click="deleteBook(book.id)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const books = ref([]);
const editingId = ref(null);
const editingName = ref('');

const fetchBooks = async () => {
    try{
        const q = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy('isbn', 'asc'), limit(5));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((docSnap) => {
            booksArray.push({ id: docSnap.id, ...docSnap.data() });
        });
        books.value = booksArray;
    } catch (error) {
        console.error('Error fetching books: ', error);
    }
};

const startEdit = (book) => {
    editingId.value = book.id;
    editingName.value = book.name;
};

const cancelEdit = () => {
    editingId.value = null;
    editingName.value = '';
};

const updateBook = async (id) => {
    try {
        const bookRef = doc(db, 'books', id);
        await updateDoc(bookRef, {
            name: editingName.value
        });
        alert('Book updated successfully!');
        editingId.value = null;
        fetchBooks();
    } catch (error) {
        console.error('Error updation book: ', error);
    }
};

const deleteBook = async (id) => {
    if (confirm('Are you sure you want to delete this book?')) {
        try {
            await deleteDoc(doc(db, 'books', id));
            alert('Book deleted successfully!');
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book: ', error);
        }
    }
};
onMounted(() => {
    fetchBooks();
});
</script>

<style>
</style>