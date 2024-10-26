import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Header(props) {
    const { user, logout } = useAuthContext();
    return (
        <header style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">
                <h1>AKA ENGLISH</h1>
            </Link>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                }}
            >
                {user && <Link to="/test">Tests</Link>}
                {user && user.isTeacher && <Link to="/insert">Add Test</Link>}
                {user && <Link to="/result">Test Result</Link>}
                {user && <button onClick={logout}>Logout</button>}
            </nav>
        </header>
    );
}

export default Header;
