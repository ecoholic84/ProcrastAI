import { auth, db, pushListeners } from '../hooks';
import Toast from 'react-native-toast-message';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';

export const createTask = async(data) => {
    try{
        const newData = {
            ...data,
            timestamp: serverTimestamp(),
            taskCompletedTimestamp: null,
            status: false,
            mood: null,
            procastinated: false,
        };
        const docRef = collection(db, 'users', auth.currentUser.uid, 'tasks');
        await addDoc(docRef, newData);
        Toast.show({ text1: "Task created" });
    }catch(e){
        console.log(e);
        Toast.show({ text1: "Couldn't create task" });
    }
};

export const listenTasks = (setData) => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    try{
        const Query = query(collection(db, 'users', auth.currentUser.uid, 'tasks'), where('timestamp', '>=', startOfToday), where('timestamp', '<', endOfToday), orderBy('timestamp', 'desc'));
        const listener = onSnapshot(Query, snap => {
            setData(snap.docs.map((doc) =>  ({ id: doc.id, ...doc.data() })));
        });
        pushListeners(listener);
    }catch(e){
        console.log(e);
        Toast.show({ text1: "Error listening to tasks" });
    }
};