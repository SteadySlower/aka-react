import { createContext, useContext, useEffect, useState } from "react";
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
        const newUser = { id: currentUser.id, isTeacher: currentUser.isTeacher }
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        const storedUser = localStorage.user;
        if (storedUser !== undefined) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
