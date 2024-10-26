import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import TestList from "./components/testList/TestList";
import Welcome from "./components/Welcome";
import DoTest from "./components/test/DoTest";
import ResultList from "./components/resultList/ResultList";
import InsertTest from "./components/insert/InsertTest";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoutes";
import Result from "./components/result/Result";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Welcome /> },
            {
                path: "/test",
                element: (
                    <ProtectedRoute>
                        <TestList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/dotest/:id",
                element: (
                    <ProtectedRoute>
                        <DoTest />,
                    </ProtectedRoute>
                ),
            },
            {
                path: "/result",
                element: (
                    <ProtectedRoute>
                        <ResultList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/result/:id",
                element: (
                    <ProtectedRoute>
                        <Result />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/insert",
                element: (
                    <ProtectedRoute>
                        <InsertTest />
                    </ProtectedRoute>
                ),
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
