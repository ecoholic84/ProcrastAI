import React from "react";
import { getStorage } from 'firebase/storage';
import { hideAsync } from "expo-splash-screen";
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { initializeApp, getApp, getApps } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadInitials, firebaseConfig, clearSubscriptions } from './helper';
import { onAuthStateChanged, initializeAuth, getReactNativePersistence } from 'firebase/auth';

const app = getApps().length===0 ? initializeApp(firebaseConfig) : getApp();

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);

    const onAuthStateChangedObserver = (user) => {
        hideAsync();
        if(user) setUser(true);
        else{ 
            setUser(false);
            clearSubscriptions();
        }
    };

    React.useEffect(() => {
        loadInitials();
        onAuthStateChanged(auth, onAuthStateChangedObserver);
    }, []);

    const contextValues = { user };

    return (

        <DataContext.Provider value={contextValues}>
            {children}
        </DataContext.Provider>

    );

};

export const useData = () => React.useContext(DataContext);