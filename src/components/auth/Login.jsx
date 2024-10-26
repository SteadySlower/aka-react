import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ID" onChange={handleIdChange} />
            <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
            />
            {error && <p>{error}</p>}
            <button>Login</button>
        </form>
    );
}

export default Login;
