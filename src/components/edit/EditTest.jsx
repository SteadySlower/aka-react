import React from "react";
import { useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";

function EditTest() {
    const {
        state: { test },
    } = useLocation();
    const {
        questionsQuery: { isLoading, data: questions },
    } = useTest(test.id);

    if (isLoading) {
        return <p>is Loading...</p>
    }

    return <div>Edit Test {JSON.stringify(test)}{questions.length}</div>;
}

export default EditTest;
