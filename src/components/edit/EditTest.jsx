import React from "react";
import { useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";
import QuestionSelector from "./QuestionSelector";

function EditTest() {
    const {
        state: { test },
    } = useLocation();
    const {
        questionsQuery: { isLoading, data: questions },
    } = useTest(test.id);

    if (isLoading) {
        return <p>is Loading...</p>;
    }

    return (
        <>
            <h2>{test.title} 수정하기</h2>
            <QuestionSelector questions={questions} />
        </>
    );
}

export default EditTest;
