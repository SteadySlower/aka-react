import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Home(props) {
    return (
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Outlet />
            </QueryClientProvider>
        </AuthContextProvider>
    );
}

export default Home;
