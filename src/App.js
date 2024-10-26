import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import { AuthContextProvider } from "./context/AuthContext";
import TestList from "./components/testList/TestList";
import Welcome from "./components/Welcome";
import DoTest from "./components/test/DoTest";
import Result from "./components/result/Result";
import InsertTest from "./components/insert/InsertTest";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Welcome /> },
            {
                path: "/test",
                element: <TestList />,
            },
            {
                path: "/dotest/:id",
                element: <DoTest />,
            },
            {
                path: "/result",
                element: <Result />,
            },
            {
                path: "/insert",
                element: <InsertTest />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <Home />
        </RouterProvider>
    );
}

export default App;
