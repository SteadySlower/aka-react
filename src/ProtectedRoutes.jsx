import React from "react";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requireTeacher }) {
    const { user } = useAuthContext();
    if (user === "not ready") {
        return <p>Loading Auth</p>;
    }
    if (!user || (requireTeacher && !user.isTeacher)) {
        return <Navigate to="/" replace />; // replace를 넣으면 history에서 빼줌!
    }
    return children;
}

export default ProtectedRoute;
