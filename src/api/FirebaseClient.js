import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, set, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class FirebaseClient {
    async getTests() {
        return get(ref(database, "tests")).then((snapshot) => {
            if (snapshot.exists()) {
                return Object.values(snapshot.val());
            }
        });
    }

    async getAnsweredTests(userId) {
        return Promise.all([
            get(ref(database, "tests")).then((snapshot) => {
                if (snapshot.exists()) {
                    return Object.values(snapshot.val());
                }
                return []
            }),
            get(ref(database, `answers/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    return snapshot.val();
                }
                return {};
            }),
        ]).then(([tests, answers]) => {
            return tests.map((t) => {
                if (answers[t.id]) {
                    return { ...t, hasResult: true };
                }
                return { ...t, hasResult: false };
            });
        });
    }

    async getTest(id) {
        return get(ref(database, `tests/${id}`)).then((snapshot) => {
            return snapshot.val();
        });
    }

    async getAnswers(userId, testId) {
        return get(ref(database, `answers/${userId}/${testId}`)).then(
            (snapshot) => {
                if (snapshot.exists()) {
                    return snapshot.val();
                }
                return {};
            }
        );
    }

    async postAnswers(userId, testId, answers) {
        return set(ref(database, `answers/${userId}/${testId}`), answers);
    }

    async postTest(test) {
        return set(ref(database, `tests/${test.id}`), test);
    }

    async deleteTest(id) {
        return remove(ref(database, `tests/${id}`));
    }

    async editTest(test) {
        return set(ref(database, `tests/${test.id}`), test);
    }
}

const client = new FirebaseClient();
export default client;
