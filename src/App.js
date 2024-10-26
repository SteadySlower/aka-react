import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import { AuthContextProvider } from "./context/AuthContext";
import TestList from "./components/testList/TestList";
import DoTest from "./components/test/DoTest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/test",
        element: <TestList />,
    },
    {
        path: "/dotest/:id",
        element: <DoTest />,
    },
]);

function App() {
    return (
        <AuthContextProvider>
            <RouterProvider router={router}>
                <Home />
            </RouterProvider>
        </AuthContextProvider>
    );
}

export default App;
