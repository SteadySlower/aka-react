import React from "react";
import Login from "./components/auth/Login";
import { AuthContextProvider, useAuthContext } from "./context/AuthContext";

function Home(props) {
    return (
        <AuthContextProvider>
            <InnerHome />
        </AuthContextProvider>
    );
}

function InnerHome() {
    const { user } = useAuthContext();

    return (
        <div>
            Welcome to AKA English Test!
            {!user && <Login />}
            {user && <p>{user.id}</p>}
        </div>
    );
}

export default Home;
