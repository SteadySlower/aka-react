import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import TeacherTestList from "./TeacherTestList";
import StudentTestList from "./StudentTestList";

function TestList() {
    const { user } = useAuthContext();

    if (user && user.isTeacher) {
        return <TeacherTestList />;
    } else if (user && !user.isTeacher) {
        return <StudentTestList />;
    } else {
        return <p>is Loading...</p>
    }
}

export default TestList;
