import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import TeacherTestList from "./TeacherTestList";
import StudentTestList from "./StudentTestList";

function TestList() {
    const { user } = useAuthContext();

    if (user.isTeacher) {
        return <TeacherTestList />;
    } else {
        return <StudentTestList />;
    }
}

export default TestList;
