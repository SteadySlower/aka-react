import React from "react";
import Login from "./auth/Login";
import { useAuthContext } from "../context/AuthContext";
import style from "./Welcome.module.scss";

function Welcome() {
    const { user } = useAuthContext();

    return (
        <div className={style.container}>
            <h2>Welcome to AKA English Test!</h2>
            {!user && <Login />}
            {user && (
                <p>
                    {user.id}! Are you ready to{" "}
                    {user.isTeacher ? "teach" : "study"}?
                </p>
            )}
        </div>
    );
}

export default Welcome;
