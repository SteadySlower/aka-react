import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
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
