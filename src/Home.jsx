import React from "react";
import Login from "./components/auth/Login";
import { useAuthContext } from "./context/AuthContext";

function Home(props) {
    const { user } = useAuthContext();

    return (
        <div>
            Welcome to AKA English Test!
            {!user && <Login />}
            {user && <p>{user.id}! Are you ready to {user.isTeacher ? "teach" : "study"}?</p>}
        </div>
    );
}

export default Home;
