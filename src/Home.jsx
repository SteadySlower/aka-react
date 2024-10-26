import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function Home(props) {
    return (
        <AuthContextProvider>
            <Header />
            <Outlet />
        </AuthContextProvider>
    );
}

export default Home;
