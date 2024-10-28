import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FiBook } from "react-icons/fi";
import styles from "./Header.module.scss";
import Button from "./ui/Button";

function Header(props) {
    const { user, logout } = useAuthContext();
    return (
        <header className={styles.header}>
            <Link className={styles.homeLink} to="/aka-react">
                <FiBook className={styles.icon} />
                <h1>AKA ENGLISH</h1>
            </Link>
            <nav className={styles.nav}>
                {user && (
                    <Link to="/aka-react/test" className={styles.link}>
                        Tests
                    </Link>
                )}
                {user && user.isTeacher && (
                    <Link to="/aka-react/insert" className={styles.link}>
                        Add Test
                    </Link>
                )}
                {user && !user.isTeacher && (
                    <Link to="/aka-react/result" className={styles.link}>
                        Test Result
                    </Link>
                )}
                {user && <Button text="Logout" onClick={logout} />}
            </nav>
        </header>
    );
}

export default Header;
