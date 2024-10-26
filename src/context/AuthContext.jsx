import { createContext, useContext, useState } from "react";
import { USERS } from "../dummyData";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const login = (id, password) => {
        const currentUser = USERS.find((user) => user.id === id);
        if (currentUser === undefined) {
            setError("존재하지 않는 아이디입니다.");
            setTimeout(() => setError(null), 3000);
            return;
        }
        if (currentUser.password !== password) {
            setError("비밀번호가 틀립니다.");
            setTimeout(() => setError(null), 3000);
            return;
        }
        setUser({ id: currentUser.id, isTeacher: currentUser.isTeacher });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
