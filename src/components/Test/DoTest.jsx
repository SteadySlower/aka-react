import React, { useState } from "react";
import Question from "./Question";
import AnswerTable from "./AnswerTable";
import { AnswerContextProvider } from "../../context/AnswerContext";
import { useParams } from "react-router-dom";
import useTest from "../../hooks/useTest";

function DoTest() {
    const { id: testId } = useParams();
    const {
        questionsQuery: { isLoading, data: questions },
    } = useTest(testId);
    const [index, setIndex] = useState(0);
    const handleTableClick = (index) => {
        setIndex(index);
    };

    if (isLoading) {
        return <p>is Loading...</p>;
    }
    return (
        <AnswerContextProvider>
            <AnswerTable
                ids={questions.map((q) => q.id)}
                onClick={handleTableClick}
            />
            <Question question={questions[index]} />
        </AnswerContextProvider>
    );
}

export default DoTest;
