import { child, get, getDatabase, ref } from 'firebase/database'
import { getFirebaseApp } from '../firebaseHelper'

export const getUserData = async (userId) => {
    try {
        const app = getFirebaseApp();
        const dbRef = ref(getDatabase(app));
        const userRef = child(dbRef, `users/${userId}`);

        const snapshot = await get(userRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            throw new Error("User data not found.");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("An error occurred while fetching user data.");
    }
};
