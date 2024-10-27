import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import style from "./Login.module.scss"
import Button from "../ui/Button";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        login(id, password);
    };
    const { error, login } = useAuthContext();

    return (
        <form className={style.container} onSubmit={handleSubmit}>
            <input type="text" placeholder="ID" onChange={handleIdChange} />
            <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
            />
            <p className={error ? style.show : style.hide}>{error}</p>
            <Button text="Login" />
        </form>
    );
}

export default Login;
