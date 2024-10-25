import React, { useState } from "react";

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
        console.log(id, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ID" onChange={handleIdChange} />
            <input type="text" placeholder="Password" onChange={handlePasswordChange} />
            <button>Login</button>
        </form>
    );
}

export default Login;
