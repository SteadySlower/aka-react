import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import EditTest from "./components/edit/EditTest";
import { AnswerContextProvider } from "./context/AnswerContext";

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
                        <AnswerContextProvider>
                            <DoTest />
                        </AnswerContextProvider>
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
                    <ProtectedRoute requireTeacher>
                        <InsertTest />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/edit/:id",
                element: (
                    <ProtectedRoute requireTeacher>
                        <EditTest />
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
